import express from 'express';
import mongoose from './db/dbConnection.js';
import router from './routes/index.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('uploads'));
app.use(router);

app.get('/*', (req, res) => {
  res.status(404).json({ message: 'No Route Fount' });
});
app.listen(4444, () => {
  console.log('http://localhost:4444');
});
