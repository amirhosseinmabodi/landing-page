let menu = document.querySelector(".menu")
let menubtn = document.querySelector(".header__icon")
let menubtnicon = document.querySelector(".header__icon i")
let scroll = document.querySelector('.scroll-bar')
let openMenu = false

menubtn.addEventListener("click", function(){
    if (openMenu == true) {
        menu.style.left = '-256px'
        menubtnicon.classList = 'fa fa-bars'
        openMenu = false
    }
    else{
      menu.style.left = '0'
      menubtnicon.classList = 'fa fa-times'
      openMenu = true
    }
})

window.addEventListener('scroll', function(){
  let scrollTop = window.scrollY
  let documentHeight = document.body.clientHeight
  let windowHeight = window.innerHeight
  let scrollPercent = scrollTop / (documentHeight - windowHeight)
  scrollPercent = Math.round(scrollPercent * 100)
  console.log(scroll);
  scroll.style.width = scrollPercent + '%'
})