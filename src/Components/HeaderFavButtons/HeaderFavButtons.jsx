import React, { useState } from 'react';
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from 'react-router-dom';

function HeaderFavButtons({ urlPath , baskets }) {

    const [showSlide4, setShowSlide4] = useState(false);
    const [showSlide5, setShowSlide5] = useState(false);
    const [favProductsID,setFavProductsID] = useState(localStorage.getItem('favProducts') === null ? [] : JSON.parse(localStorage.getItem('favProducts')));
    const [favArticlesID,setFavArticlesID] = useState(localStorage.getItem('favArticles') === null ? [] : JSON.parse(localStorage.getItem('favArticles')));
    const clickEnterShowSlide4 = () => {
        setShowSlide4(true);
      };
      const clickOutShowSlide4 = () => {
        setShowSlide4(false);
      };
      const clickEnterShowSlide5 = () => {
        setShowSlide5(true);
      };
      const clickOutShowSlide5 = () => {
        setShowSlide5(false);
      };

  return (
    <div className="flex items-center justify-center flex-row gap-2">
        {
        urlPath === '/favorites'
        ?
        <></>
        :
        <div className="relative">
            <Link to={"/favorites"}>
            <AiOutlineHeart className="text-[#57C053] text-3xl hover:text-[#62d15e]" onMouseEnter={clickEnterShowSlide4} onMouseLeave={clickOutShowSlide4}/>
            </Link>
            <span className="absolute -top-3 font-[shabnamBold] -left-1 rounded-full w-5 h-5 flex items-center justify-center p-1 bg-[#57C053] text-white min-w-fit">
              {
                favArticlesID.length + favProductsID.length 
              }
            </span>
            <div className={showSlide4 ? "box arrow-top" : "box arrow-top opacity-0 transition-all duration-300"}>
            مشاهده علاقه مندی ها
            </div>
        </div>
        }
        <div className="flex relative">
            {
                urlPath === '/cart'
                ?
                <></>
                :
                <>
                <Link to={"/cart"}>
                    <HiOutlineShoppingCart className="text-[#57C053] text-3xl hover:text-[#62d15e]" onMouseEnter={clickEnterShowSlide5} onMouseLeave={clickOutShowSlide5}/>
                </Link>
                <span className="absolute -top-3 -left-1 font-[shabnamBold] min-w-fit p-1 rounded-full w-5 h-5 flex items-center justify-center bg-[#57C053] text-white">
                    {
                    baskets?.length 
                    }
                </span>
                </>
            }
            <div className={showSlide5 ? "box arrow-bottom transition-all duration-300" : "box arrow-bottom opacity-0 transition-all duration-300"}>
                مشاهده سبد خرید
            </div>
        </div>
    </div>
  )
}

export default HeaderFavButtons