import navBar from "./Components/navBar.js";
import request from "./Components/search.js";
import cardConstruction from "./Components/card.js";

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

    request
      .searchByMainIng(search.value)
      .then(function (result) {
        if(result.meals == null){
          M.toast({html: "No dishes avaialable: Try Again",  classes: "rounded red darken-1"})
        }
        result.meals.forEach((element) => {
          const title = element.strMeal;
          const thumbNail = element.strMealThumb;
          request
            .getMealDetails(element.idMeal)
            .then(function (result) {
              result.meals.forEach((element) => {
                cardConstruction.makeCard(title, thumbNail, element.strInstructions, element.strYoutube);
              });
            }).catch(function () {
              M.toast({html: "No dishes avaialable: Try Again"})
            });

          document.getElementById("searchBar").style.display = "";
        });
      });

    search.value = "";
  }
});


// *********** Drop Down init ************

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(elems);
  console.log(instances);
});

// *************** MOBILE *************

const searchBarMobile = document.getElementById("findMobile");

searchBarMobile.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    e.preventDefault();
    if (document.getElementById("searched").hasChildNodes) {
      cardConstruction.removeAllCards();
    }

  request
    .searchByMainIng(searchBarMobile.value)
    .then(function (result) {
      if(result.meals == null){
        M.toast({html: "No dishes avaialable: Try Again", classes: "red darken-1"})
      }
      result.meals.forEach((element) => {
        const title = element.strMeal;
        const thumbNail = element.strMealThumb;

        request
          .getMealDetails(element.idMeal)
          .then(function (result) {
            result.meals.forEach((element) => {
              cardConstruction.makeCard(title, thumbNail, element.strInstructions, element.strYoutube);
            });
          }).catch(function () {
            M.toast({html: "No dishes avaialable: Try Again"});
          });

      });
    });

    searchBarMobile.value = "";
  }
});
