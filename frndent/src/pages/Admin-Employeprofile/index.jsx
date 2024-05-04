import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getId } from '../../utilities/token';
import axios from '../../utilities/axios'
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import Navbar from '../../Components/Navabar';
import './employeprofile.css';


const EmployeProfile=()=>{
    const navigate=useNavigate()
    const {id}=useParams()
    const idd=getId()
    const [profile,setProfile]=useState({
        name:'',
        email:'',
        available:'',
    })
  const fetchProfile=async()=>{
    const responce=await axios.get(`/employe/${id}`)

    setProfile(responce.data)
  }
  const onChange=(e,key)=>{
    setProfile({...profile,[key]:e.target.value})
  }
  const onClick=async()=>{
    await axios.patch(`/employe/${id}`,profile)
     navigate('/AddEmploye')
  }
const onSaveBook=()=>{
    navigate(`/Employe/Appointment/${id}`)
  }
 useEffect(()=>{
    fetchProfile()
    
 },[])


return(
<div className="prf">
  <Navbar/> <Button className='prf-book' onClick={()=>{onSaveBook()}}>Bookings</Button>
   <div className="prf1">
   
        <Input onChange={(e)=>{onChange(e,'name')}} value={profile.name}/>
        <Input onChange={(e)=>{onChange(e,'email')}} value={profile.email}/>
        <Input onChange={(e)=>{onChange(e,'available')}} value={profile.available}/>
        <Button onClick={onClick}>SAVE</Button>
        
    </div>
</div>
   
)
}
export default EmployeProfile