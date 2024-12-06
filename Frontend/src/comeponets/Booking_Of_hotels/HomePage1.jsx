import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoCalendarClearOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";
import { RiDoubleQuotesL } from "react-icons/ri";
import { Link } from "react-router-dom";
import Footer from "../../comanPage/Footer";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import image from '../../images/images/udaipur.png';
import image1 from '../../images/images/jaipur.png';
import image2 from '../../images/images/mumbai.png';
import image3 from '../../images/images/shimla.png';
import image4 from '../../images/images/pune.png';
import image5 from '../../images/images/kolkata.png';
import image6 from '../../images/images/bangalore.png';
import image7 from '../../images/images/delhi.png';
import image8 from '../../images/images/ahmedabad.png';
import image9 from '../../images/images/hyderabad.png';
import image10 from '../../images/images/surat.png';
import image11 from '../../images/images/chennai.png';




// import required modules
import { Navigation } from 'swiper/modules';
import Leadership from "../../comanPage/Leadership";
import { useQuery } from "react-query";
import { allRatingAndReviews } from "../../service/opretions/Rating_Reviews";
import { Avatar } from "@mui/material";

const cities = [
  { name: 'Udaipur', icon: image },
  { name: 'Jaipur', icon: image1 },
  { name: 'Mumbai', icon: image2 },
  { name: 'Surat', icon: image10 },
  { name: 'Ahmedabad', icon: image8 },
  { name: 'Shimla', icon: image3 },
  { name: 'Bangalore', icon: image6 },
  // { name: 'Kolkata', icon: image5 },
  // { name: 'Pune', icon: image4 },
  // { name: 'Delhi', icon: image7 },
  // { name: 'Hyderabad', icon: image9 },
  // { name: 'Chennai', icon: image11 },
];



