const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../auth/auth');

router.post('/login', async (req,res)=>{
    // surandam ar yra admin
    const admin = await Admin.findOne({name:req.body.name})
    if(!admin) return res.status(400).json({message:'bad login info '});
    // kai adminas surandamas, tikrinamas passwordas
    const match = await bcrypt.compare(req.body.password, admin.password);
    if (!match) return res.status(400).json({ message: 'bad login info '});
    
    // jei viskas ok, grazinam jwt tokena
    // sugeneruojam JWT
    const token = jwt.sign({name:admin.name, _id:admin._id}, process.env.JWT_KEY)
    res.send(token)
});


router.post('/test',auth, (req,res)=>{
    res.send('authorized')
});


module.exports = router;