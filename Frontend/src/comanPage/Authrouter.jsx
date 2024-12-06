
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'


const Authrouter = ({children}) => {
    const location = useLocation();
    const [show,setshow] = useState(false)
    useEffect(()=>{
        if(location.pathname === "/deshbord" || location.pathname === "/deshbord/profile" || location.pathname === "/deshbord/room" || location.pathname === "/deshbord/admin/payment" || location.pathname === "/deshbord/user/booking" || location.pathname === "/deshbord/paymentcomplete" || location.pathname === "/deshbord/booking" || location.pathname === "/deshbord/setting" || location.pathname === "/deshbord/hotels" || location.pathname === "/deshbord/customerDetail" || location.pathname === "/deshbord/Ownder/hotel" || location.pathname === "/deshbord/cancelConformation" || location.pathname === "/login" || location.pathname === "/signup"){
            setshow(false)
        }
        else{
            setshow(true)
        }
    },[location])
  return (
    <div>
       {
           show && children
       }
    </div>
  )
}

export default Authrouter