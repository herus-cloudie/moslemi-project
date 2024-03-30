import React, { useEffect, useState } from 'react';
import HTMLRenderer from 'react-html-renderer';
import { AiFillFolder, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { ImEye } from 'react-icons/im';
import { TfiMenuAlt } from 'react-icons/tfi';
import { Link, useNavigate } from 'react-router-dom';

function Blogs({ currentItems }) {
    const navigate = useNavigate();
    const [criterion,setCriterion] = useState(true);
    const [favorites,setFavorites] = useState([]);

    useEffect(() => {
        const list = JSON.parse(localStorage.getItem('favArticles'));
        if(list) {
          setFavorites(list); 
        }
      },[])

      useEffect(() => {
        if(criterion) {
            setCriterion(false);
            return;
        }
        localStorage.setItem('favArticles', JSON.stringify(favorites))
      },[favorites])

    const addToFavorite = (id) => {
        setFavorites(favorites.concat(id));
    }

    const deleteFromFavorites = (id) => {
        setFavorites(favorites.filter(key => key !== id));
    }
  return (
    <div className='flex justify-center items-start w-full min-h-screen text-right articles-content'>
        <div className='flex flex-col p-2 2xl:w-[85%] sm:w-11/12 justify-center items-start'>
        <div className='flex w-full flex-row justify-evenly mb-5 border-2 bg-gray_99 p-1 border-white-e9 text-gray-88 mt-10'>
            <span className='font-[shabnamMedium] text-gray-500'>آخرین مطالب نهال آی تی</span>
            <span className='text-gray-500 font-[shabnamMedium]'>Latest Posts Blog</span>
        </div>
        <div className='container mx-auto'>
            <div className='flex sm:flex-wrap flex-col sm:flex-row justify-center gap-3 sm:gap-3 items-center'>
                {
                    currentItems?.map((article , index) => (
                        <div className='w-[17rem] sm:w-[45%] overflow-hidden rounded-sm justify-between h-[420px] md:w-[30%] lg:w-[23%] 2xl:w-[15%] flex flex-col mb-10' key={index} style={{boxShadow:'0px 0px 10px -6px #000'}}>
                            <img onClick={() => navigate(`/articles/article/${article.id}/${article.title}`)} src={article.image} alt={article.title} className='hover:brightness-125 max-h-[200px] cursor-pointer transition-all' style={{borderBottom:'1px solid #d7d7d7'}}/>
                            <Link to={`/articles/article/${article.id}/${article?.title}`} className='py-3 px-2 text-gray-66 font-[shabnamBold] hover:text-gray-88 line-clamp-2 text-base  transition-all'>{article.title}</Link>
                            <div className='text-gray-500 px-2 text-stone-500 font-[shabnamLight] text-xs line-clamp-3 text-justify xl-line-clamp-2  leading-loose'>
                                <HTMLRenderer html={article.body}/>
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex flex-row text-gray-88 justify-between py-2 px-2  whitespace-normal' style={{borderTop:'1px solid #d7d7d7'}}>
                                    <div className='flex flex-row items-center text-sm gap-2'>
                                        <AiFillFolder/>
                                        <Link to='/news' className='cursor-pointer hover:text-gray-white text-xs'>اخبار سایت</Link>
                                    </div>
                                    <div className='flex flex-row items-center text-sm gap-2'>
                                        <ImEye/>
                                        <span>0</span>
                                    </div>
                                    <div className='flex items-center gap-5 font-[shabnamMedium] px-1'>
                                    <AiOutlineHeart className={ favorites.includes(article.id) ? 'hidden' : 'block scale-[1.1]' } onClick={()=>{
                                    addToFavorite(article.id)
                                    }}/>
                                    <AiFillHeart className={ favorites.includes(article.id) ? 'block text-red-600 scale-[1.1] hover:text-red-500 transition-all' : 'hidden' } onClick={()=>{
                                    deleteFromFavorites(article.id)
                                    }}/>
                                </div>
                                </div>
                                <button className='flex gap-1 cursor-pointer flex-row w-full text-white  bg-green-bt py-2 px-2 justify-center items-center hover:bg-sky-blue transition-all'>
                                    <TfiMenuAlt className=''/>
                                    <Link to={`/articles/article/${article.id}/${article?.title}`} className='text-[0.8rem] font-[shabnamBold]'>توضیحات بیشتر</Link>
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        </div>
    </div>
  )
}

export default Blogs