const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');

const createAdmin = async (name,password)=>{
  try{
      // hash password
      const hash= await bcrypt.hash(password,10)
      const admin =  new Admin({name,password:hash});
      await admin.save();
       console.log('admin was created');
       process.exit(1)
    } catch(err){
      console.log(err);
      process.exit(1)
    }
};

module.exports = createAdmin;