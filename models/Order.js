const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
   firstname:{
       required:true,
       type:String,
       maxlength:50,
   },
   lastname:{
       required: true,
       type: String,
       maxlength: 50,
   },
   phone:{
       required: true,
       type: String,
       maxlength: 50,
   },
   address:{
       required: true,
       type: String,
       maxlength: 50,
   },
   orders:[]
});

module.exports = mongoose.model('orders',OrderSchema);