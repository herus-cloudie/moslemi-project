import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { setDiscountId } from '../../../../../../features/dashboard/dashboardSlice';
import { useEffect } from 'react';
import { editDiscount } from '../../../../../../features/dashboard/action';

function DiscountInput({ discount , productId }) {
  const [discountValue,setDiscountValue] = useState(discount.value);
  const loading = useSelector(state => state.dashboard.discountsLoading);
  const discountId = useSelector(state => state.dashboard.discountId);
  const dispatch = useDispatch(); 

  const changeInputHandler = e => {
    if( e.target.value > 100 ) {
      e.target.value = 100
      toast.info("درصد تخفیف صحیح نیست")
    }
    else if(e.target.value === "")
    {
      e.target.value = 0
    }
    else {
      setDiscountValue(e.target.value)
    }
  }

  const editDiscountHandle = () => {
    dispatch(setDiscountId(discount.id))
    dispatch(editDiscount({ productId , discountValue }))
  }

  return (
    <div className='flex items-center gap-1'>
        <span>%</span>
        <input type="number" defaultValue={discount.value} className='bg-slate-200 px-1 w-[150px]' onChange={e => changeInputHandler(e)}/>
        <button type='button' className='text-xs bg-orange-400 w-[50px] h-[23px] hover:shadow-md hover:bg-orange-300 text-white rounded-sm font-[shabnamBold]' onClick={editDiscountHandle}>
        {
          loading && discountId === discount.id
          ?
          <img src="/img/Rolling-0.8s-200px.svg" alt="loading..." className='w-full h-full'/>
          :
          <span>ویرایش</span>
        }
      </button>
  </div>
  )
}

export default DiscountInput;