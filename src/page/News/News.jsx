import React from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { Link , useSearchParams , useNavigate} from 'react-router-dom';
import Pagination from '../../Components/News/Pagination/Pagination';
import { useEffect } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import ResponseHeader from '../../Components/ResponseHeader/ResponseHeader';
import FixedIcon from '../../Components/FixedIcon/FixedIcon';
import { Helmet } from 'react-helmet';

function News() {
  return (
      <div className='w-[100vw] flex flex-col'>
        <Helmet>
          <title>نهال آی تی | اخبار</title>
        </Helmet>
        <header className='max-lg:hidden'>
          <Header/>
        </header>
        <div className="lg:hidden">
            <ResponseHeader />
        </div>
        <div className='flex flex-col w-full px-5 sm:px-14 py-5'>
          <div className='flex flex-row justify-start gap-10 text-sm'>
            <Link to='/' className='text-gray-66 hover:text-sky-blue font-[shabnamBold] transition-all'>صفحه اصلی</Link>
            <Link to='/news' className='text-gray-88 font-[shabnamBold] hover:text-sky-blue transition-all'>اخبار سایت</Link>
          </div>
          <div className='flex flex-row py-10 text-sm  gap-1 text-gray-66'>
            <span>دسته:</span>
            <span>اخبارسایت</span>
          </div>
          <Pagination/>
        </div>
        <div>
          <FixedIcon />
        </div>
        <footer>
          <Footer/> 
        </footer>
      </div>
  )
}

export default News;



