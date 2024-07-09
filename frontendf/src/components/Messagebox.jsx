import React from 'react'
import Message from './Message'
import useGetMessages from '../hooks/useGetMessages';
import { useSelector } from 'react-redux';
import useGetRealTimeMessage from '../hooks/useGetRealTimeMessage';
//import store from '../redux/store';

const Messagebox = () => {
  useGetMessages();
useGetRealTimeMessage();
  const {messages} = useSelector(store=>store.message);
  return (
    <div className='px-4 flex-1 overflow-auto'>
        {
          messages && messages?.map((message)=>{
                return (
                    <Message key={message._id} message={message}/>
                )
            })
        }
    </div>
  )
}

export default Messagebox