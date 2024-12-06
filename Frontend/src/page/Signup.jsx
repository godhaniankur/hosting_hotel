// src/Signup.js
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { sendotp, singup } from '../service/opretions/authOpretion';
import { setsingupData } from '../Sciles/auth';
import { RecaptchaVerifier, getAuth, signInWithPhoneNumber } from 'firebase/auth';
import { app } from '../service/firbase/Firbase';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import model_3D from '../images/3d-removebg-preview.png'
import { BsFillLightningChargeFill } from "react-icons/bs";
import { MdOutlineBrightnessMedium } from "react-icons/md";
import { Link } from 'react-router-dom';
import FirbasrAuth from '../service/firbase/FirbasrAuth'


const Signup = () => {
   const [result,setresult] = useState(null)
   const [otp,setotp] = useState(null)
   const [PhoneNo,setPhoneNo] = useState(null)
   const [verify,setverfiy] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        handleSubmit,
        register,
        formState : {errors}
    } = useForm();

    const onsumbitData = async(data) =>{
       const froms = new FormData();
       froms.append("Name",data.Name)
       froms.append("contact_no",data.contact_no)
       froms.append("email",data.email)
       froms.append("password",data.password)
       froms.append("cpassword",data.cpassword)
       console.log(setsingupData(froms))
      
      //  dispatch(setsingupData(froms))
       dispatch(singup(froms,navigate))
      //  dispatch(sendotp(froms.get('contact_no'),navigate))
    }

    const onvirify = async() =>{
        const toastId = toast.loading("verfiy your Number....")
        try {
          const auth = getAuth(app)
          window.rerecaptchaVerifier = new RecaptchaVerifier(auth,'recaptcha',{'size': 'invisible',})
          const vrifier =  window.rerecaptchaVerifier
          const responce = await signInWithPhoneNumber(auth,`+91${PhoneNo}`,vrifier)
          console.log("responce",responce)
          setresult(responce)
          setverfiy("yes")
        } catch (error) {
            toast.error("not virify your Numbers")
            console.log(error)
        }
        toast.dismiss(toastId)
    }
    
    const sendotps = async()=>{
      try {
         result.confirm(otp).then(()=>alert("sucessfully verify"))
      } catch (error) {
         toast.error("invild otp")
      }
    }
  return (
    <div className='flex  justify-between items-center mx-auto p-8  h-[130vh] bg-[#282a35]'>
        <div className='flex justify-center items-center w-full p-2 -mr-10'>
             <div className='flex flex-col gap-y-5 text-white'>
                  <h1 className=' flex  text-4xl font-semibold'>Become a Hotelhub  <BsFillLightningChargeFill color='green' size={40}/></h1>
                  <p className=' text-2xl '>ease to Booking, easy to live</p>
                  <section className='flex'>
                      <div className='flex flex-col w-full gap-y-2'>
                        <p className='flex items-center gap-x-2'><MdOutlineBrightnessMedium color='green'/> Real-Time Availability</p>
                        <p className='flex items-center gap-x-2'> <MdOutlineBrightnessMedium color='green'/> Multiple Payment Options</p>
                        <p className='flex items-center gap-x-2'> <MdOutlineBrightnessMedium color='green'/> Clear Pricing</p>
                        <p className='flex items-center gap-x-2'> <MdOutlineBrightnessMedium color='green'/> Detailed Hotel InformationCustomer </p>
                        <p className='flex items-center gap-x-2'> <MdOutlineBrightnessMedium color='green'/> Reviews & Ratings</p>
                        <p className='flex items-center gap-x-2'> <MdOutlineBrightnessMedium color='green'/> Customer Support</p>
                      </div>
                      <div>
                            <img src={model_3D} alt=""  />
                      </div>
                  </section>
             </div>
        </div>
        <div className='flex justify-center items-center flex-col  w-full '>
            <div className=' min-w-[440px] p-10 flex flex-col shadow-md  bg-white items-center rounded-md'>
                <h1 className='text-4xl text-start font-bold float-left'>SIGN UP</h1>
                <div className='flex justify-end  items-end text-sm text-end font-bold m-5 '>
                    <p>Already have an account? <span className=' text-green-700'><Link to="/login">Log in</Link></span></p>
            </div>
                <FirbasrAuth />
                <p className='w-full mx-auto text-center m-5 opacity-55'>OR</p>
                <form onSubmit={handleSubmit(onsumbitData)} className='flex flex-col gap-y-2 w-full'>
                    <label className='flex flex-col'>
                        <p className=' text-md font-semibold'>Name<span className='text-red-700'>*</span></p>
                        <input type="Name"  {...register("Name",{required:true})} className='p-1.5 rounded-md mt-1 outline-none border-2'/>
                        {
                            errors.email && <span className='text-red-700 font-semibold'>
                                Name is Requied.
                            </span>
                        }
                    </label> 
                  
                    <label className='flex flex-col'>
                        <p className=' text-md font-semibold'>email<span className='text-red-700'>*</span></p>
                        <input type="email"  {...register("email",{required:true})} className='p-1.5 rounded-md mt-1 outline-none border-2'/>
                        {
                            errors.email && <span className='text-red-700 font-semibold'>
                                Email is Requied.
                            </span>
                        }
                    </label>
                    <label className='flex flex-col'>
                        <p>password <span className='text-red-500'>*</span></p>
                        <input type="password" {...register("password",{required:true})} className='p-1.5 mt-1 outline-none border-2 rounded-md'/>
                        {
                            errors.password && <span className='text-red-700 font-semibold'>
                                password is Requied.
                            </span>
                        }
                    </label>
                    <label className='flex flex-col'>
                        <p className=' text-md font-semibold'>cpassword<span className='text-red-700'>*</span></p>
                        <input type="password"  {...register("cpassword",{required:true})} className='p-1.5 rounded-md mt-1 outline-none border-2'/>
                        {
                            errors.email && <span className='text-red-700 font-semibold'>
                                cpassword is Requied.
                            </span>
                        }
                    </label>
                    <label className='flex flex-col'>
                        <p className=' text-md font-semibold'>Phone No<span className='text-red-700'>*</span></p>
                        <input type="contact_no"  {...register("contact_no",{required:true})} className='p-1.5 rounded-md mt-1 outline-none border-2'/>
                        {
                            errors.email && <span className='text-red-700 font-semibold'>
                                Phone No is Requied.
                            </span>
                        }
                    </label>
                    <div className=' w-full flex gap-x-2'>
                        <button type="submit" className='flex items-center w-full justify-center bg-orange-500 p-2 rounded-md mt-3 '>
                            Sign Up
                        </button>
                    </div>
                    <p className=' text-sm '>By signing up you agree to our Terms of Service and Privacy Policy</p>
                </form>
            
            </div>
        </div>
       
    </div>
  );
};

export default Signup;
