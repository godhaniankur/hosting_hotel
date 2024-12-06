
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginuser } from './service/opretions/authOpretion';
import { setloading } from './Sciles/auth';
import LoginFirbase from './service/firbase/LoginFirbase';
import model_3D from './images/3d-removebg-preview.png'
import { BsFillLightningChargeFill } from "react-icons/bs";
import { MdOutlineBrightnessMedium } from "react-icons/md";
import { Link } from 'react-router-dom';

const Login = () => {
    const {user,loading} = useSelector((state)=>state.auths)
    const negvigate = useNavigate();
    const dispatch = useDispatch();
   const {
    register,
    handleSubmit,
    formState: {errors}
   } = useForm();


   const onsubmites = (data) =>{
        const froms = new FormData();
        froms.append("email",data.email)
        froms.append("password",data.password)
        setloading(true)
        dispatch(loginuser(froms,negvigate))
        setloading(false)
   }

  return (
    <div className='flex  justify-between items-center mx-auto p-8  h-[100vh] bg-[#282a35]'>
        <div className='flex justify-center items-center w-full p-2 -mr-10'>
             <div className='flex flex-col gap-y-5 text-white'>
                  <h1 className=' flex  text-4xl font-semibold'>Become a Hotelhub  <BsFillLightningChargeFill color='green' size={40}/></h1>
                  <p className=' text-2xl '>ease to Booking, easy to live</p>
                  <section className='flex'>
                      <div className='flex flex-col w-full gap-y-2'>
                        <p className='flex items-center gap-x-2'><MdOutlineBrightnessMedium color='green'/> Real-Time Availability</p>
                        <p className='flex items-center gap-x-2'> <MdOutlineBrightnessMedium color='green'/> Multiple Payment Options</p>
                        <p className='flex items-center gap-x-2'> <MdOutlineBrightnessMedium color='green'/> Clear Pricing</p>
                        <p className='flex items-center gap-x-2'> <MdOutlineBrightnessMedium color='green'/> Detailed Hotel InformationCustomer</p>
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
                <h1 className='text-4xl text-start font-bold float-left'>LOG IN</h1>
                <div className='flex justify-end items-end text-sm text-end font-bold m-5 '>
                    <p>Don't have an account? <span className=' text-green-700'><Link to="/signup">Sign up</Link></span></p>
            </div>
                <LoginFirbase />
                <p className='w-full mx-auto text-center m-5 opacity-55'>OR</p>
                <form onSubmit={handleSubmit(onsubmites)} className='flex flex-col gap-y-5 w-full'>
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
                    <div className=' w-full flex gap-x-2'>
                        <button type="submit" className='flex items-center w-full justify-center  p-2 rounded-md mt-3 border-2 font-semibold '>
                            Forgot Password ?
                        </button>
                        <button type="submit" className='flex items-center w-full justify-center bg-orange-500 p-2 rounded-md mt-3 '>
                            LOGIN
                        </button>
                    </div>
                </form>
            
            </div>
        </div>
       
    </div>
  )
}

export default Login