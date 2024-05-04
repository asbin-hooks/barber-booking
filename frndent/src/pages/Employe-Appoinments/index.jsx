import { useState, useEffect } from 'react';
import axios from '../../utilities/axios';
import { getId } from '../../utilities/token';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import './appointment.css';

const EmployeAppointment = () => {
  const ide = getId();
  const [data, setData] = useState([]);
  const [time,setTime]=useState({})
  const fetchAppointement = async () => {
    const response = await axios.get(`/book/${getId()}`);
    setData(response.data);
  };
  // console.log(data);

  const onAcceptClick = async (id, index) => {
    await axios.patch(`/book/accept/${id}`, time);
    fetchAppointement();
    
  };
  const onRejectClick = async (id, index) => {
    await axios.patch(`/book/reject/${id}`);
    fetchAppointement();
  };

  const onChange = async (e) => {
    setTime({time:e.target.value});
  };
  useEffect(() => {
    fetchAppointement();
  }, []);

  return (
    <div className="appointment">
      {data.map((item, index) => {
        return (
          <div className="list" key={index}>
            <div className="list1">
              <h2>Name:{item.user.name}</h2>
              <h4>Email:{item.user.email}</h4>
              <h4>Date:{item.date}</h4>
              <h4>PhoneNo:{item.phoneNumber}</h4>
              <h4>{item.place}</h4>
              <h4>{item.area}</h4>
              <h4>HO-NO:{item.houseNumber}</h4>
              <p>{item.landMark}</p>
              <p>{item.time}</p>
              <Input
                onChange={e => {
                  onChange(e);
                }}
                className="list3"
                type="time"
              />
              <div className="list-btn">
                <Button
                  onClick={() => {
                    onAcceptClick(item._id, index);
                  }}
                >
                  {item.status == 'pending' || item.status == 'rejected'
                    ? 'Accept'
                    : 'Accepted'}
                </Button>
                <Button
                  onClick={() => {
                    onRejectClick(item._id, index);
                  }}
                >
                  {item.status == 'rejected' ? 'rejected' : 'reject'}
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default EmployeAppointment;
