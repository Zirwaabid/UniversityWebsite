const close = document.querySelector(".close");
const menu = document.querySelector(".menu");
const nav = document.querySelector("#navlinks")

close.addEventListener("click", () => {
    hideMenu()
});

menu.addEventListener("click", () => {
    showMenu()
});

function showMenu() {
    nav.style.right = "0"
}

function  hideMenu() {
    nav.style.right = "-200px"
}
