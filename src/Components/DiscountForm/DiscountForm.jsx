import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDiscount } from "../../features/cart/cartSlice";

const DiscountForm = () => {
  const dispatch = useDispatch();
  const discount = useSelector(state => state.cart.discount);
  const handleCheckDiscount = (event) => {
    event.preventDefault();
  }
  return (
    <form className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4" onSubmit={handleCheckDiscount}>
      <div className="relative w-full">
        <input
          onChange={(event) => dispatch(setDiscount(event.target.value))}
          value={discount}
          type="text"
          className="block w-full p-4 sm:pe-36 text-sm text-gray-900 border border-gray-300 rounded"
          placeholder="کد تخفیف"
        />
        <button
          type="submit"
          className="text-white mt-3 text-sm font-bold py-2 w-full block sm:absolute sm:mt-0 sm:py-0 sm:w-auto end-2 top-2 bottom-2 bg-blue-500 hover:bg-blue-600 px-3 rounded">
          اعمال کد تخفیف
        </button>
      </div>
    </form>
  );
}

export default DiscountForm;