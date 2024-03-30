import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AllCoupons from '../AllCoupons/AllCoupons';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import { useEffect } from 'react';
import { getCoupons, getUsers } from '../../../../../features/dashboard/action';
import CouponDetails from '../CouponDetails/CouponDetails';

function CouponPagination() {
    const coupons = useSelector(state => state.dashboard.coupons);
    const users = useSelector(state => state.dashboard.users);
    const isLoading = useSelector(state => state.dashboard.couponLoading);
    const success = useSelector(state => state.dashboard.couponsSuccess);
    const [showDetails,setShowDetails] = useState('');
    const [itemOffset, setItemOffset] = useState(0);
    const mobile = window.innerWidth <= 425 ? true : false;
    const itemsPerPage = 20;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = coupons.toReversed().slice(itemOffset, endOffset);
    const pageCount = Math.ceil(coupons.length / itemsPerPage);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCoupons())
        dispatch(getUsers())
    },[success,showDetails])

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % coupons.length;
      dispatch(setScrollUp());
      setItemOffset(newOffset);
    };


  return (
    <>
     {
      showDetails !== ""
      ?
      <CouponDetails setShowDetails={setShowDetails} showDetails={showDetails}/>
      :
      <>
      {
        isLoading 
        ?
        <div className='h-[10rem] w-[full] flex items-center justify-center'>
           <img src={"/img/Ripple-0.8s-200px.svg"} alt="loading" className='w-[50px]'/>
        </div>
        :
        <>
        <AllCoupons currentItems={currentItems} users={users} setShowDetails={setShowDetails} coupons={coupons}/>
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
     }
    </>
  )
}

export default CouponPagination;