import  React from 'react';
import { useQuery } from 'react-query';
import { AdminCancelConformation, getallbookings } from '../../../service/opretions/hotelIn';
import { useDispatch, useSelector } from 'react-redux';
import { FcCheckmark } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';


export default function CancelConformation() {
    const {token} = useSelector((state)=>state.auths)
    const dispatch = useDispatch();
    const navigate = useNavigate();
        const cancelRes = async() =>{
            const result = await getallbookings(token);
            return result
        }
        const {isLoading,data} = useQuery({queryKey:['cancel'],queryFn:cancelRes,staleTime:50000})
  return (
      <div className='mt-2'>
            <table className='w-full mx-auto text-center'>
                <thead >
                    <tr>
                        <th className=' p-2 border-2 bg-blue-600'>Name</th>
                        <th className=' p-2 border-2 bg-blue-600'>contact_no</th>
                        <th className=' p-2 border-2 bg-blue-600'>RoomNo</th>
                        <th className=' p-2 border-2 bg-blue-600'>CancelReqest</th>
                        <th className=' p-2 border-2 bg-blue-600'>Conformation</th>
                    </tr>
                </thead>
                <thead>
                        {
                          data?.filter((da)=>{return da?.status === "cancelRequest" && da}).map((book)=>(
                                  <tr>
                                <td className=' p-2 border-2 bg-blue-100'>{book.Name}</td>
                                <td className=' p-2 border-2 bg-blue-100'>{book.contact_no}</td>
                                <td className=' p-2 border-2 bg-blue-100'>{book.selectRoomNo[0]}</td>
                                <td className=' p-2 border-2 bg-blue-100'>{book.createAt}</td>
                                <td className=' p-2 border-2 bg-blue-100'>
                                    <button type="button" onClick={()=>dispatch(AdminCancelConformation(book._id,token,navigate))}>
                                        <FcCheckmark size={30}/>
                                    </button>
                                </td>
                            </tr> 
                            ))
                        }
                </thead>
            </table>
      </div>
  );
}
