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
    return reduxArticles.map((a, index) => (
      <div className="article">
        <div
          key={index}
          className="article__text-box"
          // onClick={() => window.open(a.url)}
        >
          <div className="heading-primary heading-primary--main">{a.title}</div>
          <div className="paragraph paragraph--main">{a.teaser}</div>
        </div>
      </div>
    ));
  };
  return (
    <div className="section-article">
      {!reduxArticles ? <p>Loading...</p> : renderArticles()}
    </div>
  );
};

export default ArticleContainer;
