import Input from '../../Components/Input';
import Navbar from '../../Components/Navabar';
import Button from '../../Components/Button';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from '../../utilities/axios';
import { useNavigate } from 'react-router-dom';
import './usersign.css';

const UserSign = () => {
  const navigate = useNavigate();

  const [userSignup, setUserSignup] = useState({
    name: '',
    gender: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const onUserSignChange = async (e, key) => {
    setUserSignup({ ...userSignup, [key]: e.target.value });
  };
  const onUserSignClick = async () => {
    const responce = await axios.post('/user/signup', userSignup);
    toast.success('SignUp success please login', {
      onClose: () => {
        navigate('/UserLogin');
      },
      autoClose: 1000,
    });
  };

  return (
    <div className="user-sign">
      <Navbar />
      <ToastContainer />
      <div className="user-sign1">
        <h1>Sign-Up!</h1>
        <Input
          placeholder="Name"
          onChange={e => {
            onUserSignChange(e, 'name');
          }}
        />
        <select
          className="select"
          onChange={e => {
            onUserSignChange(e, 'gender');
          }}
        >
          <option disabled selected>
            Gender
          </option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <Input
          placeholder="Email"
          onChange={e => {
            onUserSignChange(e, 'email');
          }}
        />
        <Input
          className="a"
          placeholder="Password"
          onChange={e => {
            onUserSignChange(e, 'password');
          }}
        />
        <Input
          className="a"
          placeholder="ConfirmPassword"
          onChange={e => {
            onUserSignChange(e, 'confirmPassword');
          }}
        />
        <Button className="btn-sign" onClick={onUserSignClick}>
          Sign-In
        </Button>
      </div>
    </div>
  );
};
export default UserSign;
