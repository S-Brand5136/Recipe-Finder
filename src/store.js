import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  searchReducer,
  getDetailsReducer,
  setSearchParamReducer,
  saveRecipeReducer,
} from "./reducers/searchReducer";

const reducer = combineReducers({
  search: searchReducer,
  meal: getDetailsReducer,
  searchParam: setSearchParamReducer,
  recipesSaved: saveRecipeReducer,
});

const recipesInLocalStorage = localStorage.getItem("savedRecipes") || [];

const intitalState = { recipesSaved: recipesInLocalStorage };

const middleware = [thunk];

const store = createStore(
  reducer,
  intitalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
