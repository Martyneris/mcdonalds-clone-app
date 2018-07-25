const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// @route  POST /api/orders
// @access Public
// @desc   Create new order
router.post('/', async (req,res)=>{
    console.log(req.body);
    const {firstname, lastname, phone, address, orders} = req.body;
    // validate phone , ... etc..
    const errors = {};
    if (phone[0] !== '+' && phone[0] !== '8'){
        errors.phone='invalid phone number';
        return res.status(400).json(errors)
    }
    const order = new Order({ firstname, lastname, phone, address, orders });
     try{
         await order.save();

         // emitinamas event i front end
         const io = req.app.get('socketio');
         io.emit('neworder', order);
         res.json({message:'Thank you for your order!'})
     } catch(err){
         console.log(err);
         res.json(err);
     }
});


module.exports = router;