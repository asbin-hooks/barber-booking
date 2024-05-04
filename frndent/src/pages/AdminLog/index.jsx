import Navbar from '../../Components/Navabar';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import axios from '../../utilities/axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './adminlog.css';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [adminData, setAdminData] = useState({
    email: '',
    password: '',
  });
  const onAdminLogChange = (e, key) => {
    setAdminData({ ...adminData, [key]: e.target.value });
  };
  const onAdminLogClick = async () => {
    const responce = await axios.post('/admin/login', adminData);

    navigate('/AddEmploye');
  };

  return (
    <div className="admin-log">
      <Navbar />
      <div className="admin-log1">
        <h2>Admin Log-In!</h2>
        <Input
          placeholder="Email"
          onChange={e => {
            onAdminLogChange(e, 'email');
          }}
        />
        <Input
          placeholder="Password"
          onChange={e => {
            onAdminLogChange(e, 'password');
          }}
        />
        <Button className="admin-log-btn" onClick={onAdminLogClick}>
          Log-In
        </Button>
      </div>
    </div>
  );
};
export default AdminLogin;
