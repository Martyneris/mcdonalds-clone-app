const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MenuSchema = new Schema({
  name:{
      type:String,
      required:true,
      minlength:2,
      maxlength:20,
      unique:true,
  },
  price:{
      type:Number,
      required:true,
  },
  admin:{
      type:Schema.Types.ObjectId,
      ref:'admins'
  },
  category:String,
  img:String
});

module.exports = mongoose.model('menus',MenuSchema);