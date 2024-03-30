import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import FixedIcon from '../../Components/FixedIcon/FixedIcon';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import ResponseHeader from '../../Components/ResponseHeader/ResponseHeader';
import Main from './Main/Main';
import { useDispatch } from 'react-redux';
import { getBlogs } from '../../features/dashboard/action';
import { getProducts } from '../../features/products/action';

function Favorites() {
  const location = useLocation();
  const dispatch = useDispatch();
  const urlPath = location.pathname;
  useEffect(()=>{
    dispatch(getBlogs())
    dispatch(getProducts())
  },[])

  return (
    <>
      <Helmet>
        <title>نهال آی تی | علاقه مندی ها</title>
      </Helmet>
      <div className={ urlPath === '/userPage/favorites' ? "w-[100%]" : "w-[100vw]"}>
    {
      urlPath === '/userPage/favorites'
      ?
      <></>
      :
      <header>
          <div className="max-lg:hidden">
            <Header />
          </div>
          <div className="lg:hidden">
            <ResponseHeader/>
          </div>
      </header>
    }
    <main>
       <Main/>
    </main>
    {
      urlPath === '/userPage/favorites'
      ?
      <></>
      :
      <>
      <div>
          <FixedIcon />
      </div>
      <footer className="mt-5 w-full">
          <Footer />
      </footer>
      </>
    }
      </div>
    </>
  )
}

export default Favorites;