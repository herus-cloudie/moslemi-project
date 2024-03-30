import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CouponPagination from './CouponPagination/CouponPagination';
import NewCoupon from './NewCoupon/NewCoupon';

function Coupons() {
    const [innerComponent,setInnerComponent] = useState(<></>);
    const Criterion = useSelector(state=> state.dashboard.couponSwitch);
    useEffect(()=>{
        switch(Criterion)
        {
            case 'all' : setInnerComponent(<CouponPagination/>);
            break;
            case 'new' : setInnerComponent(<NewCoupon/>)
            break;
            default : setInnerComponent(<></>)
        }
    },[Criterion])

  return (
    <div className='container mx-auto flex flex-col justify-between items-center h-full p-3 md:p-10'>
        {
            innerComponent
        }
    </div>
  )
}

export default Coupons;