import Navbar from '../../Components/Navabar'
import Button from '../../Components/Button'
import axios from '../../utilities/axios'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './addemp.css'

const AddEmploye=()=>{
    const [male,setMale]=useState([])
    const onAddMaleEmpClick=async()=>{
const responce =await axios.get('/employe/gender/male')
  setMale(responce.data)
    }
    const navigate=useNavigate()
    const onPrfClick=(id)=>{
    navigate(`/EmployeProfile/${id}`)
    }
    const [female,setFemale]=useState([])
    const onAddFemaleEmpClick=async()=>{
    const responce=await axios.get('/employe/gender/female')
    setFemale(responce.data)
    }

return(
    <div className="add-employe">
    <Navbar/>


    <div className="add-male">
    <Button className='btn-addemploye' onClick={onAddMaleEmpClick}>MALE</Button>
      {male.map((item)=>{
        return <div onClick={()=>{onPrfClick(item._id)}} className="add-male1">
            <img src={item.image} />
            <h2>{item.name}</h2>
            <p>{item.email}</p>
            <p>{item.available? 'yes':'no'}</p>
        </div>
      })}

    </div>
    <div className="add-female">
        <Button className='btn-addemploye' onClick={onAddFemaleEmpClick}>FEMALE</Button>
        {female.map((item)=>{
        return <div onClick={()=>{onPrfClick(item._id)}} className="add-male1">
            <img src={item.image} />
            <h2>{item.name}</h2>
            <p>{item.email}</p>
            <p>{item.available? 'yes':'no'}</p>
        </div>
      })}

    </div>
    </div>
)
}
export default AddEmploye