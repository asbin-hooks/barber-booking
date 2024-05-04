import express from 'express';
import User from '../../db/models/UserSchema.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const body = req.body;
    const user = await User.findOne({ email: body.email });
    if (user) {
      return res.status(400).json({ Message: 'this email alredy exist' });
    }
    if (body.password != body.confirmPassword) {
      return res.status(400).json({ Message: 'password does not match' });
    }
    const hashedPassword = await bcrypt.hash(body.password, 2);
    body.password = hashedPassword;
    const addUser = await User.create(body);
    return res.status(201).json(addUser);
  } catch (e) {
    return res.status(500).json(e);
  }
});
router.post('/login', async (req, res) => {
  try {
    const body = req.body;
    const addUser = await User.findOne({ email: body.email });
    if (!addUser) {
      return res.status(403).json({ Message: 'email or password missmatch' });
    }
    const isMaching = await bcrypt.compare(body.password, addUser.password);
    if (!isMaching) {
      return res
        .status(403)
        .json({ Message: 'email or password not missmatch' });
    }
    const token = jwt.sign(
      { id: addUser._id, role: ['User', 'Employe'] },
      'SETDRFYGUHUJTFGYH',
      { expiresIn: '7d' }
    );
    return res.status(200).json({ Message: 'loged in', token });
  } catch (e) {
    return res.status(500).json(e);
  }
});
router.get('/:id',async(req,res)=>{
  try{
    const {id}=req.params
   
    const user=await User.findById(id)
    return(
      res.status(200).json(user)
    )
  }catch(e){
    return(
      res.status(401).json(e)
    )
  }
})

export default router;
