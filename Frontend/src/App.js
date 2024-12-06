
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './Login';
// import HomePage from './comeponets/HomePage';
import Navbar from './comeponets/Navbar';
import Signup from './page/Signup';
import OTPpage from './page/OTPpage'
import Hotel from './comeponets/Booking_Of_hotels/Hotel';
import HotelBook from './comeponets/Booking_Of_hotels/HotelBook';
import HomePage1 from './comeponets/Booking_Of_hotels/HomePage1';
import InsertHotel from './comeponets/AdminSection/Mangehotels/InsertHotel';
import About from './comanPage/About';
import Contactus from './comanPage/Contactus';
import Sidebar from './comeponets/Deshbord/Sidebar';
import { useSelector } from 'react-redux';
import Admindashboard from './comeponets/Deshbord/Admindashboard';
import Payment from './comeponets/Deshbord/Payment';
import Rooms from './comeponets/Deshbord/Rooms';
import Userbooking from './comeponets/Deshbord/Userbooking';
import Ownerdetails from './comeponets/AdminSection/Ownerdetails';
import UserProfile from './comeponets/Deshbord/Userprofile';
import Bookings from './comeponets/Deshbord/Bookings'
import UserSettings from './page/Usersettings';
import Customer from './comeponets/Deshbord/Customer';
import Authrouter from './comanPage/Authrouter';
import AdminHotelData from './models/AdminHotelData'
import CustomerDetail from './comeponets/Deshbord/CustomerDetail';
import Edithotel from './comeponets/AdminSection/Mangehotels/Edithotel';
import Logout from './models/Logout';
import CancelConformation from './comeponets/AdminSection/Mangehotels/CancelConformation';
import AdminDeshbord from './comeponets/AdminSection/Mangehotels/AdminDeshbord';
import Privacy from './comanPage/Privacy';

function App() {
  const {user,token} = useSelector((state)=>state.auths)
 
  return (
    <div>
            <Authrouter>
                 <Navbar/> 
            </Authrouter>
        <Routes>
        <Route path='/hotel/*' element={<Hotel/>} />
        <Route path='/privacy' element={<Privacy/>} />
        <Route path='/hotel/booking/:hotelId' element={<HotelBook/>}/>
            <Route path='/' element={<HomePage1/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/OTPpage' element={<OTPpage/>} />
            <Route path='/contectus' element={<Contactus/>} />
            <Route path='/aboutus' element={<About/>} />
            <Route path="logout" element={<Logout/>} />

            
            { 
                  
                 user?.accountType !== "customer" ? 
                
            <Route path='/deshbord' element={<Sidebar/>}>
                 
                      <Route path='' element={<AdminDeshbord/>} />
                      <Route path='profile' element={<UserProfile/>} />
                      <Route path='Admin' element={<Admindashboard/>} />
                      <Route path='admin/payment' element={<Userbooking/>} />
                      <Route path='room' element={<Rooms/>} />
                      <Route path='OwnderDetail' element={<Ownerdetails/>} />
                      <Route path="customerDetail" element={<CustomerDetail/>} />
                      <Route path='booking' element={<Customer/>} />
                      <Route path='Ownder/hotel' element={<Edithotel />} />
                      <Route path='hotels' element={<InsertHotel/>} />
                      <Route path="Ownder/hotel/editData/:id" element={<AdminHotelData/>} />
                      <Route path='setting' element={<UserSettings/>} />
                      <Route path='cancelConformation' element={<CancelConformation/>} />
            </Route>
                :
                <>
                  <Route path='/hotel' element={<Hotel/>} />
                  <Route path='/hotel/booking/:hotelId' element={<HotelBook/>}/>
                   <Route path='/deshbord' element={<Sidebar/>}>
                    
                      
                      <Route path='' element={<UserProfile/>} />
                      <Route path='user/booking' element={<Bookings/>} />
                      <Route path='paymentcomplete' element={<Payment/>} />
                      <Route path='setting' element={<UserSettings/>} />
                   </Route>
                </>
              
            }
            
        </Routes>  
    </div>
  );
}

export default App;
