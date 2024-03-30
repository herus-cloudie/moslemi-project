import { React, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs, getProducts } from '../../../../../../features/dashboard/action';
import { setScrollUp } from '../../../../../../features/dashboard/dashboardSlice';
import AllDiscounts from '../AllDiscounts';

function DiscountsPagination() {
    const [itemOffset, setItemOffset] = useState(0);
    const products = useSelector(state => state.dashboard.products) || [];
    const discounts = useSelector(state => state.dashboard.discounts) || [];
    const Loading = useSelector(state => state.dashboard.productsLoading);
    const discountsLoading = useSelector(state => state.dashboard.discountsLoading);
    const ListDiscounts = discounts.slice(0,100) 
    const mobile = window.innerWidth <= 425 ? true : false;
    const itemsPerPage = 20;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = ListDiscounts.toReversed().slice(itemOffset, endOffset);
    const pageCount = Math.ceil(ListDiscounts.length / itemsPerPage);
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getProducts())
    },[discountsLoading]);

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % ListDiscounts.length;
      dispatch(setScrollUp());
      setItemOffset(newOffset);
    };


  return (
    <>
    {
      Loading
      ?
      <div className='w-[full] flex items-center justify-center'>
        <img src={"/img/Ripple-0.8s-200px.svg"} alt="loading" className='w-[50px]'/>
      </div>
     :
     <>
      <AllDiscounts currentItems={currentItems} products={products} discounts={discounts}/>
      <ReactPaginate
      breakLabel="..."
      nextLabel={mobile ? '>>' : "برگه بعدی >>"}
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel={mobile ? '<<' : "<< برگه قبلی"}
      renderOnZeroPageCount={null}
      className='pagination'
      activeClassName='active'
      previousClassName='preBtn'
      nextClassName='nextBtn'
     />
     </>
    }
  </>
  )
}

export default DiscountsPagination;