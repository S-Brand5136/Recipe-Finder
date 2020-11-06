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
                ...ingredientsMeasurements
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

const ingredientsMeasurements = [
  {
    ingredient: element.strIngredient1,
    measure: element.strMeasure1,
  },
  {
    ingredient: element.strIngredient2,
    measure: element.strMeasure2,
  },
  {
    ingredient: element.strIngredient3,
    measure: element.strMeasure3,
  },
  {
    ingredient: element.strIngredient4,
    measure: element.strMeasure4,
  },
  {
    strIngredient5: element.strIngredient5,
    strMeasure5: element.strMeasure5,
  },
  {
    ingredient: element.strIngredient6,
    measure: element.strMeasure6,
  },
  {
    ingredient: element.strIngredient7,
    measure: element.strMeasure7,
  },
  {
    ingredient: element.strIngredient8,
    measure: element.strMeasure8,
  },
  {
    ingredient: element.strIngredient9,
    measure: element.strMeasure9,
  },
  {
    ingredient: element.strIngredient10,
    measure: element.strMeasure10,
  },
  {
    ingredient: element.strIngredient11,
    measure: element.strMeasure11,
  },
  {
    ingredient: element.strIngredient12,
    measure: element.strMeasure12,
  },
  {
    ingredient: element.strIngredient13,
    measure: element.strMeasure13,
  },
  {
    ingredient: element.strIngredient14,
    measure: element.strMeasure14,
  },
  {
    ingredient: element.strIngredient15,
    measure: element.strMeasure15,
  },
  {
    ingredient: element.strIngredient16,
    measure: element.strMeasure16,
  },
  {
    ingredient: element.strIngredient17,
    measure: element.strMeasure17,
  },
  {
    ingredient: element.strIngredient18,
    measure: element.strMeasure18,
  },
  {
    ingredient: element.strIngredient19,
    measure: element.strMeasure19,
  },
  {
    ingredient: element.strIngredient20,
    measure: element.strMeasure20,
  },
];
