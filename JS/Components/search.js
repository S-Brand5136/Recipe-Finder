class request {
  static searchByMainIng(mainIng, filter) {
    //   create promise
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
  }

  static getMealDetails(id) {
    return new Promise(function (resolve, reject) {
      const xhr = new XMLHttpRequest();

      xhr.open(
        "GET",
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
        true
      );

      xhr.onload = function () {
        const response = JSON.parse(xhr.responseText);
        const splat = xhr.responseText.split(",");

        console.log(splat[21]);

        resolve(response);
      };

      xhr.send();
    });
  }
}

export default request;
