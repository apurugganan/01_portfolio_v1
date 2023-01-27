// find switch
const darkModeToggle = document.querySelector('#darkmode-toggle');

// load darkmode
console.log("isDarkMode: ", localStorage.getItem("isDarkMode"));
if (localStorage.getItem("isDarkMode") === "true"){
  darkModeOn();
}



// darkmode toggle
darkModeToggle.addEventListener("click", toggleDarkMode);

function toggleDarkMode(){
  const isDarkMode = localStorage.getItem("isDarkMode");
  if (isDarkMode === "false" || isDarkMode === null){
    localStorage.setItem("isDarkMode", "true");

    darkModeOn();
  }
  
  if (isDarkMode === "true"){
    localStorage.setItem("isDarkMode", "false")

    darkModeOff();
 }
}

function darkModeOn(){
  document.body.classList.add("darkMode");
  document.querySelector("nav").classList.add("darkMode");
  document.querySelector(".navbar-menu").classList.add("darkMode");
  document.querySelectorAll('svg').forEach( el => {
    el.classList.add("svgDarkMode")
  })
  document.querySelectorAll('button').forEach( el => {
    el.classList.add("darkMode")
  });
  document.querySelectorAll('section').forEach( el => {
    el.classList.add("darkMode")
  });
  document.querySelector(".panda-shadow-1").classList.add("pandaDarkMode");
  darkModeToggle.checked = true
}


function darkModeOff(){
  document.body.classList.remove("darkMode");
  document.querySelector("nav").classList.remove("darkMode");
  document.querySelector(".navbar-menu").classList.remove("darkMode");
  document.querySelectorAll('svg').forEach( el => {
    el.classList.remove("svgDarkMode")
  });
  document.querySelectorAll('button').forEach( el => {
    el.classList.remove("darkMode")
  });
  document.querySelectorAll('section').forEach( el => {
    el.classList.remove("darkMode")
  });
  document.querySelector(".panda-shadow-1").classList.remove("pandaDarkMode");
  darkModeToggle.checked = false;
}