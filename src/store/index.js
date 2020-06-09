// import { createStore, applyMiddleware, compose } from "redux";
// import ReduxThunk from "redux-thunk";
// import reducer from "./rootReducer";

// // const devTools =
// //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// const devTools =
//   process.env.NODE_ENV === "test"
//     ? (x) => x /* eslint-disable no-underscore-dangle */
//     : window.__REDUX_DEVTOOLS_EXTENSION__ &&
//       window.__REDUX_DEVTOOLS_EXTENSION__();
// /* eslint-enable no-underscore-dangle */

// // const devTools = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : null

// const enhancer = compose(applyMiddleware(ReduxThunk), devTools);

// const store = createStore(reducer, enhancer);

// export default store;


import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const initialState = {};
const middleware = [thunk];


const composeEnhancers =
  typeof window === 'object' &&
   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
);    

const store = createStore(
    rootReducer, 
    initialState, 
    enhancer
);

export default store;