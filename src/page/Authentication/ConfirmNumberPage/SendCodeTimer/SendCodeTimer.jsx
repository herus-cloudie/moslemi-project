import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeSendCode } from '../../../../features/authentication/AuthenticationSlice';
import { PiClockBold } from 'react-icons/pi';

function SendCodeTimer() {
const [secondes,setSeconds] = useState(59);    
const [minutes,setMinutes] = useState(1);   
const dispatch = useDispatch(); 

var timer;
useEffect(() => {
    timer = setInterval(() => {
        setSeconds(secondes-1)
        if(minutes === 0 && secondes === 1) {
            dispatch(changeSendCode());
            setSeconds(59);
            setMinutes(1);
        }
        else if(secondes === 1){
            setSeconds(59);
            setMinutes(minutes-1);
        }
    },1000)
    return () =>  clearInterval(timer);
});

      return (
          <div className='flex items-center w-full justify-end gap-1'>
            <span className='font-[shabnamBold]'>{minutes < 10 ? `0${minutes}` : minutes }:{secondes < 10 ? `0${secondes}` : secondes}</span>
            <PiClockBold/>
          </div>
      );
}

export default SendCodeTimer;