import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import AboutSite from "../../Components/AboutSite/AboutSite";
import CustomSlider from "../../Components/CustomSlider/CustomSlider";
import Details from "../../Components/Details/Details";
import FixedIcon from "../../Components/FixedIcon/FixedIcon";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import LotteryHomePage from "../../Components/LotteryHomePage/LotteryHomePage";
import NewsHomePage from "../../Components/NewsHomePage/NewsHomePage";
import OurPlans from "../../Components/OurPlans/OurPlans";
import ResponseHeader from "../../Components/ResponseHeader/ResponseHeader";
import Search from "../../Components/Search/Search";
import ServicesHomePage from "../../Components/ServicesHomePage/ServicesHomePage";
import SliderSwiper from "../../Components/SliderSwiper/SliderSwiper";
import { getBlogs, getCategories, getUsers } from "../../features/dashboard/action";
import { getProducts, getTags } from "../../features/products/action";


const Home = () => {
  const products = useSelector(state => state.products.products);
  const productLoading = useSelector(state => state.products.isLoading);
  const discounts = useSelector(state => state.products.discounts);
  const tags = useSelector(state => state.products.tags);
  const users = useSelector(state => state.dashboard.users);
  const blogs = useSelector(state => state.dashboard.blogs);
  const blogLoading = useSelector(state => state.dashboard.blogsLoading);
  let latestProducts = products.slice(0,10).reverse();
  let latestBlogs = blogs.slice().reverse().slice(0,9);
  let moreProducts = products.slice(0,10)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProducts())
    dispatch(getBlogs())
    dispatch(getUsers())
    dispatch(getCategories())
    dispatch(getTags())
  },[])

  return (
    <div className="w-[100vw]">
      <Helmet>
        <title>نهال آی تی | صفحه اصلی</title>
      </Helmet>
      <header>
        <div className="max-lg:hidden">
        <Header />
        </div>
        <div className="lg:hidden">
          <ResponseHeader/>
        </div>
      </header>
      <main className="container mx-auto">
        <section className="w-full">
          <SliderSwiper />
        </section>
        <section className="mt-5 max-lg:hidden">
          <Search />
        </section>
        <section className="mt-14">
          <LotteryHomePage />
        </section>
        <section className="mt-14">
          <ServicesHomePage />
        </section>
        <section className="mt-[8rem]">
          <CustomSlider title={"جدیدترین محصولات"} translate={"Latest Products"} items={latestProducts} discounts={discounts} tags={tags} isLoading={productLoading}/>
        </section>
        <section className="my-[8rem] flex justify-center items-center">
          <AboutSite />
        </section>
        <section className="my-32">
          <OurPlans />
        </section>
        <section className="mt-14">
          <CustomSlider title={"سایر محصولات"} translate={"More Products"} items={moreProducts} discounts={discounts} tags={tags} isLoading={productLoading}/>
        </section>
        <section className="mt-24">
          <NewsHomePage />
        </section>
        <section className="mt-14">
          <Details blogs={latestBlogs} users={users} isLoading={blogLoading}/>
        </section>
        <div>
          <FixedIcon/>
        </div>
      </main>
      <footer className="mt-5 w-full">
          <Footer />
      </footer>
    </div>
  );
};

export default Home;
