class cardConstruction {
  static makeCard(
    title,
    imgURL,
    instructions,
    youtubeURL,
    strInstructions,
    strYoutube,
    ingredientsMeasurements
  ) {
    const newCard = document.createElement("div");
    const tbody = document.createElement("tbody");
    newCard.classList.add("col");
    newCard.classList.add("s12");
    newCard.classList.add("m6");

    console.log(ingredientsMeasurements);

    // let row = `<tr>
    //   <td>${element.ingredient}</td>
    //   <td>${element.measure}</td>
    // </tr>`;

    newCard.innerHTML = `<div class="card med">
        <div class="card-image waves-effect hoverable waves-block waves-light">
          <img class="activator" src="${imgURL}">
        </div>
        <div class="card-content">
          <span id="titleFont" class="card-title activator grey-text text-darken-4">${title}<i class="material-icons right">more_vert</i></span>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">${title}<i class="material-icons right hoverable">close</i></span>
          <h6>Ingredient List:</h6>
          <table>
            <thead>
              <th>Ingredient</th>
              <th>Measurement</th>
            </thead>

            <tbody>

            <tr>
              <td>${ingredientsMeasurements.ingredient}</td>
              <td>${ingredientsMeasurements.measure}</td>
            </tr>

            </tbody>
          </table>
          <p id="info" class="left-align">${instructions}</p>
          <span><a href="${youtubeURL}">${youtubeURL}</a></span>
        </div>
      </div>`;

    const body = document.getElementById("searched");
    body.append(newCard);
  }

  static removeAllCards() {
    const body = document.getElementById("searched");
    while (body.lastElementChild) {
      body.removeChild(body.lastElementChild);
    }
  }

  static makeTable(ingredientsMeasurements) {
    ingredientsMeasurements.map((element) => {
      if (element.ingredient !== undefined && element.measure !== undefined) {
        const row = `<tr>
        <td>${element.ingredient}</td>
        <td>${element.measure}</td>
      </tr>`;
        return row;
      }
    });
  }
}

export default cardConstruction;
