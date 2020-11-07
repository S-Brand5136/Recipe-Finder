import axios from "axios";
import { SEARCH_BY_INGREDIENT } from "../constants/searchConstants";

export const searchByMainIng = (mainIng, filter) => {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    // make call to api

    xhr.open(
      "GET",
      `https://www.themealdb.com/api/json/v1/1/filter.php?${filter}=${mainIng}`,
      true
    );

    // on success
    xhr.onload = function () {
      const response = JSON.parse(xhr.responseText);
      resolve(response);
    };

    xhr.send();
  });
};
