import React , { useEffect , useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setScrollUp } from '../../../../../features/dashboard/dashboardSlice';
import ReactPaginate from 'react-paginate';
import Users from '../Users';
import { getRoles, getUsers } from '../../../../../features/dashboard/action';
import UserDetails from '../UserDetails/UserDetails';

function UsersPagination() {

  const users = useSelector(state => state.dashboard.users);
    const isLoading = useSelector(state => state.dashboard.usersLoading);
    const criterion = useSelector(state => state.userPanel.criterion);
    const [itemOffset, setItemOffset] = useState(0);
    const [showDetails,setShowDetails] = useState('');
    const mobile = window.innerWidth <= 425 ? true : false;
    const itemsPerPage = 20;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = users.toReversed().slice(itemOffset, endOffset);
    const pageCount = Math.ceil(users.length / itemsPerPage);
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getUsers())
    },[criterion]);

    useEffect(() => {
      dispatch(getRoles())
    },[])

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % users.length;
      dispatch(setScrollUp());
      setItemOffset(newOffset);
    };


  return (
    <>
     {
      showDetails !== ""
      ?
      <UserDetails setShowDetails={setShowDetails} showDetails={showDetails}/>
      :
      <>
      {
        isLoading 
        ?
        <div className='h-[10rem] w-[full] flex items-center justify-center'>
           <img src={"/img/Ripple-0.8s-200px.svg"} alt="loading" className='w-[50px]'/>
        </div>
        :
        <>
        <Users currentItems={currentItems} setShowDetails={setShowDetails}/>
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
      }
      </>
     }
    </>
  )
}

export default UsersPagination;