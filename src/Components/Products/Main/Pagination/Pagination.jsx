import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { getBasketsByUserId } from '../../../../features/cart/action';
import { Active, deActive } from '../../../../features/loading/loadingSlice';
import { getProducts, getTags } from '../../../../features/products/action';
import ProductsPage from '../ProductsPage/ProductsPage';
import './Pagination.css';

function Pagination() {

    const [itemOffset, setItemOffset] = useState(0);
    const loginStatus = useSelector(state => state.authentication.loginStatus);
    const dispatch = useDispatch();
    const mobile = window.innerWidth <= 425 ? true : false;
    const itemsPerPage = 12;
    let products = useSelector(state => state.products.FilteredProducts);
    let reversedProducts = [...products].reverse();
    const isLoading = useSelector(state => state.products.isLoading);
    const LoadingStatus = useSelector(state => state.cart.loading);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = reversedProducts.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(reversedProducts.length / itemsPerPage);
    const userId = loginStatus ? JSON.parse(Cookies.get("user"))?.id  : '';
  
    useEffect(() => {
      dispatch(getBasketsByUserId(userId));
      dispatch(getProducts());
      dispatch(getTags());
    },[LoadingStatus])

    useEffect(()=>{
      isLoading ? dispatch(Active()) : dispatch(deActive());
    },[isLoading])
    
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % reversedProducts.length;
      window.scrollTo({top:0,behavior:'instant'})
      setItemOffset(newOffset);
    };

  return (
    <>
    <ProductsPage currentItems={currentItems}/>
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