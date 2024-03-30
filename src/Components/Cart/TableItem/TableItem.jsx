import React from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { deleteBasket } from '../../../features/cart/action';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { Active, deActive } from '../../../features/loading/loadingSlice';
import moment from 'moment-jalaali';

const TableItem = ({ cartItem , discounts , discountIds }) => {
  const dispatch = useDispatch();
  const baskets = useSelector(state => state.cart.baskets);
  const loading = useSelector(state => state.cart.loading);
  const userId = JSON.parse(Cookies.get("user")).id;
  const goalId = baskets.find(basket => basket.product_id === cartItem.id && basket.user_id === userId )?.id;
  let created_date = moment(cartItem.created_at);
  let updated_date = moment(cartItem.updated_at);
  const createdYear = created_date.jYear();
  const createdMonth = created_date.jMonth(); 
  const createdDate = created_date.jDate();
  const updatedYear = updated_date.jYear();
  const updatedMonth = updated_date.jMonth(); 
  const updatedDate = updated_date.jDate();
  created_date = moment(`${createdYear}-${createdMonth}-${createdDate}`,'jYYYY-jMM-jDD');
  updated_date = moment(`${updatedYear}-${updatedMonth}-${updatedDate}`,'jYYYY-jMM-jDD');

  useEffect(()=> {
    if(loading) {
      dispatch(Active())
    }
    else
    {
      dispatch(deActive())
    }
  },[loading])

  const addSignToMoney = (number) => {
    const options = {style: 'decimal'};
    return number.toLocaleString('fa-IR', options) + ' تومان';
  }

  return (
    <tr className="border flex flex-col  lg:flex-row w-[100%] pb-3 mx-auto items-center justify-between pl-3 lg:py-1 hover:bg-[#f7f7f7] bg-[#fafafa] text-gray-600 text-center shadow-md">
      <td className="py-5 md:py-1  px-4">
        <div className="flex items-center justify-center text-start">
          <div className="flex flex-col w-fit lg:flex-row  items-center gap-5">
              <img
                src={cartItem.image}
                className="h-[100px] w-[100px] lg:h-[80px] lg:w-[80px] hover:opacity-70 bg-gray-77"
                alt={cartItem.title}
              />
            <div className='flex flex-col items-center lg:items-start'>
              <Link className="block text-stone-500 break-words max-w-[500px] text-[1rem] line-clamp-1 font-[shabnam] text-center lg:text-start hover:text-blue-600" to={"#"}>{cartItem.title}</Link>
              <span className='font-[shabnamBold] mt-3'> آخرین بروزرسانی: {updated_date.format('jYYYY/jMM/jDD')}</span>
            </div>
          </div>
        </div>
      </td>
      <div className='flex items-center flex-col lg:flex-row'>
      <td className="p-4">
        {
          discountIds.includes(cartItem.id)
          ?
          <div className='flex items-center gap-5'>
            <span className='font-[shabnam] line-through'>{addSignToMoney(cartItem.price)}</span>
            <span className='font-[shabnam]'>{addSignToMoney(cartItem.price - (cartItem.price * discounts.find(discount => discount.product_id === cartItem.id)?.value) / 100)}</span>
          </div>
          :
          <span className='font-[shabnam]'>{addSignToMoney(cartItem.price)}</span>
        }
      </td>
      <div>
            <button
              onClick={() => dispatch(deleteBasket(goalId))}
              className="bg-red-500 hover:bg-red-600 h-fit w-fit p-1 text-white rounded"
              title="حذف"
            >
              <MdOutlineClose className='hidden lg:block'/>
              <span className='mx-3 block lg:hidden font-[shabnam] text-xs'>حذف از سبد خرید</span>
            </button>
      </div>
      </div>
    </tr>
  );
};

export default TableItem;
