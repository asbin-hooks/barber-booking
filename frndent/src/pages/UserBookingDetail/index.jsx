import { getId } from '../../utilities/token'
import axios from '../../utilities/axios'
import { useState,useEffect } from 'react'
import './booking-detail.css'

const UserBookingDetail=()=>{
    const [bookings,setBookings]=useState([])
    const id=getId()
    const fetchBook=async()=>{
      const responce=await axios.get(`/book/book/${id}`)
      setBookings(responce.data)
    }
    useEffect(()=>{
   fetchBook()
    },[])
    console.log(bookings)
return(
    <div className="book-detail">
   {
    bookings.map((item)=>{
        return(
            <div className="book-detail1">
                <img src={item.employe.image} alt="" />
                <h2>{item.employe.name}</h2>
                <h4>{item.status}</h4>
                <p>{item.time}</p>
            </div>
        )
    })
   }

    </div>
)
}
export default UserBookingDetail