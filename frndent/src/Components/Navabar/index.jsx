import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar=()=>{
return(
    <div className="nav">
 <Link to='/' className='name'>Home</Link>
 {/* <Link to='/emplog' className='name'>Log In</Link> */}

    </div>
)
}
export default Navbar