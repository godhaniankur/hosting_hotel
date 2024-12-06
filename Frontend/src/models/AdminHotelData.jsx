
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Link, useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDropzone } from 'react-dropzone';
import { CiCircleRemove } from "react-icons/ci";
import { toast } from 'react-toastify';
import { MdDelete } from "react-icons/md";
import {useSelector } from 'react-redux';
import { EdithotelInfo } from '../service/opretions/hotelIn';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const navigate = useNavigate();
  const {token} = useSelector((state)=>state.auths)
  const [open, setOpen] = React.useState(true);
  const [data,setdata] = useState([])

  const {hotelData} = useSelector((state)=>state.auths)
  const {id} = useParams();

  hotelData.map((item)=>{
       if(item._id == id){
           console.log(item)
          data.push(item)
       }
  })
 
  //  const defaultImage = data[0].hostel_image.map((prev)=>{
  //     return prev
  //  })

  const [selectFile,setselectFile] = useState([])
    const [item,setitem] = useState('')
    const defaultValues = data[0].Facilities.map((prev)=>{
     return prev
    })
    const [add,setadd] = useState(defaultValues)

    // console.log("Image Url",data[0].hostel_image)
    const {
        register,
        handleSubmit,
        setValue,
        formState:{errors},
    } = useForm({
       defaultValues:{
          "hostelName":`${data[0].hostelName}`,
          "ownderName":`${data[0].ownderName}`,
          "email":`${data[0].email}`,
          "place_location":`${data[0].place_location}`,
          "totalRoom":`${data[0].totalRoom.length}`,
          "contact_no":`${data[0].contact_no}`,
          "Price":`${data[0].Price}`,
          "Description":`${data[0].Description}`,
          "Text_and_charges":`${data[0].Text_and_charges}`,
       }
    });

    let inputRef = useRef(null);

    const onDrop = (acceptedFiles) =>{
        let file = acceptedFiles[0]
        if(file.name !== undefined){

          setselectFile((image)=>[...image,file])
        }
    }


    const {getRootProps,getInputProps} =useDropzone({
        accept:{"image/*":["jpeg","jpg","png"]},
        onDrop,
        maxFiles:20,
    })

    useEffect(()=>{
        setValue("hostel_image",selectFile)
    },[selectFile,setValue])


        const handleonadd = () => {
            if(item){
                setadd(element => [...element,item])
                toast.success("item is added")
            }
        }

        const handleRemove = (data) => () => {
            setadd((chips) => chips.filter((chip) => chip !== data));
          };

        const handleDelete = (data) => () => {
            setselectFile((chips) => chips.filter((chip) => chip !== data));
          };
     
        const handleonData = async(data) =>{
             console.log("data",data)
             const data1 = new FormData();
             data1.append("hostelName",data.hostelName)
             data1.append("ownderName",data.ownderName)
             data1.append("email",data.email)
             data1.append("place_location",data.place_location)
             data1.append("totalRoom",data.totalRoom)
             data1.append("contact_no",data.contact_no)
             data1.append("Price",data.Price)
             data1.append("Description",data.Description)
             add.map((todus)=>{
                 data1.append("Facilities",todus)
             })
             data1.append("Text_and_charges",data.Text_and_charges)
            selectFile?.map((images)=>{
                data1.append("hostel_image",images)
            })
            data1.append("hotelId",id)
            
            await EdithotelInfo(data1,token,navigate)
             
        }

  return (
    
    <React.Fragment>
      <Dialog
        fullScreen
        open={open}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="close"
              sx={{alignItems:"center"}}
            >
              <Link to="/deshbord/Ownder/hotel">
                  <CloseIcon />
              </Link>
            </IconButton>
            <Typography sx={{ ml:2, flex: 1,mt:0.5,cursor:"pointer" }} variant="h6" component="div">
               Edit Hotel Information
            </Typography>
               
         
          </Toolbar>
        </AppBar>
    <form onSubmit={handleSubmit(handleonData)} >

        <div className='flex flex-col gap-y-2.5 p-5 shadow-xl '>
              <div className='flex w-full gap-x-5'>
                <label className='flex flex-col gap-y-1.2 w-full'>
                        <p className='text-md text-black font-bold capitalize px-2.5'>hotelName</p>
                        <input type="text" placeholder='THE LALIT' className='p-1.5 border-2 border-text-500 outline-none w-full rounded-lg text-gray-600 opacity-95' {...register("hostelName",{required:true})}/>
                    </label>
                    <label className='flex flex-col gap-y-1.2 w-full'>
                        <p className='text-md text-black font-bold capitalize px-2.5'>ownderName</p>
                        <input type="text" placeholder='THE LALIT' className='p-1.5 border-2 border-text-500 outline-none w-full rounded-lg text-gray-600 opacity-95' {...register("ownderName",{required:true})}/>
                    </label>
              </div>
              <label className='flex flex-col gap-y-1.2 w-full'>
                        <p className='text-md text-black font-bold capitalize px-2.5'>email</p>
                        <input type="email" placeholder='THE LALIT' className='p-1.5 border-2 border-text-500 outline-none w-full rounded-lg text-gray-600 opacity-95' {...register("email",{required:true})}/>
                    </label>
              <label className='flex flex-col gap-y-1.2 w-full'>
                        <p className='text-md text-black font-bold capitalize px-2.5 '>Location</p>
                        <input type="text" placeholder='THE LALIT' className='p-1.5 border-2 border-text-500 outline-none w-full rounded-lg text-gray-600 opacity-95' {...register("place_location",{required:true})}/>
              </label>
              <div className='flex w-full gap-x-5'>
                <label className='flex flex-col gap-y-1.2 w-full'>
                        <p className='text-md text-black font-bold capitalize px-2.5'>TotalRooms</p>
                        <input type="tel" placeholder='THE LALIT' className='p-1.5 border-2 border-text-500 outline-none w-full rounded-lg text-gray-600 opacity-95'  {...register("totalRoom",{required:true})}/>
                    </label>
                    <label className='flex flex-col gap-y-1.2 w-full'>
                        <p className='text-md text-black font-bold capitalize px-2.5'>Price</p>
                        <input type="tel" placeholder='THE LALIT' className='p-1.5 border-2 border-text-500 outline-none w-full rounded-lg text-gray-600 opacity-95' {...register("Price",{required:true})}/>
                    </label>
              </div>
              <label >
                    <p className='text-md text-black font-bold capitalize px-2.5'>Image of Hotel</p>
                    <div {...getRootProps()} className='w-full mt-1.5 mb-2 border-2 flex justify-center items-center rounded-lg overflow-hidden'>
                         <input {...getInputProps()} ref={inputRef} id='hostel_image' required/>
                         <div className='p-1.5 border-2 border-text-500 text-center outline-none w-full rounded-lg text-gray-600 opacity-95'>SELECTING FILE</div>
                    </div>
              </label>
                    <div className='w-full flex flex-col gap-y-5'>
                        {
                            selectFile?.length > 0 ? selectFile?.map((image,index)=>(
                            <div className='flex justify-between items-center border-b-2 w-full mx-auto p-3 rounded-lg' key={index}>
                                <div className='w-[150px] h-[97px]  overflow-hidden rounded-md'>
                                    <img src={URL.createObjectURL(image)} className='w-[150px] h-[97px]'></img>
                                </div>
                                <span className='text-center'>{image.name}</span>
                                <button type='button' className='bg-red-600 flex items-center gap-x-1 text-white rounded-lg px-2.5 py-1.5 font-semibold' onClick={handleDelete(image)} ><MdDelete />DELETE </button>
                            </div>))
                             : (<span className='text-red-500 text-xs font-bold mx-3'>Upload a file chosen PNG,JPG,JPEG</span>)
                         }
                    </div>
              <div className='flex w-full gap-x-5'>
                <label className='flex flex-col gap-y-1.2 w-full'>
                        <p className='text-md text-black font-bold capitalize px-2.5'>contact_no</p>
                        <input type="tel" placeholder='THE LALIT' className='p-1.5 border-2 border-text-500 outline-none w-full rounded-lg text-gray-600 opacity-95' {...register("contact_no",{required:true})}/>
                    </label>
                    <label className='flex flex-col gap-y-1.2 w-full'>
                        <p className='text-md text-black font-bold capitalize px-2.5'>Text_and_charges</p>
                        <input type="text" placeholder='THE LALIT' className='p-1.5 border-2 border-text-500 outline-none w-full rounded-lg text-gray-600 opacity-95' {...register("Text_and_charges",{required:true})}/>
                    </label>
              </div>
              
             <label className='flex flex-col gap-y-1.2 w-full mb-2'>
                        <p className='text-md text-black font-bold capitalize px-2.5'>Facilities</p>
                        <div className='flex gap-x-5'>
                        <input type="text" placeholder='ADD FACILITIES' className='p-1.5 border-2 border-text-500 outline-none w-full rounded-lg text-gray-600 opacity-95' onChange={(e)=>setitem(e.target.value)} />
                        <button type='button' onClick={handleonadd} className='bg-green-600 px-3 rounded-md text-white'>
                            ADD
                        </button>
                        </div>
                        <div className=' w-fit  gap-x-2 mt-2 ml-5'>
                            {
                                add &&  add?.map((items)=>(<ul className='border-2 rounded-xl p-2 mt-1 bg-gray-200 font-semibold text-gray-700 list-inside'><li className='flex items-center gap-x-2'>{items}<CiCircleRemove onClick={handleRemove(items)} /></li></ul>))
                            }
                            </div>
             </label>
             <label className='flex flex-col gap-y-1.2 w-full'>
                        <p className='text-md text-black font-bold capitalize px-2.5'>Description</p>
                        <textarea rows={4} className=' resize-none p-1.5 border-2 border-text-500 outline-none w-full rounded-lg text-gray-600 opacity-95' {...register("Description",{required:true})}/>
             </label>
             <button type='submit' className=' bg-blue-500 w-fit mx-auto px-5 py-2'>
                    save
                </button>
        </div>
    </form>
      </Dialog>
    </React.Fragment>
    
  );
}
