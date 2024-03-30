import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import Icons
// import modules
// import styles
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import Components
import { Helmet } from 'react-helmet';
import Blog from '../../Components/Blog/Blog';
import FixedIcon from '../../Components/FixedIcon/FixedIcon';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import ResponseHeader from '../../Components/ResponseHeader/ResponseHeader';
import { getArticles } from '../../features/article/action';

const Article = () => {

  const params = useParams();
  const goalId = JSON.parse(params.id);

  const articles = useSelector(state => state.articles.articles);
  const goalArticle = articles.find(article => article.id === goalId);
  const dispatch = useDispatch();
  const helmetTitle = goalArticle?.title || ""
  useEffect(()=> {
    dispatch(getArticles())
  },[])

  return (
    <main>
        <Helmet>
          <title>مقالات | {helmetTitle}</title>
        </Helmet>
        <header>
            <div className="max-lg:hidden">
              <Header />
            </div>
            <div className="lg:hidden">
              <ResponseHeader />
            </div>
        </header>
        <Blog goalArticle={goalArticle}/>
        <div>
            <FixedIcon/>
        </div>
        <footer>
            <Footer />
        </footer>
    </main>
  )
}

export default Article




 







  