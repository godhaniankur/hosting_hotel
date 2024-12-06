import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ProfileDropDown from '../comanPage/ProfileDropDown'

const Navbar = () => {
    const {token} = useSelector((state)=>state.auths)
    const [scroll,setscroll] = useState(false);

    window.onscroll = () =>{
       setscroll(window.pageYOffset === 0 ? false : true)
       return ()=> (window.onscroll === null)
    }

    console.log(scroll)
  return (
    <div className={`fixed flex w-full z-[99] -mt-2 ${scroll ? "bg-[#e0f2fe]" : "bg-transparent"} transition-all duration-400 ease-linear`}>
        <div className='w-11/12 h-20 flex justify-center items-center mx-auto'>
    
            <nav className="flex justify-between items-center w-full text-gray-500 font-bold">
            <Link
              to="/"
              className="text-5xl w-fit px-4 font-bold text-blue-700 overflow-hidden font "
            >
              Hotel Hub
            </Link>
            <ul className="flex justify-between items-center gap-x-10">
              <li>
                <Link
                  to="/hotel"
                  className="text-[#374151] font-sans hover:text-orange-500 transition duration-300"
                >
                  Booking
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutus"
                  className="text-[#374151] font-sans hover:text-orange-500 transition duration-300"
                >
                  About-us
                </Link>
              </li>
              <li>
                <Link to="/contectus" className="text-[#374151] font-sans hover:text-orange-500 transition duration-300">Contact us</Link>
              </li>
            </ul>
          <div className='flex  items-center justify-center gap-x-5'>
                <button>
                    {
                        !token ? <span className=' text-[#374151] bg-[#c7d2fe] py-2 px-5 rounded-md border border-blue-300'><Link to="/login">LOGIN</Link></span> : <ProfileDropDown/>
                    }
                </button>
                <button>
                    {
                        !token && <span className=' text-[#374151] bg-white py-2 px-5 rounded-md border border-blue-300'><Link to="/signup">SIGNUP</Link></span>
                    }
                </button>
          </div>
          </nav>
      </div>
    </div>
  )
}

export default Navbar

