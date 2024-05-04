import { Schema, model } from 'mongoose';

const schema = Schema({
  date: {
    type: Date,
    required: true,
  },

  phoneNumber: {
    type: Number,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  houseNumber: {
    type: Number,
    required: true,
  },
  landMark:{
    type:String,
    required:true,
  },
  
// details:{
//     type:String,
//     required:true
// },
time: {
  type: String,
  required: true,
},
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  employe: {
    type: Schema.Types.ObjectId,
    ref: 'Employe',
  },
  status:{
    type:String,
    default:'pending',
    enum:['pending','accepted','rejected'],
  },
  
});

const Book = model('Book', schema);

export default Book;
