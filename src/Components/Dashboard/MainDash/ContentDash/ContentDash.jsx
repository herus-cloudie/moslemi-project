import { React, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Articles from "../../Content/Articles/Articles";
import Categories from "../../Content/Categories/Categories";
import Coupons from "../../Content/Coupons/Coupons";
import Discount from "../../Content/Discount/Discount";
import OrdersPagination from "../../Content/Orders/OrdersPagination/OrdersPagination";
import Products from "../../Content/Products/Products";
import Projects from "../../Content/Projects/Projects";
import Roles from "../../Content/Roles/Roles";
import Tags from "../../Content/Tags/Tags";
import UsersPagination from "../../Content/Users/UsersPagination/UsersPagination";
import News from "../../Content/News/News";
import Links from "../../Content/Links/Links";
import EmployeesPagination from "../../Content/Employees/EmployeesPagination";

import SupervisorsPagination from "../../Content/supervisors/SupervisorsPagination";
import BannerPagination from "../../Content/Banner/allBanner/bannerPagination/BannerPagination";
import WorkSamples from "../../Content/WorkSamples/WorkSamples";

function ContentDash() {
  const [currentContent, setCurrentContent] = useState(null);
  const content = useSelector((state) => state.dashboard.content);
  const bodyRef = useRef();
  const scrollUp = useSelector((state) => state.dashboard.scrollUp);

  useEffect(() => {
    switch (content) {
      case "categories":
        setCurrentContent(<Categories />);
        break;
      case "articles":
        setCurrentContent(<Articles />);
        break;
      case "products":
        setCurrentContent(<Products />);
        break;
      case "orders":
        setCurrentContent(<OrdersPagination />);
        break;
      case "users":
        setCurrentContent(<UsersPagination />);
        break;
      case "supervisors":
        setCurrentContent(<SupervisorsPagination />);
        break;
      case "employee":
        setCurrentContent(<EmployeesPagination />);
        break;
      case "projects":
        setCurrentContent(<Projects />);
        break;
      case "roles":
        setCurrentContent(<Roles />);
        break;
      case "discount":
        setCurrentContent(<Discount />);
        break;
      case "coupon":
        setCurrentContent(<Coupons />);
        break;
      case "tags":
        setCurrentContent(<Tags />);
        break;
      case "news":
        setCurrentContent(<News />);
        break;
        case "banner":
          setCurrentContent(<BannerPagination />);
          break;
      case "links":
        setCurrentContent(<Links />);
        break;
        case "worksample":
          setCurrentContent(<WorkSamples />);
          break;
      default:
        setCurrentContent("این بخش وجود ندارد");
    }
  }, [content]);

  useEffect(() => {
    bodyRef.current.scrollTop = 0;
  }, [scrollUp]);

  return (
    <div
      ref={bodyRef}
      className="bg-[#363d4f] flex flex-col items-center justify-start scroll-dash-content w-full lg:w-[75%] xl:w-[80%] 2xl:w-[85%] h-[90%] max-h-screen overflow-y-scroll relative"
    >
      {currentContent}
    </div>
  );
}

export default ContentDash;
