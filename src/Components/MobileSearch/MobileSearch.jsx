import React, { useRef, useState , useEffect } from 'react';
import { FaStore } from 'react-icons/fa';
import { MdOutlineArticle, MdOutlineClose } from 'react-icons/md';
import { useSelector , useDispatch } from 'react-redux';
import { searchBlogs , searchProducts } from '../../features/search/action';
import SearchResultItem from "../Search/SearchResultItem/SearchResultItem";

function MobileSearch({ dropSearchBox , setDropSearchBox }) { 
    const [suggest,setSuggest] = useState(false);
    const [showResult,setShowResult] = useState('empty');
    const [showMore,setShowMore] = useState(false);
    const receiptBlogsData = useSelector(state => state.search.blogsResult);
    const receiptProductsData = useSelector(state => state.search.productsResult);
    const isLoading = useSelector(state => state.search.loading);
    const isError = useSelector(state => state.search.isError);
    const errorBlogsMessage = useSelector(state => state.search.errorBlogsMessage);
    const errorProductsMessage  = useSelector(state => state.search.errorProductsMessage);
    const searchRef = useRef();
    const dispatch = useDispatch();

    const searchInBlogs = () => {
        dispatch(searchBlogs(searchRef.current.value))
        setShowResult('blogs');
      }
    
      const searchInProducts = () => {
        dispatch(searchProducts(searchRef.current.value))
        setShowResult('products');
      }

  return (
    <div className={dropSearchBox ? "w-[100vw] flex overflow-y-scroll pb-5 scroll_zero items-center flex-col justify-start md:w-[50vw] z-[101] h-[100dvh] bg-[#59ce90f8] fixed top-0 right-0 transition-all duration-700" : "w-[100vw] flex items-center flex-col justify-start md:w-[50vw] z-[101] h-[100dvh] bg-[#59ce90f8] fixed top-0 right-[-50rem] sm:right-[-60rem] md:right-[-70rem] transition-all duration-700"}>
        <div className='w-full flex justify-end text-4xl p-3' style={{borderBottom:'1px solid white'}}>
            <MdOutlineClose className='text-white' onClick={()=>{
                setDropSearchBox(false)
                setSuggest(false)
                setShowResult('empty')
                searchRef.current.value = ""
            }}/>
        </div>
        <div className='bg-white mt-5 rounded-sm w-[80%] h-fit flex justify-start items-center'>
            <input onChange={(e)=>{
                setShowResult('empty')
                setShowMore(false)
                if(e.target.value === '') {
                    setSuggest(false)
                }
                else {
                    setSuggest(true)
                }
            }} type="search" ref={searchRef} className='p-2 font-[shabnambold] outline-none placeholder:text-sm border-0 w-full' name="" id="" placeholder='دنبال چی میگردی؟'/>
        </div>
        <div className='w-[80%] flex-col bg-white mt-5 px-1 py-3 gap-3 transition-all' style={{boxShadow:'0px 0px 5px 1px #686868',display:suggest && showResult === 'empty' ? "flex" : "none" ,transition:'all 0.3s'}}>
            <div className='w-full flex gap-1 items-center p-1 hover:text-white hover:bg-[#c2c2c2] text-[#686868]' onClick={()=>searchInProducts()}>
                <span className='text-sm font-[shabnammedium]'>جستجو در محصولات</span>
                <FaStore className='text-xl'/>
            </div>
            <div className='w-full flex gap-1 p-1 hover:text-white hover:bg-[#c2c2c2] items-center text-[#686868]' onClick={()=>searchInBlogs()}>
                <span className='text-sm font-[shabnammedium]'>جستجو در مقالات</span>
                <MdOutlineArticle className='text-xl'/>
            </div>
        </div>
        <div className='w-[80%] max-h-[25rem] scroll_zero overflow-y-scroll flex-col bg-white mt-5 px-1 py-3 gap-3 transition-all' style={{boxShadow:'0px 0px 5px 1px #686868',display:showResult !== 'empty' ? "flex" : "none",transition:'all 0.3s'}}>
            <div className="w-full flex justify-center">
              {
                isLoading
                ?
                <img src={"/img/Ripple-0.8s-200px.svg"} alt="loading" className="w-[5rem]"/>
                :
                isError
                ?
                 showResult === 'blogs'
                 ?
                 <span className="w-full text-center font-[shabnammedium]">{errorBlogsMessage}</span>
                 :
                 showResult === 'products'
                 ?
                  <span className="w-full text-center font-[shabnammedium]">{errorProductsMessage}</span>
                 :
                 <>error</>
                :
                <div className="w-full flex flex-col gap-y-3">
                {
                  showResult === 'blogs'
                  ?
                   receiptBlogsData.length !== 0
                   ?
                   receiptBlogsData.length > 5
                   ?
                   showMore
                   ?
                   receiptBlogsData.map(blog => (
                     <SearchResultItem showResult={showResult} data={blog} deviceSize={"small"} type={"blog"}/>
                   ))
                   :
                   <>
                   {
                    receiptBlogsData.slice(0,5).map(blog => (
                      <SearchResultItem showResult={showResult} data={blog} deviceSize={"small"} type={"blog"}/>
                    ))
                   }
                   <button className="w-full bg-slate-500 transition-all hover:bg-slate-400 rounded-sm text-white py-1 text-sm" onClick={()=>setShowMore(true)}>نمایش همه نتایج</button>
                  </>
                   :
                   receiptBlogsData.map(blog => (
                     <SearchResultItem showResult={showResult} data={blog} deviceSize={"small"} type={"blog"}/>
                   ))
                   :
                   <span className="w-full text-center font-[shabnammedium]">مقاله ای یافت نشد!</span>
                  :
                  receiptProductsData.length !== 0
                  ?
                  receiptProductsData.length > 5
                  ?
                  showMore
                  ?
                    receiptProductsData.map(product => (
                      <SearchResultItem showResult={showResult} data={product} deviceSize={"small"} type={"product"}/>
                    ))          
                  :
                    <>
                        {
                        receiptProductsData.slice(0,5).map(product => (
                          <SearchResultItem showResult={showResult} data={product} deviceSize={"small"} type={"product"}/>
                        ))
                        }
                        <button className="w-full bg-slate-500 transition-all hover:bg-slate-400 rounded-sm text-white py-1 text-sm" onClick={()=>setShowMore(true)}>نمایش همه نتایج</button>
                    </>
                  :
                    receiptProductsData.map(product => (
                      <SearchResultItem showResult={showResult} data={product} deviceSize={"small"} type={"product"}/>
                    ))
                  :
                  <span className="w-full text-center font-[shabnammedium]">محصولی پیدا نشد!</span>

                }
                </div>
              }
            </div>
        </div>
    </div>
  )
}

export default MobileSearch;