import { React, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs } from '../../../../../../features/dashboard/action';
import { setScrollUp } from '../../../../../../features/dashboard/dashboardSlice';
import AllArticles from '../AllArticles';

function ArticlesPagination() {
    const [itemOffset, setItemOffset] = useState(0);
    const articles = useSelector(state => state.dashboard.blogs);
    const Loading = useSelector(state => state.dashboard.blogsLoading);
    const mobile = window.innerWidth <= 425 ? true : false;
    const itemsPerPage = 11;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = articles.toReversed().slice(itemOffset, endOffset);
    const pageCount = Math.ceil(articles.length / itemsPerPage);
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getBlogs())
    },[]);

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % articles.length;
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
      <AllArticles currentItems={currentItems} articlesLength={articles?.length}/>
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

export default ArticlesPagination;