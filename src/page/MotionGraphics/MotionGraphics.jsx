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
import HTMLRenderer from "react-html-renderer";

const MotionGraphics = () => {

  const workSampleGalleries = useSelector((state) => state.dashboard.workSampleGalleries);
  const workSamples = useSelector(state => state.dashboard.workSample);

  const dispatch = useDispatch();
  const params = useParams();
  const [loading, setLoading] = useState(true);
  let specificsWorkSample = workSamples.filter(item => item.work_sample_category_id == params.id)

  const idsToFilter = specificsWorkSample.map(item => item.id);

  const filteredArray = workSampleGalleries.filter(item => idsToFilter.includes(item.work_sample_id));

  useEffect(() => {
    dispatch(getworkSampleGalleries());
    dispatch(getWorkSample());
    dispatch(getWorkSampleCategories());
    setLoading(false);
  }, []);

  return (
    <main>
      <Helmet>
        <title>{`نهال آی تی | ${params.name}`}</title>
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
              <h2 className="font-[shabnamBold] text-2xl sm:text-4xl text-center text-green-137 px-0 pb-10 sm:px-12 flex items-center flex-col">
               
                  <div className="flex justify-around flex-col lg:flex-row ">
                    
                 {
                  specificsWorkSample?.map(item => {
                    let Image = filteredArray.find(filter => filter.work_sample_id == item.id)
                    return (
                      <div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md m-5">
                        <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-green-500 bg-[#57C053]">
                        <img src={Image?.image}/>
                        </div>
                        <div class="p-6">
                          <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                          <span class="text-green-137 font-bold text-2xl font-[shabnamMedium]">{item.title}</span>
                          </h5>
                          <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                          <p class="text-neutral-800 font-[shabnamMedium]"><HTMLRenderer html={item.description}/></p>
                          </p>
                        </div>
                        {/* <div class="p-6 pt-0">
                          <button data-ripple-light="true" type="button" class="select-none font-[shabnamMedium] rounded-lg bg-[#57C053] py-3 px-6 text-center align-middle  text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                            جزییات
                          </button>
                        </div> */}
                      </div>
                    )
                  })
                  }
                  </div>
                
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
