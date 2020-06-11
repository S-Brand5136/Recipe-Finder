import navBar from "./Components/navBar.js";
import request from "./Components/search.js";
import cardConstruction from "./Components/card.js";

// initialize navBar and searchBar functionality
navBar.init();
navBar.search();
navBar.sideNavSearch();

const search = document.querySelector("#find");
search.value = "";

search.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    if (document.getElementById("searched").hasChildNodes) {
      cardConstruction.removeAllCards();
    }

    request
      .searchByMainIng(search.value)
      .then(function (result) {
        result.meals.forEach((element) => {
          cardConstruction.makeCard(element.strMeal, element.strMealThumb);
          document.getElementById('searchBar').style.display = "";
        });
      })
      .catch(function () {
        console.log("failure");
      });
  }
});
