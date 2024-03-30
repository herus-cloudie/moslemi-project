import Cookies from 'js-cookie';
import React from 'react';
import { addBasket } from '../../features/cart/action';
import { GiBasket } from 'react-icons/gi';
import { useDispatch } from 'react-redux';

function ADbasketBtn({ productId }) {
    const userId = JSON.parse(Cookies.get('user')).id;
    const dispatch = useDispatch();
    
    const addToBasket = () => {
        dispatch(addBasket({user_id:userId,product_id:productId}))
      }

  return (
    <div>
      <button onClick={addToBasket} className='fixed bottom-0 items-center w-full text-white font-bold px-3 py-3 transition-all hover:bg-green-500  2xl:py-5 flex justify-center gap-2 bg-green-600 z-[49]'>
        <GiBasket/>
        <span>افزودن به سبد خرید</span>
      </button>
    </div>
  )
}

export default ADbasketBtn;