const HomePage1 = () => {
  const [Search,setSearch] = useState('')
  console.log("serching value",Search)
  const getReview = async() =>{
      const result = await allRatingAndReviews();
      return result;
  }
  const {isLoading,data:customers} = useQuery({queryKey:['review'],queryFn:getReview})
  return (
    <div className="overflow-hidden">
      <div className=" h-screen bg-cover bg-center  home1 overflow-hidden ">
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
          <h1 className="text-6xl font-bold text-fuchsia-700 font1 mt-10 ml-20">
            Welcome !
          </h1>
          <p className="text-6xl text-blue-800 mt-6 font1 ml-24">
            Where would you
          </p>
          <p className="text-6xl text-blue-900 mt-3 font1 ml-24">
            like to stay?
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center -mt-[80px] absulute">
        <div className="flex mt-10 border-1.5 h-24 w-[900px] shadow-lg rounded-3xl bg-white">
          <div>
            <form className="flex ml-4 gap-x-16 mt-4">
              <div>
                <p className="flex ml-5 text-xs text-slate-400"> Desired city</p><IoLocationOutline className=" absolute mt-4 ml-6" />
                  <select id="cars" name="cars" className="ml-5 border-2 px-6 border-sky-100 bg-slate-50 mt-1 rounded-md w-[170px] h-[40px]" onChange={(e)=>setSearch(e.target.value)} required>
                    <option value=''>Choose here</option>
                    <option value="Gandhinagar">Gandhinagar</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                    <option value="Surat">Surat</option>
                    <option value="Mumbai">Mumbai</option>
                  </select>
              </div>

              <div className="flex flex-col">
                <p className="flex  text-xs text-slate-400 ">Check-in</p>
                <IoCalendarClearOutline className=" mt-8 ml-2  absolute" />
                <input type="date" min="2024-6-27" max="2024-12-31" className="flex date-input border-2 px-10 border-sky-100 bg-slate-50 mt-1 rounded-md w-[170px] h-[40px]"/>
              </div>
              <div>
                <p className="flex text-xs text-slate-400">Check-Out</p><IoCalendarClearOutline className="flex mt-4 ml-2 absolute"/>
                <input type="date" id="Check-out" name="Check-out" className="flex border-2 px-10 border-sky-100 bg-slate-50 mt-1 rounded-md w-[170px] h-[40px]"/>
              </div>
              <div>
                  {
                      Search === "" ?  <button type="button"  className="bg-[#fe701d] opacity-35  -ml-[10px] mt-5 w-[120px] h-[40px]  text-white hover:opacity-80 duration-200 rounded-lg font-sans ">Search</button> : <button type="button"  className="bg-[#fe701d]  -ml-[10px] mt-5 w-[120px] h-[40px]  text-white hover:opacity-80 duration-200 rounded-lg font-sans "><Link to={`/hotel/${Search}`}>Search</Link></button> 
                  }
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="flex ml-24 mt-8">
        <p className="text-4xl font2"><span className="underline underline-offset-[20px] decoration-orange-500  decoration-2 ">Popular</span> destination</p>
      </div>
      

     <div className=" grid grid-cols-3 mt-8 gap-8 px-24 ">
          <div className="row-span-2 overflow-hidden flex w-fit">
             <div className=" h-[620px] w-fit object-cover bg-cover flex justify-center items-end overflow-hidden rounded-lg">
             <h1 className=" absolute text-md font-bold flex text-white z-50 -ml-[200px]">
               <FaLocationDot className="flex -mt-[30px] "/>
               <div className=" flex -mt-[33px] text-white">
               <a href="https://maps.app.goo.gl/Pcaj3KFTzU6j88n57">The Oberoi Udaivilas</a>
               </div>
          </h1>
          <Link to = "/hotel/booking/66e52a274872cfcd58857b8d">
               <img src="https://media02.stockfood.com/largepreviews/MjE4NjE0MDExOQ==/70520649--Oberoi-Udaivilas-Udaipur-Rajasthan-India.jpg" className=" object-cover bg-cover w-full hover:scale-110 transition-all duration-300 ease-linear " alt=""/>
               </Link>
             </div>
          </div>
          <div className=" w-fit"> 
            <div className="w-[440px] overflow-hidden rounded-lg">
            <h1 className=" absolute text-md font-bold flex text-white z-50 mt-[260px] ml-[20px]">
            <FaLocationDot className="flex mt-1 "/><a href="https://maps.app.goo.gl/dNAib5KisP2mGtC17">Taj Aravali Resort</a>
            </h1>
            <Link to="/hotel/booking/669df5d2a02aec7164385b7a">
             <img src="https://theasiacollective.com/wp-content/uploads/2020/03/Taj-Aravali-Resort-Spa.jpg" alt="" className=" object-cover bg-cover w-full hover:scale-110 transition-all duration-300 ease-linear "/></Link>
             </div>

             </div>
          <div className="w-[440px] " > <div className=" h-[295px] overflow-hidden rounded-lg">
              <h1 className=" absolute text-md font-bold flex text-white m-6 z-50 mt-[260px] ml-[20px]">
               <FaLocationDot className="flex mt-1 "/><a href="https://maps.app.goo.gl/XA2dkF9Z86pagT4f6">The Leela Palace Udaipur</a>
              </h1>
              <Link to="/hotel/booking/66e6c08b8d601478d3fa59f6">
               <img src="https://i.insider.com/5d2f6253b44ce73a445822fc?width=700" alt="" className=" object-cover bg-cover  hover:scale-110 transition-all duration-300 ease-linear "/></Link>
                  
             </div></div>
          <div className="w-fit"> <div className="w-[440px] overflow-hidden rounded-lg">
               <h1 className=" absolute text-md flex font-bold text-white m-6 z-50 mt-[260px] ml-[20px]">
                  <FaLocationDot className="flex mt-1"/><a href="https://maps.app.goo.gl/hCVQ8ZjixAyACb1q9">JW Marriott Jaipur Resort</a>
              </h1>
              <Link to="/hotel/booking/66f8f99a11d1a5643a25eccc">
               <img src="https://jw-marriott-resort-spa.hotels-rajasthan.com/data/Photos/OriginalPhoto/10807/1080751/1080751003.JPEG" alt="" className=" object-cover bg-cover w-full hover:scale-110 transition-all duration-300 ease-linear "/>
               </Link>
             </div></div>
          <div className="w-fit"> 
            <div className="w-[440px] overflow-hidden rounded-lg">
               <h1 className=" absolute text-md flex font-bold text-white m-6 z-10 mt-[260px] ml-[20px]">
                  <FaLocationDot className="flex mt-1 "/><a href="https://maps.app.goo.gl/8LKTXQdfFpartdYAA">Wildflower Hall,Shimla</a>
               </h1>  
               <Link to="/hotel/booking/669e31caa648ad41bb37b31a">
               <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/dd/51/cc/wildflower-hall-shimla.jpg?w=700&h=-1&s=1" alt="" className=" object-cover bg-cover w-full hover:scale-110 transition-all duration-300 ease-linear "/>
               </Link>
             </div></div>
     </div>
      
      <div className="flex mt-20 justify-center items-center">
        <h1 className="flex font1 text-5xl ">Te<span className="underline underline-offset-[15px] decoration-orange-400  decoration-2">stimo</span>ny</h1>
      </div>
      <div className="w-9/12 flex items-center justify-center mt-4 mx-auto">
      <Swiper navigation={true} modules={[Navigation]} slidesPerView={2}  className="mySwiper ">
        {
             !isLoading ? customers.length > 0 ? customers.map((review)=>(
              <SwiperSlide className="max-w-[745px] px-14">
              <div className="flex justify-center items-center w-full p-5">
                <div className=" mt-8 shadow-md rounded-3xl min-w-[420px] h-[320px] ">
                  <RiDoubleQuotesL size={60} color="orange" className=" flex mt-4 opacity-50 mx-auto items-center justify-center"/>
                  <div className="mt-12">
                    <div className="flex items-center justify-center text-center p-2">
                      <p>{review?.Review.slice(0,80)}</p>
                    </div>
                  </div> 
                  {/* userName  */}
                  <div className="flex items-center justify-center text-start  gap-x-2 mt-16">
                        <Avatar sx={{bgcolor:"green"}}>{review?.user?.Name.slice(0,1)}</Avatar>
                        <div>
                              <span className=" text-sm font-bold">{review?.user?.Name}</span>
                               <p className="text-xs text-blue-800 font-semibold">{review?.hotels?.hostelName}</p>
                        </div>
                  </div>
                </div>
              </div>
              </SwiperSlide>)
             ) : (<span>item is Not Found</span>) : (<span>Loading.....</span>)
        }
    </Swiper>
    </div>
    <h1 className="flex font1 text-5xl items-center justify-center mt-20 ">Fi<span className="underline underline-offset-[15px] decoration-orange-400  decoration-2">nd Us In Your Ci</span>ty</h1>
      <div className="grid grid-cols-3 gap-6 p-10">
      {cities.map((city, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <Link to='/'><img src={city.icon} alt="loding" width={250}/></Link>
          <div className="text-xl mt-4 ">{city.name}</div>
        </div>
      ))}
    </div>
      <Leadership />
      <Footer/>
    </div>
  );
};

export default HomePage1;
