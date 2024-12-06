import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import Ankur from "../images/Ankur.jpg"
import nikunj from "../images/nikunj.jpg"
import meet from "../images/meet.jpg"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, EffectFade} from 'swiper/modules';
import 'swiper/css/effect-fade';
const Leadership = () => {
  return (
    <div className=' mb-6 rounded-lg mt-8 '>
         <h1 className="flex font1 text-5xl items-center justify-center mb-[70px]">Gr<span className="underline underline-offset-[15px] decoration-orange-400  decoration-2">oup Member</span>`s</h1>
  
    <Swiper
        spaceBetween={30}
        loop={true}
        effect={'fade'}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        modules={[Pagination,Autoplay, EffectFade ]}
        className="mySwiper ">
    <SwiperSlide className='cursor-pointer'>
        <div className='  flex justify-center items-center w-full gap-5 '>
            <div className='overflow-hidden  w-[23%] h-[350px] rounded-xl '>
                <img src={Ankur} alt=""/>
            </div>
            <div className='flex flex-col text-start w-[50%] p-2 gap-y-10 justify-start items-start'>
                <div className='flex flex-col gap-y-1'>
                    <h1 className='text-3xl font-bold'>MERN-Devloper</h1>
                    <span className='text-md text-gray-400 font-medium'>Devloper: Ankur Godhani</span>
                    <div className='flex flex-row gap-x-2 mt-1'>
                        <div><a href="https://www.facebook.com/ankur.godhani.330?mibextid=ZbWKwL"><FaFacebookF size={18} className='hover:text-blue-500'/></a></div>
                        <div><a href="#"><RiTwitterXLine size={18} className='hover:text-black'/></a></div>
                        <div><a href="https://www.linkedin.com/in/ankur-godhani-743386267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedinIn size={18} className='hover:text-blue-800'/></a></div>
                        <div><a href="https://www.instagram.com/ankur_godhani0890?igsh=a2RnbzRxank5OXZz"><FaInstagram size={18} className='hover:text-red-500' /></a></div>
                     </div>
                </div>
                <p className='w-[98%] text-md opacity-60 font-medium mb-3'>The MERN stack has become increasingly popular among web developers in recent years. It is an open-source stack that allows developers to build robust, scalable, and high-performance web applications. MERN stands for MongoDB, Express.js, React.js, and Node.js.This stack is particularly attractive for web developers because it enables them to build modern, dynamic web applications quickly and easily. In this blog post, we’ll look at some examples of MERN stack applications that you can draw inspiration from.</p>
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide className='cursor-pointer '>
    <div className='  flex justify-center items-center w-full gap-5'>
            <div className='overflow-hidden w-[23%] rounded-xl'>
                <img src={nikunj} alt=""/>
            </div>
            <div className='flex flex-col text-start w-[50%] p-2 gap-y-10 justify-start items-start'>
                <div className='flex flex-col gap-y-1'>
                    <h1 className='text-3xl font-bold'>FrontEnd-Devloper</h1>
                    <span className='text-md text-gray-400 font-medium'>Devloper: Nikunj Kodavala</span>
                    <div className='flex flex-row gap-x-2 mt-1'>
                        <div><a href="#"><FaFacebookF size={18} className='hover:text-blue-500'/></a></div>
                        <div><a href="#"><RiTwitterXLine size={18} className='hover:text-black'/></a></div>
                        <div><a href="#"><FaLinkedinIn size={18} className='hover:text-blue-800'/></a></div>
                        <div><a href="https://www.instagram.com/nikunj_._09?igsh=azV4NjhmNzlkbjhr"><FaInstagram size={18} className='hover:text-red-500' /></a></div>
                     </div>
                </div>
                <p className='w-[98%] text-md opacity-60 font-medium mb-3'>A React.js developer is a proficient software engineer specializing in creating dynamic user interfaces for web applications using the React.js library. They possess expertise in JavaScript, HTML, and CSS, along with a deep understanding of React.js concepts such as components, state management, and lifecycle methods. React.js developers build reusable UI components, manage application state, handle data fetching, implement routing, and optimize performance. Proficiency in debugging, testing, version control, and continuous learning is crucial.</p>
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide className=' cursor-pointer'>
    <div className=' flex lg:flex-row flex-col justify-center items-center w-full gap-x-10'>
            <div className='overflow-hidden  w-[23%] h-[350px] rounded-xl'>
                <img src={meet} alt=""/>
            </div>
            <div className='flex flex-col text-start w-[50%] p-2 gap-y-10 justify-start items-start'>
                <div className='flex flex-col gap-y-1'>
                    <h1 className='text-3xl font-bold'>BackEnd-Devloper</h1>
                    <span className='text-md text-gray-400 font-medium'>Devloper: Meet Gohel</span>
                    <div className='flex flex-row gap-x-2 mt-1'>
                        <div><a href="#"><FaFacebookF size={18} className='hover:text-blue-500'/></a></div>
                        <div><a href="#"><RiTwitterXLine size={18} className='hover:text-black'/></a></div>
                        <div><a href="#"><FaLinkedinIn size={18} className='hover:text-blue-800'/></a></div>
                        <div><a href="https://www.instagram.com/meets_ahir_21?igsh=MWttbHdld2Q3dnVubg=="><FaInstagram size={18} className='hover:text-red-500' /></a></div>
                     </div>
                </div>
                <p className='w-[98%] text-md opacity-60 font-medium'>A Node.js developer is a skilled software engineer proficient in using Node.js, a runtime environment that allows JavaScript to be executed server-side. Node.js developers leverage their expertise in JavaScript, along with knowledge of Node.js modules and libraries, to build scalable and efficient server-side applications. They handle tasks such as server-side scripting, building APIs, interacting with databases, and implementing real-time communication. Node.js developers often work with frameworks like Express.js to streamline development.</p>
            </div>
        </div>
    </SwiperSlide>
    
</Swiper>
</div>
  )
}

export default Leadership;