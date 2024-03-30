import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import {getWorkSample, getWorkSampleCategories, getworkSampleGalleries } from '../../../../../features/dashboard/action';
import { setScrollUp } from '../../../../../features/dashboard/dashboardSlice';
import EditWorkSamples from '../Edit/EditWorkSamples';
import AllWorkSamples from './AllWorkSamples';

function WorkSamplePagination() {

    const [showDetails,setShowDetails] = useState({status:false,value:''});
    const [itemOffset, setItemOffset] = useState(0);
    const isLoading = useSelector(state => state.dashboard.projectsLoading);
    const workSamples = useSelector(state => state.dashboard.workSample);
    const workSampleCategories = useSelector(state => state.dashboard.workSampleCategories);
    const dispatch = useDispatch();
    const mobile = window.innerWidth <= 425 ? true : false;
    const itemsPerPage = 20;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = workSamples.toReversed().slice(itemOffset, endOffset);
    const pageCount = Math.ceil(workSamples.length / itemsPerPage);
    const workSampleGalleries = useSelector(state => state.dashboard.workSampleGalleries)
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % workSamples.length;
        dispatch(setScrollUp());
        setItemOffset(newOffset)
      };     
    useEffect(()=> {
        dispatch(getWorkSample())
        dispatch(getWorkSampleCategories())
        dispatch(getworkSampleGalleries())
    },[showDetails.status])
    
  return (
    <>
    {
        isLoading
        ?
        <div className='h-[4rem] w-full lg:w-[27%] flex items-center justify-center'>
          <img src={"/img/Ripple-0.8s-200px.svg"} alt="loading" className='w-[30%]'/>
        </div>
        :
        <>
        {
            !showDetails.status
            ?
            <>
            <AllWorkSamples currentItems={currentItems} setShowDetails={setShowDetails} workSamples={workSamples} categories={workSampleCategories}/>
            <ReactPaginate
            breakLabel="..."
            nextLabel={mobile ? '>>' : "برگه بعدی >>"}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel={mobile ? '<<' : "<< برگه قبلی"}
            renderOnZeroPageCount={null}
            className='pagination'
            activeClassName='active'
            previousClassName='preBtn'
            nextClassName='nextBtn'
            />
            </>
            :
            <EditWorkSamples details={showDetails.value} setShowDetails={setShowDetails} categories={workSampleCategories} workSampleGalleries ={workSampleGalleries}/>
        }
        </>
    }
    </>
  )
}

export default WorkSamplePagination;