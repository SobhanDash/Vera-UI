const headerBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const sidenav = document.getElementById("sidebar");
const menuIcon = document.querySelector(".menuicon");
const xIcon = document.querySelector(".xicon");
const mainTopic = document.querySelector(".main-topic");
const mainContent = document.querySelector(".main-content");

let showheader = false;

headerBtn.addEventListener("click", toggleheader);

/*
  Function for toggling navigation header
*/

function toggleheader() {
  if (!showheader) {
    headerBtn.classList.add("open");
    sidenav.classList.add("open");
    console.log(menuIcon.style, xIcon.style);
    menuIcon.style.display = "none";
    xIcon.style.display = "block";
    // mainTopic.classList.add("open");
    // mainContent.classList.add("open");
    showheader = true;
  } else {
    headerBtn.classList.remove("open");
    sidenav.classList.remove("open");
    menuIcon.style.display = "block";
    xIcon.style.display = "none";
    // mainTopic.classList.remove("open");
    // mainContent.classList.remove("open");
    showheader = false;
  }
}
