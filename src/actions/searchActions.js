import {
  GET_MEAL_DETAILS_REQUEST,
  GET_MEAL_DETAILS_SUCCESS,
  GET_MEAL_DETAILS_FAIL,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAIL,
  SET_SEARCH_PARAM,
  SET_SEARCH_PARAM_ERROR,
  SAVE_RECIPE_REQUEST,
  SAVE_RECIPE_SUCCESS,
  SAVE_RECIPE_ERROR,
  DELETE_RECIPE_REQUEST,
  DELETE_RECIPE_SUCCESS,
  DELETE_RECIPE_ERROR,
  GET_SAVED_RECIPES_REQUEST,
  GET_SAVED_RECIPES_SUCCESS,
  GET_SAVED_RECIPES_ERROR,
  SAVE_RECIPE_CLEAR,
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

export const searchByMainIng = (input) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SEARCH_REQUEST,
    });

    const {
      searchParam: { param },
    } = getState();

    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/${
        process.env.REACT_APP_API_KEY
      }/filter.php?${param.charAt(0).toLowerCase()}=${input}`
    );
    if (!data.meals || data.meals === undefined || data.meals === null) {
      dispatch({
        type: SEARCH_FAIL,
        payload: "error reciving recipes!",
      });
    } else {
      dispatch({
        type: SEARCH_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    dispatch({
      type: SEARCH_FAIL,
      payload: error.response,
    });
  }
};

export const getMealDetails = (mealid) => async (dispatch) => {
  try {
    dispatch({
      type: GET_MEAL_DETAILS_REQUEST,
    });

    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/${process.env.REACT_APP_API_KEY}/lookup.php?i=${mealid}`
    );

    const meal = data.meals[0];
    const ingredients = [];
    const measurements = [];

    Object.keys(meal).map((line) =>
      line.startsWith("strIngredient") &&
      meal[line] !== "" &&
      meal[line] !== null
        ? ingredients.push(meal[line])
        : line.startsWith("strMeasure") &&
          meal[line] !== "" &&
          meal[line] !== null
        ? measurements.push(meal[line])
        : ""
    );

    await dispatch({
      type: GET_MEAL_DETAILS_SUCCESS,
      payload: meal,
      ingredients: ingredients,
      measurements: measurements,
    });
  } catch (error) {
    dispatch({
      type: GET_MEAL_DETAILS_FAIL,
      payload: error.response,
    });
  }
};

export const saveRecipe = (mealId) => async (dispatch) => {
  try {
    dispatch({
      type: SAVE_RECIPE_REQUEST,
    });

    const recipes = JSON.parse(localStorage.getItem("savedRecipes"));

    if (recipes === null) {
      localStorage.setItem("savedRecipes", JSON.stringify([mealId]));
      dispatch({
        type: SAVE_RECIPE_SUCCESS,
      });
    } else if (!recipes.includes(mealId)) {
      recipes.push(mealId);

      localStorage.setItem("savedRecipes", JSON.stringify(recipes));
      dispatch({
        type: SAVE_RECIPE_SUCCESS,
      });
    } else {
      dispatch({
        type: SAVE_RECIPE_ERROR,
        payload: "Recipe already Saved!",
      });
    }
    setTimeout(() => {
      dispatch({
        type: SAVE_RECIPE_CLEAR,
      });
    }, 3000);
  } catch (error) {
    dispatch({
      type: SAVE_RECIPE_ERROR,
      payload: "Failed to save recipe",
    });
  }
};

export const removeRecipe = (mealId) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_RECIPE_REQUEST,
    });

    const recipes = JSON.parse(localStorage.getItem("savedRecipes"));

    const index = recipes.findIndex((element) => element === mealId);
    recipes.splice(index, 1);
    localStorage.setItem("savedRecipes", JSON.stringify(recipes));

    dispatch({
      type: DELETE_RECIPE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: DELETE_RECIPE_ERROR,
      payload: error.response,
    });
  }
};

export const getSavedRecipesFromStorage = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_SAVED_RECIPES_REQUEST,
    });

    const recipes = JSON.parse(localStorage.getItem("savedRecipes"));

    if (recipes) {
      const recipesList = [];

      recipes.forEach(async (meal) => {
        const data = axios.get(
          `https://www.themealdb.com/api/json/v1/${process.env.REACT_APP_API_KEY}/lookup.php?i=${meal}`
        );
        recipesList.push(data);
      });

      Promise.all(recipesList).then((data) => {
        return dispatch({
          type: GET_SAVED_RECIPES_SUCCESS,
          payload: data,
        });
      });
    } else if (!recipes) {
      dispatch({
        type: GET_SAVED_RECIPES_ERROR,
        payload: "Failed to gather recipes",
      });
    }
  } catch (error) {
    dispatch({
      type: GET_SAVED_RECIPES_ERROR,
      payload: "Failed to gather recipes",
    });
  }
};
