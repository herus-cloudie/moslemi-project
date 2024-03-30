import moment from 'moment-jalaali';
import React, { useEffect, useState } from 'react';
import HTMLRenderer from 'react-html-renderer';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsCalendar4 } from 'react-icons/bs';
import { FaShoppingBag } from 'react-icons/fa';
import { HiCurrencyDollar } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function ProductsPage({currentItems}) {
    const [criterion,setCriterion] = useState(true);
    const [favorites,setFavorites] = useState([]);
    const discounts = useSelector(state => state.products.discounts);
    const discountIds = discounts.map(discount => discount.product_id);

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
    
    const addToFavorite = (id) => {
        setFavorites(favorites.concat(id));
    }

    const deleteFromFavorites = (id) => {
        setFavorites(favorites.filter(key => key !== id));
    }

    function separateByCommas(number) {
        let numberString = String(number);
        
        let separatedNumber = '';
        let counter = 0;
        
        for (let i = numberString.length - 1; i >= 0; i--) {
          if (counter === 3) {
            separatedNumber = ',' + separatedNumber;
            counter = 0;
          }
          separatedNumber = numberString.charAt(i) + separatedNumber;
          counter++;
        }
        
        return separatedNumber
    }

  return (
    <>
      <div className='container mx-auto'>
        <div className='w-full flex flex-wrap gap-5 justify-center py-5 px-3'>
            {
                currentItems.length === 0 
                ? 
                <div className='h-[100dvh] flex justify-content items-center text-xl'>
                    <h1 className='font-[shabnamBold] text-stone-600'>محصولی یافت نشد!</h1>
                </div>
                :
                <>
                {
                currentItems?.map((product) => (
                    <>
                    <Link to={`/shop/product/${product.id}/${product.title}`}  key={product?.id} className='w-[20rem] z-0 3xl:w-[18%] 2xl:w-[25%] sm:w-[45%] md:w-[30%] lg:w-[28%] flex justify-between flex-col sm:gap-1  relative bg-stone-200 rounded-md overflow-hidden' style={{boxShadow: '0px 0px 5px 0px #919191'}}>
                        {
                            discountIds.includes(product?.id)
                            ?
                            <div className='absolute flex items-center gap-1 bg-[#F19B1E] text-white text-xs font-bold py-1 px-3 rounded-2xl left-1 top-3'>
                                <span className='font-[shabnamBold]'>{discounts.find(discount => discount.product_id === product.id)?.value}%</span>
                                <span className='font-[shabnamBold]'>تخفیف</span>
                            </div>
                            :
                            <></>
                        }
                        <img src={product?.image} alt={product.title} className='hover:brightness-125 transition-all h-[250px] md:h-[180px] 2xl:h-[200px]'/>
                        <div className='px-1 py-2'>
                            <h1 className='text-[0.9rem] leading-5 font-[shabnamBold] text-stone-600'>{product.title}</h1>
                        </div>
                        <div className='line-clamp-3 text-[0.8rem] leading-5 text-stone-500 w-full px-1 font-[shabnamMedium] my-2'>
                            <HTMLRenderer html={product?.description}/>
                        </div>
                        <div className='w-full flex items-center justify-between text-stone-500 text-xs p-1'>
                            <div className='flex items-center gap-1'>
                                <BsCalendar4/>
                                <span className='font-[shabnambold]'>{moment(product?.created_at).format('jYYYY/jMM/jDD')}</span>
                            </div>
                            <div className='flex items-center gap-5 font-[shabnamMedium] px-1'>
                                <AiOutlineHeart className={ favorites.includes(product?.id) ? 'hidden' : 'block scale-[1.5]' } onClick={()=>{
                                addToFavorite(product.id)
                                }}/>
                                <AiFillHeart className={ favorites.includes(product?.id) ? 'block text-red-600 scale-[1.5] hover:text-red-500 transition-all' : 'hidden' } onClick={()=>{
                                deleteFromFavorites(product.id)
                                }}/>
                            </div>
                        </div>
                        {
                            discountIds.includes(product?.id)
                            ?
                            <div className='w-full flex items-center font-bold px-2 text-sm my-3 gap-1'>
                                <HiCurrencyDollar className='text-yellow-600 scale-150'/>
                                <del className='flex gap-1 items-center text-red-600'>
                                    <span className='font-[shabnamBold]'>{separateByCommas(product.price)}</span>
                                    <span className='font-[shabnamBold]'>تومان</span>
                                </del>
                                <span>-</span>
                                <div className='flex gap-1 items-center text-green-600'>
                                    {
                                        discounts.find(discount => discount.product_id === product.id)?.value === 100
                                        ?
                                        <span className='font-[shabnamBold]'>رایگان</span>
                                        :
                                        <>
                                          <span className='font-[shabnamBold]'>{separateByCommas(product.price - (product.price * discounts.find(discount => discount.product_id === product.id)?.value) / 100)}</span>
                                          <span className='font-[shabnamBold]'>تومان</span>
                                        </>
                                    }
                                </div>
                            </div>
                            :
                            <div className='w-full flex items-center font-bold px-2 text-sm my-3 gap-1'>
                                <HiCurrencyDollar className='text-yellow-600 scale-150'/>
                                <span className='text-yellow-800 font-[shabnamBold]'>{separateByCommas(product.price)}</span>
                                <span className='text-yellow-800 font-[shabnamBold]'>تومان</span>
                            </div>
                        }
                        <Link to={`/shop/product/${product.id}/${product.title}`} className='flex items-center mx-3 mb-3 bg-lime-600 hover:bg-lime-500 transition-all duration-300 justify-center gap-1 text-white py-1 text-sm font-bold rounded-md'>
                            <FaShoppingBag/>
                            <span className='font-[shabnamBold]'>خرید محصول</span>
                        </Link>
                    </Link>              
                    </>
                ))
                }
                </>
            }
        </div>
      </div>
    </>
  )
}

export default ProductsPage