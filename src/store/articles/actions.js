import axios from "axios";

export const articlesFetched = (articles) => {
  return {
    type: "ARTICLES_FETCHED",
    articles,
  };
};

export const fetchArticles = () => async (dispatch) => {
  try {
    const response = await axios.get("../../data/articles.json");
    dispatch(articlesFetched(response.data));
  } catch (error) {
    console.log(error);
  }
};
