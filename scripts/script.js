// FEATURES

// toggle for navigation for mobile
const burgerMenu = document.querySelector('.navbar-burger');
const navBarItems = document.querySelector('.navbar-menu');
burgerMenu.addEventListener('click', () => {
  if(!navBarItems.style.display){
    navBarItems.style.display = 'block'
    navBarItems.style.top = `${document.querySelector('nav').offsetHeight - 1}px`;
    navBarItems.style.height = `${screen.height - document.querySelector('nav').offsetHeight}px`;
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
