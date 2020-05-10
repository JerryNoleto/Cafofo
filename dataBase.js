var ondeinput 



const apiUrl = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";
const cardsContainer = document.querySelector("#cards");
let data = [];

async function fetchCards() {
    let response = await fetch(apiUrl)
    return await response.json()
}

function renderCards(cards) {
    cardsContainer.innerHTML = "";
    cards.map(renderCard);
}

function renderCard(card) {
    const div = document.createElement("div");
    div.className = "col md-3";
   // div.style.width = "40%";
    div.style.maxwidth = "297px";
    div.style.minWidth = "297px";
    div.style.margin = ".70rem";
    div.innerHTML = `
    <div class="card mb-3 border-0">
      <img src="${card.photo}" class="card-img-top rounded" alt="${card.name}">
     <div class="card-body bg-dark text-white pt-2">
     <p class="small text-uppercase my-sm-n1 col-auto badge badge-pill badge-success">${card.property_type}</p>
        <h5 class="card-title">${card.name}</h5>
        <p class="card-text"><small class="font-italic"><b>R$${card.price}</b>/noite</small></p>
     </div> 
    </div>
`;
    cardsContainer.appendChild(div);
}

async function main() {
    data = await fetchCards();
    if (data[0]) {
        renderCards(data);
    }
}

main();