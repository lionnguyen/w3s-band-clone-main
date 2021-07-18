// ==================== Responsive ====================
var menuMobile = document.getElementById("menu-mobile");
var header = document.getElementById("header");
var headerHeight = header.clientHeight;
menuMobile.onclick = function () {
    console.log(menuMobile);
    var isClosed = header.clientHeight === headerHeight;
    if (isClosed) {
        header.style.height = "auto";
    } else {
        header.style.height = null;
    }
};
var menuItems = document.querySelectorAll("#nav li a[href*='#']");
console.log(menuItems);
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    menuItem.onclick = function (event) {
        var isParentMenu =
            this.nextElementSibling &&
            this.nextElementSibling.classList.contains("subnav");
        if (isParentMenu) {
            event.preventDefault();
        } else {
            header.style.height = null;
        }
    };
}

// ==================== Modal ====================

const buyTickers = document.querySelectorAll('.js-btn')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')



function showModal() {
    modal.classList.add('modal-show')
}

function hideModal() {
  modal.classList.remove('modal-show')
}

for (const buyTicker of buyTickers) {
  buyTicker.addEventListener('click', showModal)
}

modalClose.addEventListener('click', hideModal)


modal.addEventListener('click',hideModal)
modalContainer.addEventListener('click', function(event) {
    event.stopPropagation()
})


