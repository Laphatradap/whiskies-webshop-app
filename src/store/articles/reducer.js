const initialState = [];

export default function articleReducer(state = initialState, action) {
  switch (action.type) {
    case "ARTICLES_FETCHED":
      return action.articles;
    default:
      return state;
  }
}
