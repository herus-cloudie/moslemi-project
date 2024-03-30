import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
// import styles
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./Product.css";
// import Components
import ADbasketBtn from '../ADbasketBtn/ADbasketBtn';
import FixedIcon from '../FixedIcon/FixedIcon';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ResponseHeader from '../ResponseHeader/ResponseHeader';
import { getProducts, getTagsById } from '../../features/products/action';
import { Active, deActive } from '../../features/loading/loadingSlice';
import RightSide from './RightSide/RightSide';
import LeftSide from './LeftSide/LeftSide';

function Product() {
    const [criterion,setCriterion] = useState(true);
    const [favorites,setFavorites] = useState([]); 
    const products = useSelector(state => state.products.products);
    const tags = useSelector(state => state.products.tags);
    const loading = useSelector(state => state.cart.loading);
    const loginStatus = useSelector(state => state.authentication.loginStatus);
    const params = useParams();
    const goalId = JSON.parse(params.id);
    const goalProduct = products?.find(product => product.id === goalId);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getProducts())
      dispatch(getTagsById(goalId))
    },[])
   
    useEffect(() => {
        const list = JSON.parse(localStorage.getItem('favProducts'));
        if(list) {
          setFavorites(list); 
        }
      },[])

      useEffect(() => {
        if(criterion) {
            setCriterion(false);
            return;
        }
        localStorage.setItem('favProducts', JSON.stringify(favorites))
      },[favorites])

      useEffect(()=> {
        if(loading) {
          dispatch(Active())
        }
        else
        {
          dispatch(deActive())
        }
      },[loading])
    
  return (
    <div>
      <header>
        <div className="max-lg:hidden">
            <Header />
        </div>
        <div className="lg:hidden">
            <ResponseHeader />
        </div>
      </header>
      <main className='container mx-auto'>
        <div className='flex flex-col lg:flex-row mt-5 w-full justify-between overflow-x-hidden text-right px-3 sm:p-0'>
          {/* right side */}
          <RightSide goalProduct={goalProduct} tags={tags}/>
          {/* left side */}
          <LeftSide goalProduct={goalProduct}/>
        </div>
        <div>
        <FixedIcon />
        </div>
      </main>
        {
            loginStatus
            ?
            <ADbasketBtn productId={goalProduct?.id}/>
            :
            <Link to={"/login"} className='fixed bottom-0 items-center w-[100vw] text-white font-bold px-3 py-3 transition-all hover:bg-[#4FC0D0]  2xl:py-5 flex justify-center gap-2 bg-[#3facba] z-[49]'>
              <span>برای خرید محصولات ابتدا باید در سایت عضو شوید</span>
            </Link>
          }
      <footer>
          <Footer/>
      </footer>
    </div>
  )
}

export default Product;