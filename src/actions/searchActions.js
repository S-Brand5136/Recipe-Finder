import {
  GET_MEAL_DETAILS_REQUEST,
  GET_MEAL_DETAILS_SUCCESS,
  GET_MEAL_DETAILS_FAIL,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAIL,
  SET_SEARCH_PARAM,
  SET_SEARCH_PARAM_ERROR,
} from "../constants/searchConstants";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const setSearchParam = (param) => async (dispatch) => {
  try {
    dispatch({
      type: SET_SEARCH_PARAM,
      payload: param,
    });
  } catch (error) {
    dispatch({
      type: SET_SEARCH_PARAM_ERROR,
      payload: "Error setting param",
    });
  }
};

export const searchByMainIng = (mainIng, filter) => async (dispatch) => {
  try {
    dispatch({
      type: SEARCH_REQUEST,
    });

    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/${process.env.REACT_APP_API_KEY}/filter.php?${filter}=${mainIng}`
    );

    dispatch({
      type: SEARCH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SEARCH_FAIL,
      payload: error.response,
    });
  }
};

export const getMealDetails = ({ searchResult: { meals } }) => async (
  dispatch
) => {
  try {
    dispatch({
      type: GET_MEAL_DETAILS_REQUEST,
    });

    const data = meals.map((meal) => meal.idMeal);

    const array = [];

    dotenv.config();

    for (let i = 0; i < data.length; i++) {
      const response = await axios
        .get(
          `https://www.themealdb.com/api/json/v1/${process.env.REACT_APP_API_KEY}/lookup.php?i=${data[i]}`
        )
        .then((response) => response.data.meals);

      array.push(response);
    }

    await dispatch({
      type: GET_MEAL_DETAILS_SUCCESS,
      payload: array,
    });
  } catch (error) {
    dispatch({
      type: GET_MEAL_DETAILS_FAIL,
      payload: error.response,
    });
  }
};
