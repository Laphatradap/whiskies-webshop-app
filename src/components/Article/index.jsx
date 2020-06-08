import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../../store/articles/actions";
import { getArticles } from "../../store/articles/selectors";
import articleImg from "../../assets/whiskey-glass.jpg";

const ArticleContainer = () => {
  const dispatch = useDispatch();
  const reduxArticles = useSelector(getArticles);
  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  const renderArticles = () => {
    return reduxArticles.map((a) => (
      <div
        key={a.title}
        className="article"
        style={{ backgroundImage: `url(${articleImg})` }}
      >
        <a href={a.url}>
          <div className="overlay">
            <div className="article-text">
              <div className="title">{a.title}</div>
              <div className="description">{a.teaser}</div>
            </div>
          </div>
        </a>
      </div>
    ));
  };
  return (
    <div className="article-container">
      {!reduxArticles ? <p>Loading...</p> : renderArticles()}
    </div>
  );
};

export default ArticleContainer;
