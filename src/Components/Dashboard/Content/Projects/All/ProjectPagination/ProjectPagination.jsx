import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getProjects, getUsers } from '../../../../../../features/dashboard/action';
import { setScrollUp } from '../../../../../../features/dashboard/dashboardSlice';
import Edit from '../../Edit/Edit';
import All from '../All';

function ProjectPagination() {

    const [showDetails,setShowDetails] = useState({status:false,value:''});
    const [itemOffset, setItemOffset] = useState(0);
    const isLoading = useSelector(state => state.dashboard.projectsLoading);
    const users = useSelector(state => state.dashboard.users);
    const categories = useSelector(state => state.dashboard.categories);
    const projects = useSelector(state => state.dashboard.projects) || [];

    console.log(projects)
    const dispatch = useDispatch();
    const mobile = window.innerWidth <= 425 ? true : false;
    const itemsPerPage = 20;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = projects.toReversed().slice(itemOffset, endOffset);
    const pageCount = Math.ceil(projects.length / itemsPerPage);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % projects.length;
        dispatch(setScrollUp());
        setItemOffset(newOffset)
      };     
    useEffect(()=> {
        dispatch(getProjects())
        dispatch(getUsers())
        dispatch(getCategories())
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
            <All currentItems={currentItems} setShowDetails={setShowDetails} users={users} categories={categories}/>
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
            <Edit details={showDetails.value} setShowDetails={setShowDetails} users={users} categories={categories}/>
        }
        </>
    }
    </>
  )
}

export default ProjectPagination;