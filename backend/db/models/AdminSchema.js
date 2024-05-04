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
  image:{
    type:String
  }
});
const Admin = model('Admin', schema);

export default Admin;
