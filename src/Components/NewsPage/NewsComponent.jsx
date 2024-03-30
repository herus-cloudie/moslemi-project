import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Active, deActive } from '../../features/loading/loadingSlice';
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';
import { getNewsById } from '../../features/news/action';

function NewsComponent() {
    const params = useParams();
    const Id = JSON.parse(params.id);
    const goalNews = useSelector(state => state.news.goalNews);
    const isLoading = useSelector(state => state.news.loading);
    const dispatch = useDispatch();
   
    useEffect(() => {
        dispatch(getNewsById(Id))
    },[])
    useEffect(() => {
        if(isLoading) {
            dispatch(Active())
        }else {
            dispatch(deActive())
        }
    },[isLoading])
  return (
        <div className='container mx-auto'>
            <div className='flex flex-col items-center md:items-start lg:flex-row mt-5 w-full overflow-x-hidden text-right gap-2 sm:pr-3'>
            <RightSide goalNews={goalNews}/>
            <LeftSide/>
            </div>
        </div>
  )
}

export default NewsComponent;