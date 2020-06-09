class navBar {
  static init() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems, {
        menuWidth: 300,
        edge: "left",
        closeOnClick: true,
        draggable: true,
      });
    });
  }

  static search() {
    document.getElementById("search").addEventListener("click", function () {
      const searchBar = document.getElementById("searchBar");
      if (searchBar.style.display == "none") {
        searchBar.style.display = "inline-block";
      } else {
        searchBar.style.display = "none";
      }
    });
  }
}

export default navBar;
