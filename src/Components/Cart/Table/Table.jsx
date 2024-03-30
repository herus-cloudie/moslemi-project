import React from "react";
import TableItem from '../TableItem/TableItem';

const Table = ({ goalProducts , discounts , discountIds }) => {

  return (
    <div className="relative overflow-x-auto w-full">
      <table className="border border-gray-200 text-sm w-full min-w-300 flex flex-col">
        <thead className="w-full">
        <tr className="text-gray-500 bg-gray-200 hidden lg:flex w-full justify-between px-5">
          <th className="p-2">محصول</th>
          <div className="flex items-center gap-3 2xl:gap-16 xl:gap-12 lg:gap-12">
            <th className="p-2">قیمت</th>
          </div>
        </tr>
        </thead>
        <div>
          <tbody className="flex flex-wrap lg:flex-col justify-start h-fit gap-y-4 py-3 w-full">
            {goalProducts?.map(cartItem => <TableItem cartItem={cartItem} discounts={discounts} discountIds={discountIds}/>)}
          </tbody>
        </div>
      </table>
    </div>
  );
};

export default Table;
