console.log('script is starting');

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

    navBarItems.classList.remove('animate-right-close')
    navBarItems.classList.add('animate-right-open')
  } else {
    navBarItems.classList.remove('animate-right-open')
    navBarItems.classList.add('animate-right-close')

    // work around to display:none unable to animate as of 2023JAN09
    setTimeout(() => {
      navBarItems.style.display = "";
    },300)
  }

  
})


