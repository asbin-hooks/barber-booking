import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import EmpLog from './pages/EmployeLogIn';
import EmpSign from './pages/EmployeSignUp';
import EmpProfile from './pages/EmployeProfile';
import UserLogin from './pages/UserLogin';
import UserSign from './pages/UserSignup';
import UserSelectGender from './pages/UserSelectGender';
import AdminLogin from './pages/AdminLog';
import AddEmploye from './pages/Admin-AddEmploye';
import EmployeProfile from './pages/Admin-Employeprofile';
import BookEmploye from './pages/BookEmploye';
import EmployeAppointment from './pages/Employe-Appoinments';
import UserBookingDetail from './pages/UserBookingDetail';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/emplog" element={<EmpLog />} />
      <Route path="/empSign" element={<EmpSign />} />
      <Route path="/empProfile" element={<EmpProfile />} />
      <Route path="/UserLogin" element={<UserLogin />} />
      <Route path="/UserSign" element={<UserSign />} />
      <Route path="/UserSelectGender" element={<UserSelectGender />} />
      <Route path="/AdminLogin" element={<AdminLogin />} />
      <Route path="/AddEmploye" element={<AddEmploye />} />
      <Route path="/EmployeProfile/:id" element={<EmployeProfile />} />
      <Route path="/BookEmploye/:id" element={<BookEmploye />} />
      <Route path="/Employe/Appointment/:id" element={<EmployeAppointment />} />
      <Route path="/UserMyBooking/:id" element={<UserBookingDetail />} />
    </Routes>
  );
};
export default App;
