import React from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import FixedIcon from '../../Components/FixedIcon/FixedIcon.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import Header from '../../Components/Header/Header.jsx';
import Main from '../../Components/Products/Main/Main.jsx';
import Side from '../../Components/Products/Side/Side.jsx';
import ResponseHeader from '../../Components/ResponseHeader/ResponseHeader.jsx';

function Products() {

  return (
    <main className='w-full flex flex-col'>
        <header>
          <div className="max-lg:hidden">
            <Header />
          </div>
          <div className="lg:hidden">
            <ResponseHeader />
          </div>
        </header>
            <div className='w-full flex lg:pr-0 lg:pl-5 lg:flex-row flex-col-reverse'>
              <Helmet>
                <title>نهال آی تی | محصولات</title>
              </Helmet>
              <Side/>
               <Main/>
            </div>
        <div>
        <FixedIcon />
        </div>
        <footer>
          <Footer/>
        </footer>
    </main>
  )
}

export default Products;