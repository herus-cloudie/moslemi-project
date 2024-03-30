import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, getTags } from '../../../../../features/dashboard/action';
import AllTags from './AllTags/AllTags';

function TagsPagination() {
    const [itemOffset, setItemOffset] = useState(0);
    const products = useSelector(state => state.dashboard.products) || [];
    const deleteTagSuccess = useSelector(state => state.dashboard.deleteTagSuccess);
    const tags = useSelector(state => state.dashboard.tags) || [];
    const Loading = useSelector(state => state.dashboard.tagsLoading); 
    const mobile = window.innerWidth <= 425 ? true : false;
    const itemsPerPage = 20;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = tags.toReversed().slice(itemOffset, endOffset);
    const pageCount = Math.ceil(tags.length / itemsPerPage);
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getProducts())
      dispatch(getTags())
    },[deleteTagSuccess]);

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % tags.length;
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
      <AllTags currentItems={currentItems} products={products} tags={tags}/>
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

export default TagsPagination;