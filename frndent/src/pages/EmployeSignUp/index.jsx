import Input from '../../Components/Input';
import Navbar from '../../Components/Navabar';
import Button from '../../Components/Button';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../utilities/axios.js';
import { ToastContainer, toast } from 'react-toastify';
import './sign.css';

const EmpSign = () => {
  const navigate = useNavigate();
  const [signUp, setSignUp] = useState({
    name: '',
    gender: '',
    image: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const onSignChange = async (e, key) => {
    if (key == 'image') {
      const imageData = new FormData();
      imageData.append('file', e.target.files[0]);
      const responce = await axios.post('/image', imageData);
      setSignUp({ ...signUp, image: responce.data.url });
    } else {
      setSignUp({ ...signUp, [key]: e.target.value });
    }
  };
  const onSignClick = async () => {
    const responce = await axios.post('/employe/signup', signUp);
    toast.success('SignUp sucess please login', {
      onClose: () => {
        navigate('/emplog');
      },
      autoClose: 1000,
    });
  };

  return (
    <div className="emp-sign">
      <Navbar />
      <ToastContainer />
      <div className="emp-sign1">
        <h1>Sign-Up!</h1>
        <Input placeholder="Name" onChange={e => onSignChange(e, 'name')} />
        <select className="select" onChange={e => onSignChange(e, 'gender')}>
          <option disabled selected>
            Gender
          </option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <Input
          placeholder="Image"
          type="file"
          onChange={e => onSignChange(e, 'image')}
        />
        <Input placeholder="Email" onChange={e => onSignChange(e, 'email')} />
        <Input
          placeholder="Password"
          onChange={e => onSignChange(e, 'password')}
        />
        <Input
          placeholder="ConfirmPassword"
          onChange={e => onSignChange(e, 'confirmPassword')}
        />
        <Button className="btn-sign" onClick={onSignClick}>
          Sign-In
        </Button>
      </div>
    </div>
  );
};
export default EmpSign;
