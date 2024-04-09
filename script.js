const dropDownMenu = document.querySelector(".dropdown-menu")
const togglemenu = document.querySelector(".bx-menu")
togglemenu.onclick = function(){
  dropDownMenu.classList.toggle("open")
}
window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("middle-pic");
    image.style.transform = "rotate(" + window.pageYOffset / 2 + "deg)";
}