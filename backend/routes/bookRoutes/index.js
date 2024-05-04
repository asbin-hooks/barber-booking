import Book from '../../db/models/BookSchema.js';
import express from 'express';

const router = express.Router();

router.post('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body ;
    const book = await Book.create({ ...body, employe: id });
    return res.status(200).json(book);
  } catch (e) {
    res.status(401).json(e);
  }
});



router.get('/', async (req, res) => {
  try {
    const book = await Book.find();
    return res.status(200).json(book);
  } catch (e) {
    return res.status(401).json(e);
  }
});
router.get('/book/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.find({ user: id }).populate('employe')
    return res.status(200).json(book);
  } catch (e) {
    res.status(401).json(e);
  }
});
router.patch('/accept/:id',async (req,res)=>{
  const body=req.body
  const {id}=req.params
  try{
   const book= await Book.findByIdAndUpdate(id,{...body,status:'accepted'})
    return res.json(book)
  }catch(e){
    res.status(401).json(e)
  }
})
router.patch('/reject/:id',async (req,res)=>{

  const {id}=req.params
  try{
   const book= await Book.findByIdAndUpdate(id,{status:'rejected'})
   return res.json(book)
  }catch(e){
    res.status(401).json(e)
  }
})
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.find({ employe: id }).populate('user');
    return res.status(200).json(book);
  } catch (e) {
    res.status(401).json(e);
  }
});

export default router;
