import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import EmptyFavorite from '../../../Components/EmptyFavorite/EmptyFavorite';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles } from '../../../features/article/action';
import moment from 'moment-jalaali';

function FArticles() {
    const [favoriteArt,setFavoriteArt] = useState(null);
    const [favArticlesID,setFavArticlesID] = useState(localStorage.getItem('favArticles') === null ? [] : JSON.parse(localStorage.getItem('favArticles')));
    const articles = useSelector(state => state.articles.articles);
    const location = useLocation();
    const dispatch = useDispatch();
    const urlPath = location.pathname;

    useEffect(()=>{
        dispatch(getArticles())
    },[])

    const filterProductsById = (ids, articles) => {
        const filteredArticles = [];  
        for (let i = 0; i < articles.length; i++) {
          const article = articles[i];
      
          if (ids.includes(article.id)) {
            filteredArticles.push(article);
          }
        }
        return filteredArticles;
      };

      useEffect(() => {
        if(favArticlesID.length !== 0) setFavoriteArt(filterProductsById(favArticlesID,articles));
      },[articles])

    const deleteFromFavorites = (id) => {
        setFavoriteArt(favoriteArt.filter(item => item.id !== id));
        let list = JSON.stringify(favArticlesID.filter(item => item !== id))
        setFavArticlesID(favArticlesID.filter(item => item !== id));
        localStorage.setItem('favArticles',list);
    }

  return (
    <div>
        {
            favArticlesID.length === 0 
            ?
            <EmptyFavorite title={'مقالات'}/>
            :
            <div className='flex flex-col gap-y-5 md:gap-y-3 bg-gray-100 p-5'>
                {
                    favoriteArt?.map((item,index) => (
                        <div className='flex flex-col gap-y-3 sm:gap-y-5 md:flex-row items-center bg-gray-200 px-3 py-2 justify-between rounded-sm shadow-[0px_0px_10px_-6.5px_#010101]'>
                            <img src={item.image} alt="img"  className={urlPath === '/userPage/favorites' ? 'w-[5rem] h-[5rem] md:w-[3rem] md:h-[3rem] bg-gray-600' : 'md:w-[3rem] md:h-[3rem] w-[5rem] h-[5rem] bg-gray-600'}/>
                            <span className='text-[0.9rem] w-[8rem] line-clamp-1 text-center font-[shabnambold] text-stone-500'>{item.title}</span>
                            <p className={urlPath === '/userPage/favorites' ? 'w-[10rem] sm:w-[20rem] 2xl:w-[15rem] text-center line-clamp-1 text-[0.8rem] font-[shabnam]' : 'w-[15rem] md:w-[20rem] text-justify line-clamp-3 md:line-clamp-1 text-[0.8rem] font-[shabnam]'}>{item.body}</p>
                            <span className='text-sm font-[shabnambold]'>{moment(item.created_at).format("jYYYY/jMM/jDD")}</span>
                            <div className='flex flex-col md:flex-row items-center gap-3 w-full md:w-fit justify-center'>
                                <Link className='bg-[#E7B10A] shadow-base text-center text-white rounded-md px-0 w-1/2 md:w-fit md:px-2 lg:px-3 text-xs transition-all hover:brightness-105 py-1' to={{pathname:'/articles/article', search:`id=${item.id}`}}>نمایش</Link>
                                <button className='bg-red-500 text-white rounded-md px-0 w-1/2 md:w-fit md:px-2 lg:px-3 text-xs transition-all hover:bg-red-400 py-1' onClick={()=>deleteFromFavorites(item.id)}>حذف</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        }
    </div>
  )
}

export default FArticles;