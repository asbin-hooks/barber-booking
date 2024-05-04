import Navbar from '../../Components/Navabar';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from '../../utilities/axios';
import { ToastContainer, toast } from 'react-toastify';
import { getId } from '../../utilities/token';
import './userlogin.css';

const UserLogin = () => {
    const id=getId()
  const navigate = useNavigate();
  const [userLogData, setUserLogData] = useState({
    email: '',
    password: '',
  });
  const onUserLoginChange =(e,key)  => {
    setUserLogData({ ...userLogData, [key]: e.target.value });
  };
  const onUserLoginClick = async () => {
    const responce = await axios.post('/user/login', userLogData);
    if (responce.data.token) {
      localStorage.setItem('token', responce.data.token);
    }
    toast.success(' success login', {
        onClose: () => {
          navigate('/UserSelectGender');
        },
        autoClose: 500,
      });
    
    
  };

  const onUserSignUp = () => {
    navigate('/UserSign');
  };

  return (
    <div className="user-log">
      <Navbar />
      <ToastContainer/>
      <div className="user-log1">
        <h1>Log-In!</h1>
        <Input
          placeholder="Email"
          onChange={e => {
            onUserLoginChange(e, 'email');
          }}
        />
        <Input
          placeholder="Password"
          onChange={e => {
            onUserLoginChange(e, 'password');
          }}
        />
        <Button className="user-log-btn" onClick={onUserLoginClick}>
          Log-In
        </Button>
        <div className="user-log-sign">
          <p>you don't have Accound?</p>
          <Button className="user-sign-btn" onClick={onUserSignUp}>
            Sign-up
          </Button>
        </div>
      </div>
    </div>
  );
};
export default UserLogin;
