import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../../store/articles/actions";
import { getArticles } from "../../store/articles/selectors";

const ArticleContainer = () => {
  const dispatch = useDispatch();
  const reduxArticles = useSelector(getArticles);
  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  const renderArticles = () => {
    return reduxArticles.map((article) => (
      <div key={article.title}>
        <div>{article.title}</div>
        <div>{article.teaser}</div>
        <a href={article.url}>
          <img src={article.img} alt={article.img} />
        </a>
      </div>
    ));
  };
  return <div> {!reduxArticles ? <p>Loading...</p> : renderArticles()}</div>;
};

export default ArticleContainer;
