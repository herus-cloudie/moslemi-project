import { React, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../../../../../../features/dashboard/action';
import { setDeleteNewsSuccess, setScrollUp } from '../../../../../../features/dashboard/dashboardSlice';
import EditNews from '../../EditNews/EditNews';
import AllNews from '../AllNews';

function NewsPagination() {
    const [itemOffset, setItemOffset] = useState(0);
    const [isEdit,setIsEdit] = useState('');
    const news = useSelector(state => state.dashboard.news);
    const Loading = useSelector(state => state.dashboard.newsLoading);
    const mobile = window.innerWidth <= 425 ? true : false;
    const itemsPerPage = 11;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = news.toReversed().slice(itemOffset, endOffset);
    const pageCount = Math.ceil(news.length / itemsPerPage);
    const dispatch = useDispatch();
    useEffect(()=>{
      if(isEdit === ''){
        dispatch(getNews())
        dispatch(setDeleteNewsSuccess(false))
      }
    },[isEdit]);

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % news.length;
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
        isEdit === ''
        ?
            <>
            <AllNews currentItems={currentItems} newsLength={news?.length} setIsEdit={setIsEdit}/>
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
        <EditNews isEdit={isEdit} setIsEdit={setIsEdit}/>
        }
    </>
  )
}

export default NewsPagination;