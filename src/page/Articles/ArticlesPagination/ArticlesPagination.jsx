import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import FixedIcon from '../../../Components/FixedIcon/FixedIcon';
import Footer from '../../../Components/Footer/Footer';
import Header from '../../../Components/Header/Header';
import ResponseHeader from '../../../Components/ResponseHeader/ResponseHeader';
import Articles from '../Articles';
import { useEffect } from 'react';
import { getArticles } from '../../../features/article/action';
import { Active, deActive } from '../../../features/loading/loadingSlice';

function ArticlesPagination() {

    const [itemOffset, setItemOffset] = useState(0);
    let articles = useSelector(state => state.articles.articles);
    articles = articles.filter(art => art.is_active === 1);
    articles = articles.reverse();
    const isLoading = useSelector(state => state.articles.isLoading);
    const mobile = window.innerWidth <= 425 ? true : false;
    const itemsPerPage = 12;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = articles.toReversed().slice(itemOffset, endOffset);
    const pageCount = Math.ceil(articles.length / itemsPerPage);
    const dispatch = useDispatch();
    const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % articles.length;
      window.scrollTo({top:0,behavior:'instant'})
      setItemOffset(newOffset);
    };
    useEffect(() => {
      dispatch(getArticles());
    },[])

    useEffect(() => {
      if(isLoading)
      {
        dispatch(Active())
      }
      else
      {
        dispatch(deActive())
      }
    },[isLoading])

  return (
    <main>
      <header>
    <div className="max-lg:hidden">
      <Header />
    </div>
    <div className="lg:hidden">
      <ResponseHeader />
    </div>
    </header>
    <Articles currentItems={currentItems} />
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
        <div>
        <FixedIcon />
      </div>
      <footer>
        <Footer />
      </footer>
      </main>
  )
}

export default ArticlesPagination;