import React from "react";
import { Route, Routes } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./App.css";
import ApiLoading from "./Components/ApiLoading/ApiLoading";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import Application from "./page/Application/Application";
import Article from "./page/Article/Article";
import ArticlesPagination from "./page/Articles/ArticlesPagination/ArticlesPagination";
import Login from "./page/Authentication/Login/Login";
import Register from "./page/Authentication/Register/Register";
import Brochure from "./page/Brochure/Brochure";
import BusinessCard from "./page/Business_Card/BusinessCard";
import Cart from "./page/Cart/Cart";
import Catalog from "./page/Catalog/Catalog";
import ContactUs from "./page/ContactUs/ContactUs";
import Dashboard from "./page/Dashboard/Dashboard.jsx";
import EcoSaleWeb from "./page/EcoSaleWeb/EcoSaleWeb";
import Error from "./page/Error/Error";
import Favorites from "./page/Favorites/Favorites";
import Home from "./page/Home/Home";
import LoginLearn from "./page/LoginLearn/LoginLearn";
import Logo from "./page/Logo/Logo";
import MotionGraphics from "./page/MotionGraphics/MotionGraphics";
import News from "./page/News/News";
import Order from "./page/Order/Order";
import Poster from "./page/Poster/Poster";
import Premiere from "./page/Premiere/Premiere";
import Product from "./Components/Product/Product";
import Products from "./page/Products/Products";
import Recruitment from "./page/Recruitment/Recruitment";
import SApplication from "./page/SApplication/SApplication";
import Seo from "./page/Seo/Seo";
import SGraphic from "./page/SGraphic/SGraphic";
import SMotionGraphic from "./page/SMotionGraphic/SMotionGraphic";
import SPremier from "./page/SPremier/SPremier";
import SProposal from "./page/SProposal/SProposal";
import SSaleWeb from "./page/SSaleWeb/SSaleWeb";
import SSaleWebExclusive from "./page/SSaleWebExclusive/SSaleWebExclusive";
import SSeo from "./page/SSeo/SSeo";
import SSocialMedia from "./page/SSocialMedia/SSocialMedia";
import SSoundEditing from "./page/SSoundEditing/SSoundEditing";
import SWorkService from "./page/SWorkService/SWorkService";
import UI_UX from "./page/UI_UX/UI_UX";
import EditUserProfile from "./page/UserPanel/EditUserProfile";
import UserPage from "./page/UserPanel/UserPage";
import UserProfile from "./page/UserPanel/UserProfile";
import Voicing from "./page/Voicing/Voicing";
import WebsiteDesignPortfolio from "./page/WebsiteDesignPortfolio/WebsiteDesignPortfolio";
import About_us from "./page/About_us/About_us";
import BeSeller from "./page/BeSeller/BeSeller";
import CreateContent from "./page/CreateContent/CreateContent";
import SocialMediaBot from "./page/SocialMediaBot/SocialMediaBot";
import { ToastContainer } from "react-toastify";
import ConfirmNumberAlert from "./Components/ConfirmNumberAlert/ConfirmNumberAlert";
import ConfirmNumberPage from "./page/Authentication/ConfirmNumberPage/ConfirmNumberPage";
import ForgetPassword from "./page/Authentication/ForgetPassword/ForgetPassword";
import Privacy from "./page/Privacy/Privacy";
import Orders from "./page/UserPanel/Orders";
import PlansPage from "./page/PlansPage/PlansPage";
import NewsPage from "./page/NewsPage/NewsPage";
import OneTimeCode from "./page/Authentication/Login/oneTimeCode/oneTimeCode.jsx";
import UserProjects from "./page/UserPanel/UserProjects.jsx";
import ProjectPagination from "./Components/Dashboard/Content/Projects/All/ProjectPagination/ProjectPagination.jsx";
import SupervisorProjectPagination from "./page/UserPanel/supervisorProject/SupervisorProjectPagination.jsx";
import NewWorkSampleCategory from "./Components/Dashboard/Content/WorkSamples/New/NewWorkSampleCategory.jsx";
import WorkSampleGallery from "./page/MotionGraphics/WorkSampleGallery.jsx";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <div className="app w-full">
        {/* toaster */}
        <ToastContainer
          position="top-center"
          theme="colored"
          autoClose={2500}
          className="Toast_info"
        />
        {/* <ConfirmNumberAlert /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/LoginLearn" element={<LoginLearn />} />

          { /* نمونه کارررررررررررررررررررررررررررررررررررررررررررررررررررررررر*/}

          <Route path="/workSamples/:id/:name" element={<MotionGraphics />} />
          
          {/* <Route path="/:id/:name" element={<WorkSampleGallery />} /> */}

          {/* <Route path="workSamples/graphic/UI_UX" element={<UI_UX />} />
          <Route path="workSamples/graphic/Brochure" element={<Brochure />} />
          <Route path="workSamples/graphic/Poster" element={<Poster />} />
          <Route path="workSamples/graphic/Catalog" element={<Catalog />} />
          <Route path="workSamples/graphic/BusinessCard" element={<BusinessCard />} />
          <Route path="workSamples/graphic/Logo" element={<Logo />} />
          <Route path="workSamples/Premiere" element={<Premiere />} />
          <Route path="workSamples/web/WebsiteDesignPortfolio" element={<WebsiteDesignPortfolio />} />
          <Route path="workSamples/Application" element={<Application />} />
          <Route path="workSamples/Seo" element={<Seo />} />
          <Route path="workSamples/Voicing" element={<Voicing />} /> */}

          { /* نمونه کارررررررررررررررررررررررررررررررررررررررررررررررررررررررر*/}
        
          <Route path="/services/اپلیکیشن-موبایل" element={<SApplication />} />
          <Route path="/services/خدمات-تدوین-صدا-و-صدا-گذاری" element={<SSoundEditing />}/>
          <Route path="/services/فروش-سایت-اختصاصی-و-اقتصادی" element={<EcoSaleWeb />}/>
          <Route path="/services/طراحی-سایت-اختصاصی" element={<SSaleWebExclusive />}/>
          <Route path="/services/فروش-قالب-سایت" element={<SSaleWeb />} />
          <Route path="/services/خدمات-سئو-وب-سایت" element={<SSeo />} />
          <Route path="/services/خدمات-کسب-و-کار" element={<SWorkService />} />
          <Route path="/services/خدمات-شبکه-های-اجتماعی" element={<SSocialMedia />}/>
          <Route path="/services/موشن-گرافیک" element={<SMotionGraphic />} />
          <Route path="/services/تدوین-پروپوزال" element={<SProposal />} />
          <Route path="/services/خدمات-پریمیر-و-تدوین-فیلم" element={<SPremier />}/>
          <Route path="/services/خدمات-گرافیک" element={<SGraphic />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/articles" element={<ArticlesPagination />} />
          <Route path="/articles/article/:id/:title" element={<Article />} />
          <Route path="/news/page/:id" element={<NewsPage />} />
          <Route path="/shop/product/:id/:title" element={<Product />} />
          <Route path="/news" element={<News />} />
          <Route path="/*" element={<Error />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/shop" element={<Products />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/onetimecode" element={<OneTimeCode />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />

          <Route path="userPage" element={<UserPage />}>
            <Route path="editProfile" element={<EditUserProfile />} />
            <Route path="cart" element={<Cart />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="userProfile" element={<UserProfile />} />
            <Route path="projects" element={<ProjectPagination />} />
            <Route path="supervisorProjects" element={<SupervisorProjectPagination />}/>
            <Route path="orders" element={<Orders />} />
          </Route>

          <Route path="about_us" element={<About_us />} />
          <Route path="be_seller" element={<BeSeller />} />
          <Route path="create_content" element={<CreateContent />} />
          <Route path="SocialMediaBot" element={<SocialMediaBot />} />
          <Route path="confirmNumber" element={<ConfirmNumberPage />} />
          <Route path="ForgetPassword" element={<ForgetPassword />} />
          <Route path="privacy_and_policy" element={<Privacy />} />
          <Route path="our-business-plans" element={<PlansPage />} />
          <Route path="newWorkSampleCategory" element={<NewWorkSampleCategory />}/>
        </Routes>
      </div>
      <ApiLoading />
    </>
  );
};

export default App;
