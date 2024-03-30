import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getWorkSample,
  getWorkSampleDetail,
  getworkSampleGalleriesDetail,
} from "../../features/dashboard/action";
import Header from "../../Components/Header/Header";
import ResponseHeader from "../../Components/ResponseHeader/ResponseHeader";
import FixedIcon from "../../Components/FixedIcon/FixedIcon";
import Footer from "../../Components/Footer/Footer";
import moment from "moment-jalaali";

export default function WorkSampleGallery() {
  const params = useParams();
  const workSampleGalleries = useSelector(
    (state) => state.dashboard.workSampleGalleriesDetail
  );
  const workSampledetail = useSelector(
    (state) => state.dashboard.workSampleDetail
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getworkSampleGalleriesDetail(params.id));
    dispatch(getWorkSampleDetail(params.id));
    // console.log(workSampleGalleries);
    // console.log(workSampledetail);
  }, []);
  return (
    <>
      <header>
        <div className="max-lg:hidden">
          <Header />
        </div>
        <div className="lg:hidden">
          <ResponseHeader />
        </div>
      </header>
      <h4 className="font-[shabnamBold] text-2xl sm:text-4xl text-center text-green-137 px-0 pb-10 sm:px-12 m-4">
        {workSampledetail.title}
      </h4>
      {workSampleGalleries.length > 0 ? (
        <>
          <div className="flex flex-wrap items-start">
            {workSampleGalleries.map((item) => (
              <div
                key={item.id}
                className="bg-gray-300 w-[30%] m-2 p-4 rounded-md"
              >
                <img width={"100%"} src={item.image} className="m-2" />
                <div className="bg-white text-xs rounded w-[30%] p-1">
                  تاریخ ایجاد :{moment(item.created_at).format("jYYYY/jMM/jDD")}
                </div>
              </div>
            ))}
          </div>
          <div className="m-3">
            <span className="text-green-500"> توضیحات: </span>{" "}
            <span>{workSampledetail.description} </span>
          </div>
        </>
      ) : (
        <h6 className="font-[shabnamBold] text-2xl sm:text-4xl text-center text-green-137 px-0 pb-10 sm:px-12">
          {" "}
          نمونه کاری وجود ندارد{" "}
        </h6>
      )}

      <div>
        <FixedIcon />
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
