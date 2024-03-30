import { React, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ArticlesPagination from "./AllArticles/ArticlesPagination/ArticlesPagination";
import EditArticle from "./EditArticle/EditArticle";
import NewArticle from "./NewArticle/NewArticle";

function Articles() {
  const [innerComponent, setInnerComponent] = useState(<></>);
  const Criterion = useSelector((state) => state.dashboard.articlesSwitch);
  useEffect(() => {
    switch (Criterion) {
      case "all":
        setInnerComponent(<ArticlesPagination />);
        break;
      case "new":
        setInnerComponent(<NewArticle />);
        break;
      case "edit":
        setInnerComponent(<EditArticle />);
        break;
      default:
        setInnerComponent(<></>);
    }
  }, [Criterion]);

  return (
    <div className="w-full p-3 md:p-10 flex flex-col items-center">
      {innerComponent}
    </div>
  );
}

export default Articles;
