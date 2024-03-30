import React from 'react';
import './Pagination.css';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { useSearchParams  , useNavigate} from 'react-router-dom';
import NewsCards from '../NewsCards/NewsCards';
import { useEffect } from 'react';import { Active, deActive } from '../../../features/loading/loadingSlice';
import { getAllNews } from '../../../features/news/action';
import { setPageQuery } from '../../../features/news/newsSlice';
;

function Pagination() {

    const [itemOffset, setItemOffset] = useState(0);
    const [params] = useSearchParams()
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const mobile = window.innerWidth <= 425 ? true : false;
    const itemsPerPage = 12;
    let news = useSelector(state => state.news.news);
    let isLoading = useSelector(state => state.news.loading);
    news = news?.filter(item => item.is_active == 1);
    news = news?.reverse();
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = news.toReversed().slice(itemOffset, endOffset);
    const pageCount = Math.ceil(news.length / itemsPerPage);

    
    useEffect(() => {
      dispatch(getAllNews())
    },[])
  
    useEffect(() => {
      if(isLoading) {
        dispatch(Active())
      }else {
        dispatch(deActive())
      }
    },[isLoading])

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % news.length;
      window.scrollTo({top:0,behavior:'instant'})
      dispatch(setPageQuery(event.selected+1))
      navigate(`/news?page=${event.selected+1}`)
      setItemOffset(newOffset);
    };


  return (
    <>
    <NewsCards currentItems={currentItems} />
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
  )
}

export default Pagination;