class cardConstruction{

    static makeCard(title, imgURL){
        const newCard = document.createElement("div");
        newCard.classList.add("col");
        newCard.classList.add("s12");
        newCard.classList.add("m6")
        newCard.innerHTML = `<div class="card med">
        <div class="card-image waves-effect hoverable waves-block waves-light">
          <img class="activator" src="${imgURL}">
        </div>
        <div class="card-content">
          <span id="titleFont" class="card-title activator grey-text text-darken-4">${title}<i class="material-icons right">more_vert</i></span>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">${title}<i class="material-icons right hoverable">close</i></span>
          <p>Here is some more information about this product that is only revealed once clicked on.</p>
        </div>
      </div>`;

      const body = document.getElementById("searched");
      body.append(newCard);
    }

    static removeAllCards(){
        const body = document.getElementById("searched");
        while(body.lastElementChild){
            body.removeChild(body.lastElementChild);
        }
    }

}

export default cardConstruction;