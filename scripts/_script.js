console.log('main script is starting');

// place color on svgs
const svgList = document.querySelectorAll('svg');
console.log(svgList)
svgList.forEach((el) => {
  el.style.stroke = window.getComputedStyle(document.body).getPropertyValue('color')
  el.style.fill = window.getComputedStyle(document.body).getPropertyValue('backgroundColor')

})

// check if user is using mobile or browser
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.matchMedia("only screen and (max-width: 760px)").matches || navigator.userAgentData.mobile

// apply mobile class
if(!!isMobile){
  let elements =  document.querySelectorAll('[class^="nav"]')
  elements.forEach((el) => {
    el.classList.add('mobile')
  })
}

// toggle for navigation for mobile
const burgerMenu = document.querySelector('.navbar-burger');
const navBarItems = document.querySelector('.navbar-browser');

burgerMenu.addEventListener('click', () => {
  if(!navBarItems.style.display){
    navBarItems.style.display = 'block'
    navBarItems.style.top = `${burgerMenu.offsetHeight}px`;
    navBarItems.style.height = `${screen.height - burgerMenu.offsetHeight}px`;
    navBarItems.style.width = `${screen.width}px`

    navBarItems.classList.remove('animate-right')
    navBarItems.classList.add('animate-left')
  } else {
    navBarItems.classList.remove('animate-left')
    navBarItems.classList.add('animate-right')

    // work around to display:none unable to animate as of 2023JAN09
    setTimeout(() => {
      navBarItems.style.display = "";
    },300)
  }
})


