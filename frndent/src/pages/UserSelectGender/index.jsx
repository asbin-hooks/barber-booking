import Navbar from '../../Components/Navabar';
import Button from '../../Components/Button';
import ButtonD from '../../Components/ButtonD';
import axios from '../../utilities/axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getId } from '../../utilities/token';
import './user-select.css';

const UserSelectGender = () => {
  const id = getId();
  const [male, setMale] = useState([]);
  const onMaleAddClick = async male => {
    const responce = await axios.get('/employe/gender/male');
    setMale(responce.data);
    console.log(male);
  };
  const navigate = useNavigate();
  const onSelectClick = id => {
    navigate(`/BookEmploye/${id}`);
  };
  const onBookClick = () => {
    navigate(`/UserMyBooking/${id}`);
  };
  const [Female,setFemale]=useState([])
  const onFemaleAddClick=async(female)=>{
 const responce =await axios.get('/employe/gender/female')
 setFemale(responce.data)
  }
  return (
    <div className="select-gender">
      <Navbar />
      <div className="mybook">
        <Button onClick={onBookClick}>MYbookings</Button>
      </div>

      <div className="select-gender1">
        <div className="select-gender2">
          <Button
            className="male-btn"
            onClick={() => {
              onMaleAddClick(male);
            }}
          ></Button>
        </div>
        <div className="select-gender3">
          {male.map(item => {
            return (
              <div className="select-gender5">
                <img src={item.image} alt="" />
                <h1>{item.name}</h1>
                <p>Available:{item.available ? 'yes' : 'no'}</p>
                {!item.available ? (
                  <ButtonD hide={false}>Select</ButtonD>
                ) : (
                  <ButtonD onClick={() => onSelectClick(item._id)}>
                    Select
                  </ButtonD>
                )}
                {/* <ButtonD hide={available}  onClick={()=>{onSelectClick(item._id)}}>Select</ButtonD> */}
              </div>
            );
          })}
        </div>

        <div className="select-gender4">
          <Button className="female-btn" onClick={()=>{onFemaleAddClick(Female)}}></Button>
        </div>
        <div className="select-gender3">
          {Female.map(item => {
            return (
              <div className="select-gender5">
                <img src={item.image} alt="" />
                <h1>{item.name}</h1>
                <p>Available:{item.available ? 'yes' : 'no'}</p>
                {!item.available ? (
                  <ButtonD hide={false}>Select</ButtonD>
                ) : (
                  <ButtonD onClick={() => onSelectClick(item._id)}>
                    Select
                  </ButtonD>
                )}
                {/* <ButtonD hide={available}  onClick={()=>{onSelectClick(item._id)}}>Select</ButtonD> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default UserSelectGender;
