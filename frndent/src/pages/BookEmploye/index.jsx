import Input from '../../Components/Input';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getId } from '../../utilities/token';
import axios from '../../utilities/axios';
import Button from '../../Components/Button';
import './book-employe.css';

const BookEmploye = () => {
  // const user=getId()
  const { id } = useParams();
  const [data, setData] = useState({
    phoneNumber: '',
    place: '',
    area: '',
    houseNumber: '',
    date: '',
    time:'',
    landMark: '',
    user:getId(),
  
  });
  // const userDetail = async () => {
  //   const responce = await axios.get(`/user/${getId()}`);
  //   setData(responce.data);
  // };
  const onChange = (e, key) => {
    setData({ ...data, [key]: e.target.value });
  };
  // const detail = {
  //   user: getId(),
    // details: data,
  // };

  const onClick = async () => {
    await axios.post(`/book/${id}`, data);
  };

  console.log(data);
  useEffect(() => {
    
  }, []);

  return (
    <div className="book">
      <div className="book1">
        {/* <Input className="book-input" value={data.name} />
        <Input className="book-input" value={data.email} /> */}
        <Input
          className="book-input"
          placeholder="date"
          type="date"
          onChange={e => {
            onChange(e, 'date');
          }}
        />
          <Input
          className="book-input"
          placeholder="time"
          type="time"
          onChange={e => {
            onChange(e, 'time');
          }}
        />
        <Input
          className="book-input"
          placeholder="phone-No"
          type="number"
          onChange={e => {
            onChange(e, 'phoneNumber');
          }}
        />
        <select
          onChange={e => {
            onChange(e, 'place');
          }}
          className="book-selecte"
        >
          <option disabled selected value="city">
            choose-city
          </option>
          <option value="AbuDhabi">AbuDhabi</option>
        </select>
        <select
          onChange={e => {
            onChange(e, 'area');
          }}
          className="book-selecte"
        >
          <option disabled selected value="area">
            choose-area
          </option>
          <option>mussafa</option>
          <option>electra-city</option>
          <option>alwada</option>
          <option>diffence</option>
        </select>
        <Input
          className="book-input"
          type="number"
          placeholder="House-No"
          onChange={e => {
            onChange(e, 'houseNumber');
          }}
        />

        <Input
          className="land-mark"
          placeholder="landMark"
          onChange={e => {
            onChange(e, 'landMark');
          }}
        />
        <Button className="book-btn" onClick={onClick}>
          BOOKING
        </Button>
      </div>
    </div>
  );
};
export default BookEmploye;
