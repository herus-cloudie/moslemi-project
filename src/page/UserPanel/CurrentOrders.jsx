import React from 'react';
import DetailsOrder from './DetailsOrder';
import NotOrder from './NotOrder';

function CurrentOrders(props) {
    const { currentOrders,
            discounts,
            discountIds,
            separateByCommas,
            showDetails, 
            setShowDetails } = props;

  return (
    <>
    {
        showDetails.type === "current" && showDetails.type !== null
        ?
        <DetailsOrder showDetails={showDetails} setShowDetails={setShowDetails} discounts={discounts} discountIds={discountIds} separateByCommas={separateByCommas}/>
        :
        currentOrders.length === 0
        ?
        <NotOrder title={"هنوز سفارشی اضافه نشده است"}/>
        :
        <div className='flex flex-col gap-3'>
        {
            currentOrders?.map((order,index) => (
                <div key={index} className='w-full bg-slate-50 py-3 px-5 flex items-center justify-between'>
                    <span className='text-[#4b5f74] text-lg underline font-[shabnamBold]'>{index+1}</span>
                    <div>
                        <div>
                            <span className='font-[shabnam] ml-1'>قیمت کل:</span>
                            <span className='font-[shabnamBold]'>{separateByCommas(order.total)}</span>
                        </div>
                        <ins className='cursor-pointer hover:text-blue-500' onClick={()=>setShowDetails({type:"current",id:order.id})}>جزئیات سفارش</ins>
                    </div>
                </div>
            ))
        }
        </div>
    }
    </>
  )
}

export default CurrentOrders;