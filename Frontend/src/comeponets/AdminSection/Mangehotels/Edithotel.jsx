import  React ,{useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useQuery } from 'react-query';
import { deletemembership, gethotel } from '../../../service/opretions/hotelIn';
import AdminHotelData from '../../../models/AdminHotelData'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TokenTwoTone } from '@mui/icons-material';


export default function Edithotel(){

    const dispatch = useDispatch();
    const {token} = useSelector((state)=>state.auths)
    const feching = async() =>{
        try {
            const result = await gethotel();
            localStorage.setItem('hotelData',JSON.stringify(result));
            return result
        } catch (error) {
            return <div>Refech Page</div>
        }
    }
    const {isLoading,data} = useQuery({queryKey:['hotels'],queryFn:feching,staleTime:50000})
   
    if(isLoading){
       return <div className='h-[90vh] flex justify-center'><div className='loader2 my-auto'></div></div>
    }

  return (
    <>
     <div className='mt-10'>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className=' bg-blue-800 text-white' >
            <TableCell align="center"  sx={{color:"white"}}>No</TableCell>
            <TableCell align="center"  sx={{color:"white"}}>Name</TableCell>
            <TableCell align="center"  sx={{color:"white"}}>Place</TableCell>
            <TableCell align="center"  sx={{color:"white"}}>Conatct No</TableCell>
            <TableCell align="center"  sx={{color:"white"}}>Price</TableCell>
            <TableCell align="center"  sx={{color:"white"}}> Booked Room</TableCell>
            <TableCell align="center"  sx={{color:"white"}}>OwnerName</TableCell>
            <TableCell align="center"  sx={{color:"white"}}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((hotel,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              className=' odd:bg-gray-200 even:bg-gray-100'
            >
              <TableCell align="center" >
                {index + 1}
              </TableCell>
              <TableCell align="center" >{hotel.hostelName}</TableCell>
              <TableCell align="center" >{hotel.place_location}</TableCell>
              <TableCell align="center" >{hotel.contact_no}</TableCell>
              <TableCell align="center" >{hotel.Price}</TableCell>
              <TableCell align="center" >{hotel.Booking_of.length}</TableCell>
              <TableCell align="center" >{hotel.ownderName}</TableCell>
              <TableCell align="center" >
                  <div className='flex items-center gap-x-3 md:flex-col gap-y-2'>
                  <Link to={`editData/${hotel._id}`}>
                       <button className='bg-blue-500 w-full px-5 py-2 text-yellow-100 rounded-md font-semibold'>
                             Edit ✏️
                       </button>
                  </Link>

                       <button type='button' className='bg-red-500 cursor-pointer px-3 py-2 text-white rounded-md font-semibold' onClick={()=> dispatch(deletemembership(hotel._id,token))}>
                             Delete 🫙
                       </button>
                  </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
     </div>
  </>
  );
}
