import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { searchReducer } from "./reducers/searchReducer";

const reducer = combineReducers({
  search: searchReducer,
});

const intitalState = {
  search: {},
};

const middleware = [thunk];

const store = createStore(
  reducer,
  intitalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
