class cardConstruction {
  static makeCard(
    title,
    imgURL,
    instructions,
    youtubeURL,
    strInstructions,
    strYoutube,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strIngredient15,
    strIngredient16,
    strIngredient17,
    strIngredient18,
    strIngredient19,
    strIngredient20,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
    strMeasure7,
    strMeasure8,
    strMeasure9,
    strMeasure10,
    strMeasure11,
    strMeasure12,
    strMeasure13,
    strMeasure14,
    strMeasure15,
    strMeasure16,
    strMeasure17,
    strMeasure18,
    strMeasure19,
    strMeasure20
  ) {
    const newCard = document.createElement("div");
    newCard.classList.add("col");
    newCard.classList.add("s12");
    newCard.classList.add("m6");

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
                <td>${strIngredient1}</td>
                <td>${strMeasure1}</td>
              </tr>
              
              <tr>
              <td>${strIngredient2}</td>
              <td>${strMeasure2}</td>
              </tr>

              <tr>
              <td>${strIngredient3}</td>
              <td>${strMeasure3}</td>
              </tr>

              <tr>
              <td>${strIngredient4}</td>
              <td>${strMeasure4}</td>
              </tr>

              <tr>
              <td>${strIngredient5}</td>
              <td>${strMeasure5}</td>
              </tr>

              <tr>
              <td>${strIngredient6}</td>
              <td>${strMeasure6}</td>
              </tr>
              
              <tr>
              <td>${strIngredient7}</td>
              <td>${strMeasure7}</td>
              </tr>

              <tr>
              <td>${strIngredient8}</td>
              <td>${strMeasure8}</td>
              </tr>

              <tr>
              <td>${strIngredient9}</td>
              <td>${strMeasure9}</td>
              </tr>

              <tr>
              <td>${strIngredient10}</td>
              <td>${strMeasure10}</td>
              </tr>

              <tr>
              <td>${strIngredient11}</td>
              <td>${strMeasure11}</td>
              </tr>

              <tr>
              <td>${strIngredient12}</td>
              <td>${strMeasure12}</td>
              </tr>

              <tr>
              <td>${strIngredient13}</td>
              <td>${strMeasure13}</td>
              </tr>

              <tr>
              <td>${strIngredient14}</td>
              <td>${strMeasure14}</td>
              </tr>

              <tr>
              <td>${strIngredient15}</td>
              <td>${strMeasure15}</td>
              </tr>

              <tr>
              <td>${strIngredient16}</td>
              <td>${strMeasure16}</td>
              </tr>

              <tr>
              <td>${strIngredient17}</td>
              <td>${strMeasure17}</td>
              </tr>

              <tr>
              <td>${strIngredient18}</td>
              <td>${strMeasure18}</td>
              </tr>

              <tr>
              <td>${strIngredient19}</td>
              <td>${strMeasure19}</td>
              </tr>

              <tr>
              <td>${strIngredient20}</td>
              <td>${strMeasure20}</td>
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
}

export default cardConstruction;
