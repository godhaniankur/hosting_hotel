import React from 'react'
import { useQuery } from 'react-query';
import { getuserbooking, userCancelBookingRequest } from '../../service/opretions/hotelIn';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
    'Conformation of hotel booking Room',
    'sending cancel Request',
    'Conformation Request.',
  ];


const Bookings = () => {
    const {token} = useSelector((state)=>state.auths)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const datas = async() =>{
        const result = await getuserbooking(token);
        return result
    }
    const {isLoading,data:pay} = useQuery({queryKey:['book'],queryFn:datas ,staleTime:150000})

    const date = new Date();

    // isLoading &&  <div className='loader h-[100vh] flex justify-center items-center'></div>
  return (
   <div class=" bg-white overflow-hidden">
   <div class="flex flex-col mx-auto container px-4 py-8">
       <h1 class=" flex justify-center items-center  text-3xl text-center font-bold">Booked Room Details</h1>
         {
            pay?.BookingRoom?.map((book)=>(
            <div >
              
                <div>
                    {
                        book?.End_Room_Book_Date.slice(0,10) <= date.toJSON().slice(0,10) ?  <p></p>: book?.status !== "canceled" ? <div class=" mt-8 p-6   border-2 border-black rounded-3xl w-[500px] mx-auto ">  <h2 class="text-xl ml-[100px]"><span className=' font-bold'>Hotel Name:</span><span className='font-semibold font2'> {book?.hotelId?.hostelName}</span></h2>
                        <p class="text-gray-700 mt-4 font-serif ml-10 text-lg ">A luxurious room with all modern amenities .</p>
                        <div class=" mt-6 flex gap-x-24 ">
                            <p><strong>Check-in:</strong>{book?.start_Room_Book_Date.slice(0,10)}</p>
                            <p><strong>Check-out:</strong>{book?.End_Room_Book_Date.slice(0,10)}</p>
                            
                        </div>
                        <div className='flex justify-between mr-[110px]'>   
                            <p className='mt-3'><strong>Guests:</strong>{book?.NumberOfMember}</p>
                            <p className='mt-3'><strong>Room No:</strong>{
                                 book?.selectRoomNo.map((room)=>(
                                    <span >{room}</span>
                                 ))
                            }</p>
                        </div>     
                        <div class="flex mt-2 items-center">
                        <span className='text-lg'><strong>Price:</strong></span> <span class=" mr-[500px] text-xl font-bold text-green-600">{book?.hotelId?.Price}</span>
                        </div> <div className='flex flex-col gap-y-2 mt-2'>
                         <span>Booking Status: <span className={`${book?.status === "cancelRequest" ?"text-red-700" :"text-green-700"}`}>{book.status}</span></span>
                            <Link to={`/hotel/booking/${book.hotelId._id}`}>

                            <button type="button" className=' bg-blue-600 p-2 rounded-lg flex flex-col w-full items-center text-white font-bold'>View Now</button>
                            </Link>
                            <button type='button' className={`${book?.status === "canceled" || book?.status === "cancelRequest" ? "bg-orange-600 p-2 rounded-lg flex flex-col w-full items-center text-white font-bold opacity-50" : "bg-orange-600 p-2 rounded-lg flex flex-col w-full items-center text-white font-bold"}`} disabled={book?.status === "canceled" || book?.status === "cancelRequest" } onClick={()=>dispatch(userCancelBookingRequest(book?._id,token,navigate))}>Cancel Booking</button>
                            {
                                 book?.status === "cancelRequest" && <Box sx={{ width: '100%',marginTop:"30px"}}>
                                 <Stepper activeStep={2} alternativeLabel>
                                   {steps.map((label) => (
                                     <Step key={label}>
                                       <StepLabel>{label}</StepLabel>
                                     </Step>
                                   ))}
                                 </Stepper>
                               </Box>
                            }
                         </div>
                         </div> : <p>No Booking is Founded</p>
                    }
                </div>
            </div>   
                
            ))
         }
        </div>
        
        </div>

    )
    }


export default Bookings;