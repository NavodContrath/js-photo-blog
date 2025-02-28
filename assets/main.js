const displayerEl = document.querySelector(".row")

fetch('https://lanciweb.github.io/demo/api/pictures/')
    .then(response => response.json())
    .then(data => renderCards(data))
    .catch(error => console.log(error))

function renderCards(info) {
    info.forEach(card => {
        const markup = `                
        <div class="col-sm-12 col-md-6 col-lg-4 my-5">
                <div class="card_1">
                   <div class="card_top">
                        <img src="/assets/img/pin.svg" id="pin" alt="pin">
                        <img src="${card.url}" id="dogo" alt="dog_img">
                    </div>
                    <div class="card_bot my-2">
                        <div>${card.date}</div>
                        <h2>${card.title.toUpperCase()}</h2>
                        
                    </div>
                </div>
        </div>`
        displayerEl.insertAdjacentHTML("beforeend", markup)
    });
}