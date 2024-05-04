
import Navbar from '../../Components/Navabar';
import Button from '../../Components/Button';
import { useNavigate } from 'react-router-dom';
import './home.css';

const Home = () => {
const navigate=useNavigate()

const onUserClick=()=>{
  navigate('/UserLogin')
}
 const  onEmpClick=()=>{
   navigate('/emplog')
 }
  return (
    <div className="home">
      <Navbar/>
      <div className="select-button">
            <Button onClick={onUserClick}>CUSTOMER</Button>
      <Button onClick={onEmpClick}>EMPLOYEE</Button>
      </div>
  
    </div>
  );
};
export default Home;
