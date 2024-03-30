import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import AllLinks from '../AllLinks/AllLinks';
import { getLinks } from '../../../../../features/dashboard/action';

function LinksPagination() {
    const [itemOffset, setItemOffset] = useState(0);
    const links = useSelector(state => state.dashboard.links); 
    const Loading = useSelector(state => state.dashboard.linksLoading); 
    const deleteLoading = useSelector(state => state.dashboard.linkDeleteLoading); 
    const mobile = window.innerWidth <= 425 ? true : false;
    const itemsPerPage = 20;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = links.toReversed().slice(itemOffset, endOffset);
    const pageCount = Math.ceil(links.length / itemsPerPage);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getLinks());
    },[deleteLoading]);

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % links.length;
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
      <AllLinks currentItems={currentItems} linksLength={links?.length} deleteLoading={deleteLoading} dispatch={dispatch}/>
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

export default LinksPagination;