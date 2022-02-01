/////////////////////// Hamburger Menu /////////////////////////////////////

let toggleNavStatus = false;

let toggleNav = function () {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUL = document.querySelector(".nav-sidebar ul");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

    if (toggleNavStatus === false) {
        getSidebarUL.style.visibility = "visible"

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }
        toggleNavStatus = true;
    }
    else if (toggleNavStatus === true) {


        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }

        getSidebarUL.style.visibility = "hidden"
        toggleNavStatus = false;
    }
}

/////////////////////////// Colors menu ( HOME ) /////////////////////////////////////



let toggleHomeBg = function () {

    let getBackgroundHome = document.querySelector(".myBody")
    let getSidebarUL = document.querySelector(".nav-sidebar ul");

    getBackgroundHome.style.backgroundColor = "burlywood"
    toggleNavStatus = false;
    getSidebarUL.style.visibility = "hidden"

}


/////////////////////////// color menu (green)  //////////////////////

let toggleGreenBg = function () {

    let getBackgroundHome = document.querySelector(".myBody")
    let getSidebarUL = document.querySelector(".nav-sidebar ul");

    getBackgroundHome.style.backgroundColor = "green"
    toggleNavStatus = false;
    getSidebarUL.style.visibility = "hidden"

}


/////////////////////////// color menu (purple)  //////////////////////

let togglePurpleBg = function () {

    let getBackgroundHome = document.querySelector(".myBody")
    let getSidebarUL = document.querySelector(".nav-sidebar ul");

    getBackgroundHome.style.backgroundColor = "purple"
    toggleNavStatus = false;
    getSidebarUL.style.visibility = "hidden"

}

/////////////////////////// color menu (Red)  //////////////////////

let toggleRedBg = function () {

    let getBackgroundHome = document.querySelector(".myBody")
    let getSidebarUL = document.querySelector(".nav-sidebar ul");

    getBackgroundHome.style.backgroundColor = "red"
    toggleNavStatus = false;
    getSidebarUL.style.visibility = "hidden"

}

/////////////////////////// color menu (Orange)  //////////////////////

let toggleOrangeBg = function () {

    let getBackgroundHome = document.querySelector(".myBody")
    let getSidebarUL = document.querySelector(".nav-sidebar ul");

    getBackgroundHome.style.backgroundColor = "orange"
    toggleNavStatus = false;
    getSidebarUL.style.visibility = "hidden"

}
