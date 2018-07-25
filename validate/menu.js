const _ = require('lodash');

module.exports = (data)=>{
   const errors = {};
    if (!data.name) data.name = '';
       
       
   
   if(data.name.length<3) errors.name='name is too short';
   if(data.name.length>20) errors.name='name is too long';
   if (!data.name) errors.name = 'no name provided'

   if(!data.price){
       data.price = '';
       errors.price='no price provided'
   }
   if(data.price>100) errors.price='price is too high'

   return {errors,isValid:_.isEmpty(errors)}
};