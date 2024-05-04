import mongoose from 'mongoose';

mongoose
  .connect('mongodb://localhost:27017/MyProjectDb')
  .then(() => {
    console.log('DbConnected');
  })
  .catch(e => {
    console.log(e);
  });
export default mongoose;
