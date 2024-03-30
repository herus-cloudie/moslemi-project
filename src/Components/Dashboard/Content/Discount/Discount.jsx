import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DiscountsPagination from "./AllDiscounts/DiscountsPagination/DiscountsPagination";
import NewDiscount from "./NewDiscount/NewDiscount";

function Discount() {
  const [innerComponent, setInnerComponent] = useState(<></>);
  const Criterion = useSelector((state) => state.dashboard.discountSwitch);
  useEffect(() => {
    switch (Criterion) {
      case "all":
        setInnerComponent(<DiscountsPagination />);
        break;
      case "new":
        setInnerComponent(<NewDiscount />);
        break;
      default:
        setInnerComponent(<></>);
    }
  }, [Criterion]);

  return (
    <div className="container mx-auto h-full p-3 md:p-10 flex flex-col justify-between items-center">
      {innerComponent}
    </div>
  );
}

export default Discount;
