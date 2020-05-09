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
    div.className = "col md-4";
   // div.style.width = "40%";
    div.style.maxwidth = "23%";
    div.style.minWidth = "23%";
    div.style.margin = ".70rem";
    div.innerHTML = `
    <div class="card mb-4">
      <img src="${card.photo}" class="card-img-top" alt="${card.name}">
     <div class="card-body bg-secondary text-white">
        <h5 class="card-title">${card.name}</h5>
        <p class="card-text">${card.property_type}</p>
        <p class="card-text"><small class="text-muted">R$${card.price},00</small></p>
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