import Input from '../../Components/Input';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Button from '../../Components/Button';
import Navbar from '../../Components/Navabar';
import { Link } from 'react-router-dom';
import axios from '../../utilities/axios';
import './login.css';


const EmpLog = () => {
  const navigate = useNavigate();
  const [logData, setLogData] = useState({
    email: '',
    password: '',
  });

  const onLogChange = (e, key) => {
    setLogData({ ...logData, [key]: e.target.value });
  };
  const onLogClick = async () => {
    const responce = await axios.post('/employe/login', logData);
    if (responce.data.token) {
      localStorage.setItem('token', responce.data.token);
    }
    navigate('/empProfile');
  };
  const onSignClick = () => {
    navigate('/empSign');
  };
  return (
    <div className="log">
      <Navbar/>
      <Link to='/AdminLogin' className='admin-link'>Admin</Link>
      <div className="log1">
        <h1>Log-In!</h1>
        <Input
          placeholder="Email"
          onChange={e => {
            onLogChange(e, 'email');
          }}
        />
        <Input
          placeholder="Password"
          onChange={e => {
            onLogChange(e, 'password');
          }}
        />
        <Button className="but1" onClick={onLogClick}>
          LogIn
        </Button>
        <div className="log-sign">
          <p>you don't have Account?</p>
          <Button className="sign" onClick={onSignClick}>
            Sign-Up
          </Button>
        </div>
      </div>
    </div>
  );
};
export default EmpLog;
