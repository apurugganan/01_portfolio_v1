// check if user is using mobile or browser
// const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.matchMedia("only screen and (max-width: 760px)").matches || navigator.userAgentData.mobile
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||  navigator.userAgentData.mobile

// apply mobile class
if(!!isMobile){
  let elements =  document.querySelectorAll('[class^="nav"]')
  elements.forEach((el) => {
    el.classList.add('mobile')
  })
}
