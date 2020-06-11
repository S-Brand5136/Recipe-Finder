class cardConstruction{

    static makeCard(title, imgURL){
        const newCard = document.createElement("div");
        newCard.classList.add("col");
        newCard.classList.add("s6");
        newCard.innerHTML = `<div class="card medium">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" src="${imgURL}">
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">${title}<i class="material-icons right">more_vert</i></span>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
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