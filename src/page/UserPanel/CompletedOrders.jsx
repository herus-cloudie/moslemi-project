import React from 'react';
import NotOrder from './NotOrder';
import DetailsOrder from './DetailsOrder';

function CompletedOrders(props) {
    const { completedOrders,
            discounts,
            discountIds,
            separateByCommas,
            showDetails, 
            setShowDetails } = props;
  return (
    <>
    {
        showDetails.type === "completed" && showDetails.type !== null
        ?
        <DetailsOrder showDetails={showDetails} setShowDetails={setShowDetails} discounts={discounts} discountIds={discountIds} separateByCommas={separateByCommas}/>
        :
        completedOrders.length === 0
        ?
        <NotOrder title={"سفارش تکمیل شده ای وجود ندارد"}/>
        :
        <div className='flex flex-col gap-3'>
        {
            completedOrders?.map((order,index) => (
                <div key={index} className='w-full bg-slate-50 py-3 px-5 flex items-center justify-between'>
                    <span className='text-[#4b5f74] text-lg underline font-[shabnamBold]'>{index+1}</span>
                    <div>
                        <div>
                            <span className='font-[shabnam] ml-1'>قیمت کل:</span>
                            <span className='font-[shabnamBold]'>{separateByCommas(order.total)}</span>
                        </div>
                        <ins className='cursor-pointer hover:text-blue-500' onClick={()=>setShowDetails({type:"completed",id:order.id})}>جزئیات سفارش</ins>
                    </div>
                </div>
            ))
        }
        </div>
    }
    </>
  )
}

export default CompletedOrders;