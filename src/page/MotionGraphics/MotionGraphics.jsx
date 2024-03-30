import React, { useEffect, useState } from "react";
import FixedIcon from "../../Components/FixedIcon/FixedIcon";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ResponseHeader from "../../Components/ResponseHeader/ResponseHeader";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  getWorkSample,
  getWorkSampleCategories,
  getWorkSampleDetail,
  getworkSampleGalleries,
  getworkSampleGalleriesDetail,
} from "../../features/dashboard/action";

const MotionGraphics = () => {
  const workSampleGalleries = useSelector(
    (state) => state.dashboard.workSampleGalleries
  );
  const workSampleCategories = useSelector(
    (state) => state.dashboard.workSampleCategories
  );
  const workSamples = useSelector((state) => state.dashboard.workSample);

  const dispatch = useDispatch();
  const workSample = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    dispatch(getworkSampleGalleries());
    dispatch(getWorkSample());
    dispatch(getWorkSampleCategories());
    setLoading(false);
  }, []);

  return (
    <main>
      <Helmet>
        <title>{`نهال آی تی | ${workSample.name}`}</title>
      </Helmet>
      <header>
        <div className="max-lg:hidden">
          <Header />
          ''
        </div>
        <div className="lg:hidden">
          <ResponseHeader />
        </div>
      </header>
      {loading ? (
        "درحال لود کردن"
      ) : (
        <div className="bg-[#f5f5f9] w-full">
          <div className="z-0 container mx-auto">
            <div className="max-lg:px-20 w-full max-md:px-16 max-sm:px-0 mx-auto pt-14 mt-1 pb-24">
              <h2 className="font-[shabnamBold] text-2xl sm:text-4xl text-center text-green-137 px-0 pb-10 sm:px-12">
                {workSample.name}
              </h2>
              <div className="flex flex-wrap gap-x-5 gap-y-12 max-sm:gap-y-4 ">
                <div className="pt-9 mb-12 w-full">
                  <div className="container mx-auto flex flex-wrap"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div>
        <FixedIcon />
      </div>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default MotionGraphics;
