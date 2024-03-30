import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { getSupervisors } from "../../../../features/dashboard/action";

import SupervisorDetails from "./SupervisorDetails";
import Supervisors from "./Supervisors";
import ReactPaginate from "react-paginate";

const SupervisorsPagination = () => {
  const [showDetails, setShowDetails] = React.useState("");
  const [itemOffset, setItemOffset] = React.useState(0);

  const supervisors = useSelector((state) => state.dashboard.supervisors);
  const isLoading = useSelector((state) => state.dashboard.supervisorsLoading);
  const dispatch = useDispatch();

  const mobile = window.innerWidth <= 425 ? true : false;
  const itemsPerPage = 20;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = supervisors.toReversed().slice(itemOffset, endOffset);
  const pageCount = Math.ceil(supervisors.length / itemsPerPage);

  React.useEffect(() => {
    dispatch(getSupervisors());
  }, []);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % supervisors.length;

    setItemOffset(newOffset);
    dispatch(setScrollUp());
  };

  return (
    <>
      {showDetails ? (
        <SupervisorDetails
          showDetails={showDetails}
          setShowDetails={setShowDetails}
        />
      ) : (
        <>
          {isLoading ? (
            <div className="h-[10rem] w-[full] flex items-center justify-center">
              <img
                src={"/img/Ripple-0.8s-200px.svg"}
                alt="loading"
                className="w-[50px]"
              />
            </div>
          ) : (
            <div className="w-full">
              <Supervisors
                supervisors={supervisors}
                currentItems={currentItems}
                setShowDetails={setShowDetails}
              />
              <ReactPaginate
                breakLabel="..."
                nextLabel={mobile ? ">>" : "برگه بعدی >>"}
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel={mobile ? "<<" : "<< برگه قبلی"}
                renderOnZeroPageCount={null}
                className="pagination"
                activeClassName="active"
                previousClassName="preBtn"
                nextClassName="nextBtn"
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default SupervisorsPagination;
