import React from 'react';
import NotOrder from './NotOrder';
import DetailsOrder from './DetailsOrder';

function CanceledOrders(props) {
    const { canceledOrders,
            discounts,
            discountIds,
            separateByCommas,
            showDetails, 
            setShowDetails } = props;
  return (
    <>
    {
        showDetails.type === "canceled" && showDetails.type !== null
        ?
        <DetailsOrder showDetails={showDetails} setShowDetails={setShowDetails} discounts={discounts} discountIds={discountIds} separateByCommas={separateByCommas}/>
        :
        canceledOrders.length === 0
        ?
        <NotOrder title={"هنوز سفارشی لغو نشده است"}/>
        :
        <div className='flex flex-col gap-3'>
        {
            canceledOrders?.map((order,index) => (
                <div key={index} className='w-full bg-slate-50 py-3 px-5 flex items-center justify-between'>
                    <span className='text-[#4b5f74] text-lg underline font-[shabnamBold]'>{index+1}</span>
                    <div>
                        <div>
                            <span className='font-[shabnam] ml-1'>قیمت کل:</span>
                            <span className='font-[shabnamBold]'>{separateByCommas(order.total)}</span>
                        </div>
                        <ins className='cursor-pointer hover:text-blue-500' onClick={()=>setShowDetails({type:"canceled",id:order.id})}>جزئیات سفارش</ins>
                    </div>
                </div>
            ))
        }
        </div>
    }
    </>
  )
}

export default CanceledOrders;