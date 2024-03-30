import React from 'react';
import { useEffect } from 'react';
import { BiSolidBadgeDollar } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { getDetailOrders } from '../../../../features/dashboard/action';

function Orders({ currentItems  , setShowDetails , users , showDetails }) {

  const dispatch = useDispatch();

  function separateByCommas(number) {
      let numberString = String(number);
      
      let separatedNumber = '';
      let counter = 0;
      
      for (let i = numberString.length - 1; i >= 0; i--) {
        if (counter === 3) {
          separatedNumber = ',' + separatedNumber;
          counter = 0;
        }
        separatedNumber = numberString.charAt(i) + separatedNumber;
        counter++;
      }
      
      return separatedNumber
  }

  return (
    <div className='w-full flex flex-col p-10 gap-5 2xl:w-[70%]'>
    <span className='w-full text-white font-bold'>تعداد سفارش ها ( {currentItems !== null ? currentItems.length : 'NaN'} )</span>
    <div className='w-full flex flex-row flex-wrap justify-center md:flex-col gap-3 items-center'>
      {
        currentItems.map((order,index) => (
          <div key={index} className='bg-[#ffffffb4] flex-col md:flex-row gap-y-3 w-[15rem] md:w-full rounded-sm transition-all text-sm  hover:brightness-95 py-5 px-3 font-[shabnambold] flex items-center justify-between'
           onClick={()=>{
            setShowDetails({status:true,value:order})
            dispatch(getDetailOrders(order.id))
          }
            }>
              <span className='bg-stone-400 px-5 py-2 md:p-2 rounded-md'>{index+1}</span>
              <div className='flex items-center gap-1'>
                <span className='font-[shabnamBold]'>{users.find(user => user.id === order.user_id)?.first_name}</span>
                <span className='font-[shabnamBold]'>{users.find(user => user.id === order.user_id)?.last_name}</span>
              </div>
              <span className={order.status === "0" ? "text-yellow-800 font-[shabnamBold]" : "text-green-800 font-[shabnamBold]"}>
                {
                  order.status === "0"
                  ?
                  "تایید نشده"
                  :
                  "تایید شده"
                }
              </span>
              <div className='flex items-center gap-1'>
               <span className='font-[shabnamBold]'>{`${separateByCommas(order.total)}`}</span>
               <span className='font-[shabnamBold]'>تومان</span>
               <BiSolidBadgeDollar className='text-base'/>
              </div>
          </div>
        ))
      }
    </div>
    </div>
  )
}

export default Orders;