import {
  SEARCH_SUCCESS,
  SEARCH_FAIL,
  SEARCH_REQUEST,
  GET_MEAL_DETAILS_REQUEST,
  GET_MEAL_DETAILS_SUCCESS,
  GET_MEAL_DETAILS_FAIL,
  SET_SEARCH_PARAM,
  SET_SEARCH_PARAM_ERROR,
  SAVE_RECIPE_REQUEST,
  SAVE_RECIPE_SUCCESS,
  SAVE_RECIPE_ERROR,
  DELETE_RECIPE_REQUEST,
  DELETE_RECIPE_SUCCESS,
  DELETE_RECIPE_ERROR,
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

export const getDetailsReducer = (
  state = { loading: true, mealDetails: {} },
  action
) => {
  switch (action.type) {
    case GET_MEAL_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case GET_MEAL_DETAILS_SUCCESS:
      return {
        loading: false,
        mealDetails: action.payload,
        ingredientsList: action.ingredients,
        measurementsList: action.measurements,
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

export const saveRecipeReducer = (state = {}, action) => {
  switch (action.type) {
    case SAVE_RECIPE_REQUEST:
      return {
        loading: true,
      };
    case SAVE_RECIPE_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case SAVE_RECIPE_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const removeSavedRecipeReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_RECIPE_REQUEST:
      return {
        loading: true,
      };
    case DELETE_RECIPE_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case DELETE_RECIPE_ERROR:
      return {
        loading: false,
        error: "Failed to delete recipe",
      };
    default:
      return state;
  }
};
