import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { setScrollUp } from '../../../../../features/dashboard/dashboardSlice';
import Details from '../Details/Details';
import Orders from '../Orders';
import { getDetailOrders, getOrders, getUsers } from '../../../../../features/dashboard/action';

function OrdersPagination() {
    const [showDetails,setShowDetails] = useState({status:false,value:''});
    const [itemOffset, setItemOffset] = useState(0);
    const orders = useSelector(state => state.dashboard.orders);

    const users = useSelector(state => state.dashboard.users);
    const loading = useSelector(state => state.dashboard.ordersLoading);
    const dispatch = useDispatch();
    const mobile = window.innerWidth <= 425 ? true : false;
    const itemsPerPage = 20;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = orders.toReversed().slice(itemOffset, endOffset);
    const pageCount = Math.ceil(orders.length / itemsPerPage);
    const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % orders.length;
    dispatch(setScrollUp());
    setItemOffset(newOffset)
    };
    // console.log(showDetails)
    useEffect(() => {
      dispatch(getOrders())
      dispatch(getUsers())
    },[])

      return (
        <>
         {
          loading
          ?
          <img src="/img/Ripple-0.8s-200px.svg" alt="loading..." className='w-[50px] m-10'/>
          :
          <>
          {
              !showDetails.status
              ?
              <>
              <Orders currentItems={currentItems} setShowDetails={setShowDetails} users={users} showDetails={showDetails}/>
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
              :
              <Details details={showDetails} setShowDetails={setShowDetails} users={users}/>
          }
          </>
         }
        </>
      )
}

export default OrdersPagination;