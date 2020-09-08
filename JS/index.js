import navBar from "./Components/navBar.js";
import request from "./Components/search.js";
import cardConstruction from "./Components/card.js";

// Global variable
let filterChoice = "i";

// initialize navBar and searchBar functionality
navBar.search();

// Request to API database functionality
const search = document.getElementById("find");

search.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    e.preventDefault();
    if (document.getElementById("searched").hasChildNodes) {
      cardConstruction.removeAllCards();
    }

    request.searchByMainIng(search.value, filterChoice).then(function (result) {
      if (result.meals == null) {
        M.toast({
          html: "No dishes available: Try Again",
          classes: "rounded red darken-1",
        });
      }
      result.meals.forEach((element) => {
        const title = element.strMeal;
        const thumbNail = element.strMealThumb;
        request
          .getMealDetails(element.idMeal)
          .then(function (result) {
            result.meals.forEach((element) => {
              cardConstruction.makeCard(
                title,
                thumbNail,
                element.strInstructions,
                element.strYoutube,
                element.strIngredient1,
                element.strIngredient2,
                element.strIngredient3,
                element.strIngredient4,
                element.strIngredient5,
                element.strIngredient6,
                element.strIngredient7,
                element.strIngredient8,
                element.strIngredient9,
                element.strIngredient10,
                element.strIngredient11,
                element.strIngredient12,
                element.strIngredient13,
                element.strIngredient14,
                element.strIngredient15,
                element.strIngredient16,
                element.strIngredient17,
                element.strIngredient18,
                element.strIngredient19,
                element.strIngredient20,
                element.strMeasure1,
                element.strMeasure2,
                element.strMeasure3,
                element.strMeasure4,
                element.strMeasure5,
                element.strMeasure6,
                element.strMeasure7,
                element.strMeasure8,
                element.strMeasure9,
                element.strMeasure10,
                element.strMeasure11,
                element.strMeasure12,
                element.strMeasure13,
                element.strMeasure14,
                element.strMeasure15,
                element.strMeasure16,
                element.strMeasure17,
                element.strMeasure18,
                element.strMeasure19,
                element.strMeasure20
              );
            });
          })
          .catch(function () {
            M.toast({ html: "No dishes available: Try Again" });
          });

        document.getElementById("searchBar").style.display = "";
      });
    });

    search.value = "";
  }
});

// *********** Drop Down init ************

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".dropdown-trigger");
  var instances = M.Dropdown.init(elems);
});

function setFilter(userChoice) {
  if (userChoice.srcElement.attributes.id.value === "mainIngredient") {
    filterChoice = "i";
    search.placeholder = "Search By Main Ingredient";
  } else if (userChoice.srcElement.attributes.id.value === "Category") {
    filterChoice = "c";
    search.placeholder = "Search By Category";
  } else if (userChoice.srcElement.attributes.id.value === "Area") {
    filterChoice = "a";
    search.placeholder = "Search By Global Area";
  }
}

document.getElementById("mainIngredient").addEventListener("click", setFilter);
document.getElementById("Area").addEventListener("click", setFilter);
document.getElementById("Category").addEventListener("click", setFilter);

// *************** MOBILE *************

const searchBarMobile = document.getElementById("findMobile");

searchBarMobile.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    e.preventDefault();
    if (document.getElementById("searched").hasChildNodes) {
      cardConstruction.removeAllCards();
    }

    request.searchByMainIng(searchBarMobile.value).then(function (result) {
      if (result.meals == null) {
        M.toast({
          html: "No dishes avaialable: Try Again",
          classes: "red darken-1",
        });
      }
      result.meals.forEach((element) => {
        const title = element.strMeal;
        const thumbNail = element.strMealThumb;

        request
          .getMealDetails(element.idMeal)
          .then(function (result) {
            result.meals.forEach((element) => {
              cardConstruction.makeCard(
                title,
                thumbNail,
                element.strInstructions,
                element.strYoutube
              );
            });
          })
          .catch(function () {
            M.toast({ html: "No dishes avaialable: Try Again" });
          });
      });
    });

    searchBarMobile.value = "";
  }
});
