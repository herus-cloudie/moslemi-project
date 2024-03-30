import { React, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { getBanner } from '../../../../../../features/dashboard/action';
import { setScrollUp } from '../../../../../../features/dashboard/dashboardSlice';
import Banner from '../../Banner';

function BannerPagination() {
    const [itemOffset, setItemOffset] = useState(0);
    const banner = useSelector(state => state.dashboard.banner);
    const Loading = useSelector(state => state.dashboard.bannerLoading);
    const mobile = window.innerWidth <= 425 ? true : false;
    const itemsPerPage = 11;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = banner.toReversed().slice(itemOffset, endOffset);
    const pageCount = Math.ceil(banner.length / itemsPerPage);
    const dispatch = useDispatch();
    const bannerLoading = useSelector(state => state.dashboard.bannerLoading)
    // console.log(bannerLoading)
    useEffect(()=>{
      dispatch(getBanner())
    },[]);
   

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % banner.length;
      dispatch(setScrollUp());
      setItemOffset(newOffset);
    };


  return (
    <>
    {
      Loading
      ?
      <div className='h-[10rem] w-[full] flex items-center justify-center'>
      <img src={"/img/Ripple-0.8s-200px.svg"} alt="loading" className='w-[30%]'/>
     </div>
     :
     <>
      <Banner currentItems={currentItems} bannersLength={banner?.length}/>
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

export default BannerPagination;