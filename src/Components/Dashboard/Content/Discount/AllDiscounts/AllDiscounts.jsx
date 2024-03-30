import moment from "moment-jalaali";
import React, { useState } from "react";
import DiscountInput from "./DiscountInput/DiscountInput";
import { useDispatch } from "react-redux";
import { deleteDiscount } from "../../../../../features/dashboard/action";

function AllDiscounts({ currentItems, products, discounts }) {
  const [deleteIcon, setDeleteIcon] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="w-full flex flex-col gap-5 items-center">
      <span className="w-full text-white font-bold mx-5 md:m-0">
        {" "}
        تخفیف ها ( {discounts?.length} )
      </span>
      <div className="flex flex-wrap items-center gap-3 w-full justify-center">
        {currentItems.map((discount) => (
          <div
            className="w-fit bg-white rounded-sm p-3 flex flex-col items-start gap-2 relative"
            onMouseEnter={() => setDeleteIcon(discount.id)}
            onMouseLeave={() => setDeleteIcon("")}
          >
            <span className="font-[shabnamBold]">
              {
                products.find((product) => product.id === discount.product_id)
                  ?.title
              }
            </span>
            <div className="flex items-center gap-1">
              <span className="font-[shabnamBold] text-sm">ایجاد:</span>
              <span className="font-[shabnamBold] text-sm">
                {moment(discount.created_at).format("jYYYY/jMM/jDD")}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-[shabnamBold] text-sm">ویرایش:</span>
              <span className="font-[shabnamBold] text-sm">
                {moment(discount.updated_at).format("jYYYY/jMM/jDD")}
              </span>
            </div>
            <DiscountInput
              discount={discount}
              productId={
                products.find((product) => product.id === discount.product_id)
                  ?.id
              }
            />
            <span
              className="absolute left-1 top-1 cursor-pointer hover:brightness-200"
              style={{
                visibility: deleteIcon === discount.id ? "visible" : "hidden",
              }}
              onClick={() =>
                dispatch(
                  deleteDiscount(
                    products.find((pro) => pro.id === discount.product_id).id
                  )
                )
              }
            >
              &#10060;
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllDiscounts;
