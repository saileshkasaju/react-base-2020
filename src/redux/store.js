import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";

import rootReducer from "./root-reducer";

export default function configureStore() {
  const composeEnhancers =
    (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  const middlewares = [ReduxThunk];
  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(rootReducer, composeEnhancers(...enhancers));

  return store;
}
