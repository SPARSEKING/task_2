const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
   id:{
       type: Types.ObjectId
   },
   login:{
       type: String,
       unique: true,
       required: true
   },
   password:{
       type: String,
       unique: true,
       required: true
   },
   email:{
       type: String,
       unique: true,
       required: true
   },
   date_reg:{
       type: Date,
       default: Date.now
   },
   date_author:{
       type: Date,
       default: Date.now
   },
   status:{
       type: String,
       default: 'active',
       enum:['active','unactive'],
   }
})

module.exports = model('User', schema)