import { useMemo } from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import { sectionsReducers } from "./reducers/refsReducers";
import { selectedProductsCategoryReducer } from "./reducers/selectedProductsCategoryReducer";

import { authReducer } from "./reducers/auth";

// let store;

const reducer = combineReducers({
  refs: sectionsReducers,
  selectedProductsCategory: selectedProductsCategoryReducer,
  auth: authReducer,
});

// const initialState = {};

// const middleware = [thunk];

// const reducer = combineReducers({
//   refs: sectionsReducers,
//   selectedProductsCategory: selectedProductsCategoryReducer,
// });

const initialState = {};

const middleware = [thunk];

const store = () =>
  createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );

export default store;

export const wrapper = createWrapper(store);

// function initStore(initialState) {
//   return createStore(
//     reducer,
//     initialState,
//     composeWithDevTools(applyMiddleware(thunkMiddleware))
//   );
// }

// export const initializeStore = (preloadedState) => {
//   let _store = store ?? initStore(preloadedState);

//   // After navigating to a page with an initial Redux state, merge that state
//   // with the current state in the store, and create a new store
//   if (preloadedState && store) {
//     _store = initStore({
//       ...store.getState(),
//       ...preloadedState,
//     });
//     // Reset the current store
//     store = undefined;
//   }

//   // For SSG and SSR always create a new store
//   if (typeof window === "undefined") return _store;
//   // Create the store once in the client
//   if (!store) store = _store;

//   return _store;
// };

// const store = () =>
//   createStore(
//     reducer,
//     initialState,
//     composeWithDevTools(applyMiddleware(...middleware))
//   );
// export function useStore(initialState) {
//   const store = useMemo(() => initializeStore(initialState), [initialState]);
//   return store;
// }

// export default store;

// export const wrapper = createWrapper(store);
