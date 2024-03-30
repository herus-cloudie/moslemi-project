import Cookies from 'js-cookie';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../features/products/action';
import { addOrder, getBasketsByUserId } from '../../../features/cart/action';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Table  from '../Table/Table';
import DiscountForm  from '../../DiscountForm/DiscountForm';
import { getUsers } from '../../../features/dashboard/action';

function Main() {
    const baskets = useSelector(state => state.cart.baskets);
    const success = useSelector(state => state.cart.success);
    const products = useSelector(state => state.products.products);
    const discounts = useSelector(state => state.products.discounts);
    const discountIds = discounts.map(discount => discount.product_id);
    const Ids = baskets.map(basket => basket.product_id);
    let goalProducts = products.filter(product => Ids.includes(product.id));
    const userId = JSON.parse(Cookies.get("user"))?.id;
    const dispatch = useDispatch();
    const location = useLocation();
    const urlPath = location.pathname;
    const mountedRef = useRef(false);

      if(!mountedRef.current){
          dispatch(getUsers())
          mountedRef.current = true; 
        }

      useEffect(()=>{
        dispatch(getProducts());
      },[])
  
      useEffect(()=>{
          dispatch(getBasketsByUserId(userId));
        },[success])

      const addSignToMoney = (number) => {
          const options = {style: 'decimal'};
          return number.toLocaleString('fa-IR', options) + ' تومان';
        }
      
      const allPrice = (cart) => {
          let allPrice = 0;
          cart.map(item => allPrice += discountIds.includes(item.id) ? item.price * discounts.find(dis => dis.product_id === item.id)?.value / 100 : item.price);
          return allPrice;
        }

      const orderHandle = () => {
        let dataObj = JSON.stringify({
          products:Ids,
          user_id:userId,
          total:allPrice(goalProducts)
        });
        dispatch(addOrder({userId,dataObj}))
      }

  return (
    <div className="w-full">
    {
      baskets.length > 0 ?
        <section className={urlPath === '/userPage/cart' ? "container mx-auto bg-white" : "container w-[90%] mx-auto bg-white p-7 my-10"} style={{boxShadow:urlPath === '/userPage/cart' ? '0px 0px 0px 0px' : '0px 0px 8px -3px grey'}}>
          <Table goalProducts={goalProducts} discounts={discounts} discountIds={discountIds}/>
          <div className="sm:flex flex-row gap-4 items-center justify-end w-full mt-4">
            <DiscountForm/>
          </div>
          <p className="font-black text-gray-600 mt-12">جمع کل سبد خرید</p>
          <div className="flex flex-row mt-4 text-gray-600 bg-gray-100 p-4">
            <div className="basis-1/2">
              <p className="pb-4">جمع جزء:</p>
              <p className="">مجموع:</p>
            </div>
            <div className="basis-1/2">
              <p className="pb-4">{addSignToMoney(allPrice(goalProducts))}</p>
              <p className="font-black">{addSignToMoney(allPrice(goalProducts))}</p>
            </div>
          </div>
          <button
            onClick={orderHandle}
            className="mt-4 sm:mb-0 basis-full cursor-pointer sm:basis-1/2 lg:basis-1/4 xl:basis-1/6 text-white py-3 font-bold w-full bg-blue-500 hover:bg-blue-600 px-3 rounded"
          >
             ثبت سفارش
          </button>
        </section> :
        <section className="container mx-auto font-[shabnam] bg-white shadow-black/5 p-16 my-10 shadow-xl text-center">
          <p>سبد خرید شما در حال حاضر خالی است</p>
          <Link to={"/shop"} className="mt-10 font-[shabnamBold] text-white p-3 w-full block bg-blue-500 hover:bg-blue-600 rounded">رفتن به فروشگاه</Link>
        </section>
    }
    </div>
  )
}

export default Main;