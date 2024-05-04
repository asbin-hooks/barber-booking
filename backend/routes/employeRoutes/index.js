import express from 'express';
import Employe from '../../db/models/EmployeSchema.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const body = req.body;

    const a = body.password;
    const b = body.confirmPassword;

    body.password = 'mishab';
    body.confirmPassword = 'mishab';
    const employe = await Employe.findOne({ email: body.email });
    if (employe) {
      return res.status(400).json({ Message: 'this email alredy exists' });
    }
    if (body.password != body.confirmPassword) {
      return res.status(400).json({ Message: 'password doesnot match' });
    }
    const hashedPassword = await bcrypt.hash(body.password, 2);
    body.password = hashedPassword;
    const adEmploye = await Employe.create(body);
    return res.status(201).json(adEmploye);
  } catch (e) {
    return res.status(500).json(e);
  }
});
router.post('/login', async (req, res) => {
  try {
    const body = req.body;
    const employe = await Employe.findOne({ email: body.email });
    if (!employe) {
      return res.status(403).json({ Message: 'email or password incorrect' });
    }
    const isMaching = await bcrypt.compare(body.password, employe.password);
    // const isMaching = await Employe.findOne({ password: body.password });
    if (!isMaching) {
      return res.status(403).json({ Message: 'email or password incorrect' });
    }
    const token = jwt.sign(
      { id: employe._id, role: ['Employe', 'User'] },
      'SETDRFYGUHUJTFGYH',
      { expiresIn: '7d' }
    );
    return res.status(200).json({ Message: 'Logged In', token });
  } catch (e) {
    return res.status(500).json(e);
  }
});
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const employe = await Employe.findById(id);
    return res.status(200).json(employe);
  } catch (e) {
    return res.status(500).json(e);
  }
});
router.get('/gender/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const employe = await Employe.find({ gender: id });
    return res.status(200).json(employe);
  } catch (e) {
    return res.status(500).json(e);
  }
});
router.patch('/:id', async (req, res) => {
  try {
   
    const { id } = req.params;
    const body={...req.body}
    const employe = await Employe.findByIdAndUpdate(id,body);
    return res.status(200).json(employe);
  } catch (e) {
    return res.status(500).json(e);
  }
});
export default router;
