import {
  SEARCH_BY_INGREDIENT_SUCCESS,
  SEARCH_BY_INGREDIENT_FAIL,
  SEARCH_BY_INGREDIENT_REQUEST,
  GET_MEAL_DETAILS_REQUEST,
  GET_MEAL_DETAILS_SUCCESS,
  GET_MEAL_DETAILS_FAIL,
} from "../constants/searchConstants";

export const searchReducer = (state = { searchResult: {} }, action) => {
  switch (action.type) {
    case SEARCH_BY_INGREDIENT_REQUEST:
      return {
        loading: true,
      };
    case SEARCH_BY_INGREDIENT_SUCCESS:
      return {
        loading: false,
        searchResult: action.payload,
      };
    case SEARCH_BY_INGREDIENT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getDetailsReducer = (state = { meal: {} }, action) => {
  switch (action.type) {
    case GET_MEAL_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case GET_MEAL_DETAILS_SUCCESS:
      return {
        loading: false,
        meal: action.payload,
      };
    case GET_MEAL_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
