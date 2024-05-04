import axios from '../../utilities/axios';
import { getId } from '../../utilities/token';
import { useState, useEffect } from 'react';
import Button from '../../Components/Button';
import { useNavigate } from 'react-router-dom';
import './profile.css'

const EmpProfile = () => {
  const navigate=useNavigate()
  const [profileData, setProfileData] = useState({});

  const id = getId();
  const profile = async () => {
    const responce = await axios.get(`/employe/${id}`);
    setProfileData(responce.data);
  };
  const onClick=(id)=>{
    navigate(`/Employe/Appointment/${id}`)
  }
  useEffect(() => {
    profile();
  }, []);
  return (
    <div className="profile">
      <div className="profile1">
        <img src={profileData.image} alt="" />
        <h1>{profileData.name}</h1>
        <h4>{profileData.gender}</h4>
        <p>{profileData.email}</p>
      </div>
      <div className="appoin">
        <Button onClick={()=>{onClick(id)}}>Appointments</Button>
      </div>
      
    </div>
  );
};
export default EmpProfile;
