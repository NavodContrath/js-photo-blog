const displayerEl = document.querySelector('.row')
const overlayEl = document.querySelector('.overlay')
const closeBtnEl = document.querySelector('button')

fetch('https://lanciweb.github.io/demo/api/pictures/')
    .then(response => response.json())
    .then(data => renderCards(data))
    .catch(error => console.log(error))

/**
 * function that create  elements and put it in page
 * @param {markup} info 
 */
function renderCards(info) {
    info.forEach(card => {
        const markup = `                
        <div class="col-sm-12 col-md-6 col-lg-4 my-4">
                <div class="card_1">
                   <div class="card_top">
                        <img src="./assets/img/pin.svg" id="pin" alt="pin">
                        <img src="${card.url}" class="card_img" alt="">
                    </div>
                    <div class="card_bot my-2">
                        <div>${card.date}</div>
                        <h2>${card.title.toUpperCase()}</h2>
                        
                    </div>
                </div>
        </div>`
        displayerEl.insertAdjacentHTML("beforeend", markup)
    });

    const cardImgEl = document.querySelectorAll('.card_img')
    console.log(cardImgEl)

    cardImgEl.forEach(img => {
        img.addEventListener('click', () => {
            overlayEl.classList.remove('d-none')
            console.log('clicked')
        })
    })

}

closeBtnEl.addEventListener('click', () => {
    overlayEl.classList.add('d-none');
});


