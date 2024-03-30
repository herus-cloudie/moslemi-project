import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getEmployee, getRoleById } from "../../../../features/dashboard/action";
import EmployeeDetails from "./EmployeeDetail";
import Employee from "./Employee";
import { useState } from "react";
import ReactPaginate from "react-paginate";

export default function EmployeesPagination(){
    const employees = useSelector(state => state.dashboard.employee);
    const isLoading = useSelector(state => state.dashboard.usersLoading);
    const criterion = useSelector(state => state.userPanel.criterion);
    const [itemOffset, setItemOffset] = useState(0);
    const [showDetails,setShowDetails] = useState('');
    const mobile = window.innerWidth <= 425 ? true : false;
    const itemsPerPage = 20;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = employees.toReversed().slice(itemOffset, endOffset);
    const pageCount = Math.ceil(employees.length / itemsPerPage);
  const [innerComponent,setInnerComponent] = useState(<></>);
    const Criterion = useSelector(state=> state.dashboard.employeesSwitch);
 
    const [items, setItems] = useState([]);
    useEffect(()=>{
        switch(Criterion)
        {
            case 'unapproval' :  setItems(employees.filter(item => item.status === 'waiting')) ;
            break;
            case 'approval' :    setItems(employees.filter(item => item.status === 'accepted'));
            ;
            break;
            default : setInnerComponent(<></>)
        }
    },[Criterion , employees])
    useEffect(()=>{
      // console.log(Criterion);
      switch(Criterion)
      {
          case 'unapproval' :  setItems(employees.filter(item => item.status === 'waiting')) ;
          break;
          case 'approval' :    setItems(employees.filter(item => item.status === 'accepted'));
          ;
          break;
          default : setInnerComponent(<></>)
      }
  },[])
// console.log(items);
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getEmployee())
    },[criterion]);

    useEffect(() => {
      dispatch(getEmployee())

    },[])
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % employees.length;
        dispatch(setScrollUp());
        setItemOffset(newOffset);
      };
      return (
        <>
         {
          showDetails !== ""
          ?
          <EmployeeDetails setShowDetails={setShowDetails} showDetails={showDetails}/>
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
            <Employee currentItems={items} setShowDetails={setShowDetails}/>
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