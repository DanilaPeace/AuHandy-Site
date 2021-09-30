// burger
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

// popup
const openPopup = document.querySelector(".open_popup");
const closePopup = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");

openPopup.addEventListener('click', (event) => {
    event.preventDefault();
    popup.classList.add('active');
});

closePopup.addEventListener('click', function(event){
    popup.classList.remove('active');
});
