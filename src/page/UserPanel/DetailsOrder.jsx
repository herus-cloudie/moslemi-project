import React from 'react';
import { useEffect } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderById } from '../../features/cart/action';
import { Active, deActive } from '../../features/loading/loadingSlice';
import { Link } from 'react-router-dom';

function DetailsOrder(props) {
    const { showDetails,
            setShowDetails,
            discounts,
            discountIds,
            separateByCommas } = props;
    const dispatch = useDispatch();
    const loading = useSelector(state => state.cart.loading);
    const order = useSelector(state => state.cart.order);
    const orderProducts = useSelector(state => state.cart.orderProducts);
    useEffect(() => {
        dispatch(getOrderById(showDetails.id))
    },[])

    useEffect(() => {
        if(loading) {
            dispatch(Active())
        }else{
            dispatch(deActive())
        }
    },[loading])
    
  return (
    <div>
        <div className='w-full p-3 '>
            <BiArrowBack className='rotate-180 scale-[2] cursor-pointer rounded-sm hover:bg-rose-500 hover:text-white' onClick={()=>setShowDetails({type:null,id:""})}/>
        </div>
        <div className='mt-5 p-5 rounded-sm flex flex-col gap-10 md:gap-3 bg-slate-50' style={{border:"solid 1.5px",borderColor:showDetails.type === "canceled" ? "red" : "#aaaaaa"}}>
            {
                orderProducts?.map(product => (
                    <div className={showDetails.type === "completed" ? 'flex flex-col gap-y-3 justify-between items-center' : 'flex justify-between items-center'}>
                        <div className='flex gap-3 items-center flex-col  md:flex-row'>
                            <img src={product.image} alt={""} className='w-20 h-20'/>
                            <div>
                                <h1 className='font-[shabnam]'>{product.title}</h1>
                                {
                                    discountIds.includes(product.id)
                                    ?
                                    <div>
                                        <span className='line-through mr-3 font-[shabnamBold]'>{separateByCommas(product.price)}</span>
                                        <span className='font-[shabnamBold]'>{separateByCommas(product.price - (product.price * discounts.find(dis => dis.product_id === product.id)?.value) / 100)}</span>
                                    </div>
                                    :
                                    <span className='font-[shabnamBold]'>{separateByCommas(product.price)}</span>
                                }
                            </div>
                        </div>
                        <Link to={`/shop/product/${product.id}/${product.title}`}><button className={showDetails.type !== "completed" ? "hidden" : "bg-blue-500 text-white rounded-sm px-2 py-1 font-[shabnam] hover:bg-blue-400 hover:shadow-md"}>نمایش محصول</button></Link>
                    </div>
                ))
            }
            <div className={showDetails.type === "current" ? 'w-full flex items-center justify-between bg-slate-200 py-3 px-5' : showDetails.type === "completed" ? 'w-full flex items-center justify-between bg-green-100 py-3 px-5' : "hidden"}>
                <span className='font-[shabnamBold]'>جمع کل:</span>
                <span className='font-[shabnamBold]'>{separateByCommas(order?.total||"")}</span>
            </div>
                 {
                    showDetails.type === "current"
                    ?
                    <div>
                     <button className='w-full text-[#736000] rounded-sm hover:brightness-105 font-[shabnamBold] py-2' style={{background:"linear-gradient(90deg, rgba(252,236,0,1) 13%, rgba(255,213,0,1) 100%)"}}>ادامه جهت تسویه حساب</button>
                     {/* <button className='w-full text-white hover:bg-red-400 rounded-sm bg-red-500 mt-3 font-[shabnamBold] py-2'>لغو سفارش</button> */}
                    </div>
                    :
                    showDetails.type === "canceled"
                    ?
                    <button className='w-full text-white hover:brightness-105 rounded-sm font-[shabnamBold] py-2 bg-red-500 hover:bg-red-400'>حذف سفارش</button>
                    :
                    <></>
                 }
        </div>
    </div>
  )
}

export default DetailsOrder;