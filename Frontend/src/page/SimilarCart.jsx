import React , {useState} from 'react'
import { Chip, Rating } from '@mui/material';
import { useQuery } from 'react-query'
import { gethotel } from '../service/opretions/hotelIn';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiCurrentLocation } from "react-icons/bi";




const SimilarCart = ({location}) => {
    console.log("location",location)
    const gethotels = async () => {
        try {
            const responce = await gethotel();
            console.log("Responce OF Hotels", responce)
            return responce
        } catch (error) {
            console.log("Error For Getting Of Hotels", error)
        }
    }
    const { isLoading, data: hotel } = useQuery({ queryKey: ["hotels"], queryFn: gethotels }, {
        staleTime: 120000,
      })

      //silder is code
      const [display, setDisplay] = useState(true);
      const [width, setWidth] = useState(1380);
    
      const settings = {
        // dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };
  return (
    <div className='mt-2'>
        <div  style={{
          width: width + "px",
          display: display ? "block" : "none"
        }} className='flex justify-center items-center'>
        <Slider {...settings} className=' flex justify-center items-center w-full mb-5'>
         {
            hotel?.map((similar)=>(
               similar.place_location === location && (
                 <div className='flex justify-center items-center max-w-[450px] border border-gray-300 shadow-md rounded-t-md  bg-gray-200 rounded-md'>
                     <div className=' min-w-[240px] min-h-[240px] overflow-hidden rounded-md'>
                            { 
                                <img src={similar?.hostel_image[0]} className=' bg-cover object-cover' />
                            }
                     </div>
                     <h1 className=' text-gray-700 font-bold text-2xl mt-2 p-2 text-center hover:text-gray-500 transition-colors duration-100 ease-linear'>{similar?.hostelName}</h1>

                     <p className='text-sm text-center p-2 font-semibold text-gray-800 opacity-80'>{similar?.Description?.slice(0,200)}...</p>
                     <div className='flex flex-col justify-center items-center gap-x-2 p-2'>
                        <span className='flex items-center gap-x-2 text-sm justify-center w-full'><BiCurrentLocation size={40} color='green'/><span className='text-green-800 font-bold'>{similar?.place_location}</span></span>
                        <span className='text-gray-800 font-bold text-end w-full'>RoomBook: {similar?.reservation_Room?.length !== 0 ? <span className='text-red-800 font-bold'>Full</span> : similar?.totalRoom.length }</span>
                     </div>
                     <div className=' space-x-3 space-y-1 px-2 text-wrap'>
                        {
                            similar?.Facilities?.map((chip)=>(
                                <Chip label={chip} />
                            ))
                        }
                     </div>
                     <button type='button' className='flex mx-auto m-3 py-3 px-4 bg-[#1e1b4b] rounded-lg text-blue-50 items-center justify-center hover:text-white font-bold'><a href={`/hotel/booking/${similar?._id}`}>CHECK MORE INFROMATION</a></button>
                 </div>
               )
            ))
         }
         </Slider>
        </div>
    </div>
  )
}

export default SimilarCart