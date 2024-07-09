import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
//import store from '../redux/store';

const Message = ({message}) => {
    const scroll = useRef();
    const {authUser, selectedUser} = useSelector(store=>store.user);
    useEffect(()=>{
scroll.current?.scrollIntoView({behavior:"smooth"});},[message]);
  return (
<div ref={scroll} className={`chat ${authUser?._id === message?.senderId ? 'chat-end' : 'chat-start'}`}>
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src={message?.senderId === authUser?._id ? authUser?.profilePhoto : selectedUser?.profilePhoto} />
    </div>
  </div>
  <div className="chat-header">
    <time className="text-xs opacity-50 text-white">12:45</time>
  </div>
  <div className={`chat-bubble ${authUser?._id !== message?.senderId ? ' bg-gray-200 text-black' : ''}`}>{message?.message}</div>
</div>
  )
}

export default Message