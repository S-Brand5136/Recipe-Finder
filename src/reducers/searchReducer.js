import {
  SEARCH_SUCCESS,
  SEARCH_FAIL,
  SEARCH_REQUEST,
  GET_MEAL_DETAILS_REQUEST,
  GET_MEAL_DETAILS_SUCCESS,
  GET_MEAL_DETAILS_FAIL,
  SET_SEARCH_PARAM,
  SET_SEARCH_PARAM_ERROR,
} from "../constants/searchConstants";

export const setSearchParamReducer = (state = { param: "AREA" }, action) => {
  switch (action.type) {
    case SET_SEARCH_PARAM: {
      return { param: action.payload };
    }
    case SET_SEARCH_PARAM_ERROR: {
      return { param: action.payload };
    }
    default:
      return state;
  }
};

export const searchReducer = (state = { searchResult: {} }, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        loading: true,
      };
    case SEARCH_SUCCESS:
      return {
        loading: false,
        searchResult: action.payload,
      };
    case SEARCH_FAIL:
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
