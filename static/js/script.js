var menu_box = document.querySelector('.menu-box');
var navbar_nav = document.querySelector('.navbar-nav');
var navbar = document.querySelector('.navbar');

menu_box.addEventListener('click', () => {
    navbar_nav.classList.toggle("open");
})

window.addEventListener('scroll', () => {
    if (window.scrollY == 0) {
        if (window.innerWidth > 550) {
            navbar.style.backgroundColor = "transparent";
        }
    }
    else {
        navbar.style.backgroundColor = "rgb(18, 43, 67)";
    }
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 550) {
        if (window.scrollY == 0) {
            navbar.style.backgroundColor = "transparent";
        }
    }
    else {
        navbar.style.backgroundColor = "rgb(18, 43, 67)";
    }
})


var tiles_are_hidden = true;
var show_btn = document.querySelector('.show-btn');
var all_tiles = document.querySelectorAll('.tile-cover');
var mobile_friendly_tiles = document.querySelectorAll('.mobile');

//show_btn.addEventListener('click', () => {
//    if (tiles_are_hidden) {
//        show_tiles();
//        show_btn.textContent = "Show less";
//        tiles_are_hidden = false;
//    }
//    else {
//        hide_tiles();
//        show_btn.textContent = "Show more";
//        tiles_are_hidden = true;
//    }
//})

function hide_tiles() {
    all_tiles.forEach((item) => {
        item.style.display = null;
    })

    mobile_friendly_tiles.forEach((item) => {
        item.style.display = "block";
    })
}

function show_tiles() {
    all_tiles.forEach((item) => {
        item.style.display = "block";
    })
}


var shadow_box = document.querySelector(".shadow-box");
var send_btn = document.querySelector(".send-btn");
shadow_box.addEventListener('click', () => {
    send_btn.click();
})


var arrow = document.querySelector('.arrow');
arrow.addEventListener('click', () => {
    window.scroll(0, 635);
})