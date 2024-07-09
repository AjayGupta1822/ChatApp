import  { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setOtherUsers } from '../redux/userSlice';
const useGetOtherUsers = () => {
     const dispatch = useDispatch() ;
  useEffect(()=>{
   const fetchOtherUsers = async () =>{
    try {
        axios.defaults.withCredentials = true;
        const res = await axios.get('https://chatapp-3-k5wt.onrender.com/api/v1/user/');
        
        //store
        dispatch(setOtherUsers(res.data));
    } catch (error) {
        console.log(error);
    }
   }
   fetchOtherUsers();
  },[dispatch])
}

export default useGetOtherUsers