import { Schema, model } from 'mongoose';

const schema = Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  image: {
    type: String,
  },
  gender: {
    type: String,
    required: true,
  },
  available:{
    type:Boolean,
    default:true,
   
  },
  
  
});
const Employe = model('Employe', schema);

export default Employe;
