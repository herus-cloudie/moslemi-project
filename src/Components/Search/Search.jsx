import React, { useRef, useState , useEffect } from "react";
import { FaStore } from 'react-icons/fa';
import { MdOutlineArticle } from 'react-icons/md';
import { searchBlogs , searchProducts  } from "../../features/search/action";
import { useDispatch , useSelector } from "react-redux";
import SearchResultItem from "./SearchResultItem/SearchResultItem";

const Search = () => {
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
    <div className="w-[100%] relative flex items-center justify-center my-10">
        <form className="flex md:w-[60%] 2xl:w-[50%] w-[90%] flex-row border-2 border-solid border-[#07B235] py-1 px-2 rounded-full" onSubmit={(e)=>e.preventDefault()}>
          <input
            type="search"
            ref={searchRef}
            onKeyDown={(e)=>{
              if(e.key === 'Enter')
              {
                setSuggest(true);

              }
            }}
            onChange={(e)=>{
              if(e.target.value === '')
              {
                setSuggest(false)
              }
              setShowResult('empty')
              setShowMore(false)
            }}
            placeholder="دنبال چی میگردی؟"
            className="w-full py-1 px-5 text outline-0 placeholder:text-black placeholder:text-xs placeholder:font-[shabnambold] md:placeholder:text-md focus:placeholder:text-white transition-all  duration-500"
          />
          <button
            type="button"
            className="flex items-center justify-center whitespace-nowrap px-3 py-1 text-sm  md:text-md md:px-8 bg-[#07B235] hover:bg-[#2ac954] transition-all duration-300 rounded-full text-white"
            onClick={(e)=>{
              if(searchRef.current.value !== '' ) {
                setSuggest(true)
                setShowResult('empty')
                setShowMore(false)
              }
            }}
          >
            جستجو
          </button>
        </form>
        <div className='w-[500px] absolute mx-auto top-10 flex-col bg-white mt-5 px-1 py-3 gap-3 transition-allS' style={{boxShadow:'0px 0px 5px 1px #686868',display:suggest && showResult === 'empty' ? "flex" : "none" ,transition:'all 0.3s'}}>
            <div className='w-full cursor-default flex gap-1 items-center p-1 hover:text-white hover:bg-[#c2c2c2] text-[#127218]' onClick={()=>searchInProducts()}>
                  <span className='text-sm font-[shabnammedium]'>جستجو در محصولات</span>
                  <FaStore className='text-xl'/>
              </div>
              <div className='w-full cursor-default flex gap-1 p-1 hover:text-white hover:bg-[#c2c2c2] items-center text-[#127218]' onClick={()=>searchInBlogs()}>
                  <span className='text-sm font-[shabnammedium]'>جستجو در مقالات</span>
                  <MdOutlineArticle className='text-xl'/>
            </div>
        </div>
        <div className='w-[500px] absolute mx-auto top-10 flex-col bg-white mt-5 px-3 pb-3 gap-3 scroll_zero transition-all max-h-[30rem] overflow-y-scroll' style={{boxShadow:'0px 0px 5px 1px #686868',display:showResult !== 'empty' ? "flex" : "none",transition:'all 0.3s'}}>
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
                <div className="w-full flex flex-col">
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
                      <SearchResultItem showResult={showResult} data={blog} deviceSize={"large"} type={"blog"}/>
                    ))
                    :
                    <>
                    {
                    receiptBlogsData.slice(0,5).map(blog => (
                      <SearchResultItem showResult={showResult} data={blog} deviceSize={"large"} type={"blog"}/>
                    ))
                    }
                    <button className="w-full bg-slate-500 transition-all hover:bg-slate-400 rounded-sm text-white py-1 text-sm">نمایش همه نتایج</button>
                  </>
                    :
                    receiptBlogsData.map(blog => (
                      <SearchResultItem showResult={showResult} data={blog} deviceSize={"large"} type={"blog"}/>
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
                      <SearchResultItem showResult={showResult} data={product} deviceSize={"large"} type={"product"}/>
                    ))          
                  :
                    <>
                        {
                        receiptProductsData.slice(0,5).map(product => (
                          <SearchResultItem showResult={showResult} data={product} deviceSize={"large"} type={"product"}/>
                        ))
                        }
                        <button className="w-full bg-slate-500 transition-all hover:bg-slate-400 rounded-sm text-white py-1 text-sm" onClick={()=>setShowMore(true)}>نمایش همه نتایج</button>
                    </>
                  :
                    receiptProductsData.map(product => (
                      <SearchResultItem showResult={showResult} data={product} deviceSize={"large"} type={"product"}/>
                    ))
                  :
                  <span className="w-full text-center font-[shabnammedium]">محصولی پیدا نشد!</span>

                }
                </div>
              }
            </div>
        </div>
    </div>
  );
};

export default Search;
