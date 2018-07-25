const express = require('express');
const router = express.Router();
const Menu = require('../models/Menu');
const validateMenu = require('../validate/menu');
const multer = require('multer');
const fs = require ('fs');
const auth = require('../auth/auth');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/img/menu')
    },
    filename: function (req, file, cb) {
        const filename = Date.now()+file.originalname;
        req.filename = filename;
        cb(null, filename)
    }
});

var upload = multer({ storage: storage })

// @route  GET   /api/menu
// @access Public
// @desc   Get all menu items
router.get('/', async (req,res)=>{
    // uzklausa i DB ir gaunami visi menu items
    const menu = await Menu.find();
    res.json(menu)
});

// @route POST /api/menu
// @access Admin
// @description Create menu item
router.post('/', auth, upload.single('image'), async (req,res)=>{
    console.log(req.file);
    const {errors,isValid} = validateMenu(req.body);
    if(!isValid) return res.status(400).json(errors);
    const menu = new Menu({
       name:req.body.name,
       price:req.body.price,
       category:req.body.category,
       img:'/img/menu/'+req.filename
    });
    try{
      await menu.save();
      res.json(menu)
    }catch(err){
        console.log(err);
        res.status(400).json(err)
    }
});

// @route  DELETE /api/menu/:id
// @access Admin
// @desc   Delete menu item
router.delete('/:id',auth, async (req,res)=>{
    console.log(req.params);
    try{
    const item = await Menu.findByIdAndRemove(req.params.id);
    fs.unlink('public/'+item.img,(err)=>{
        if(!err) return console.log('file removed');
        console.log(err);
    })
    res.json(item)
    }catch(err){
    console.log(err);
    }  
});


module.exports = router;


