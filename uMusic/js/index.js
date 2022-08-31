const toggleMobileMenu = document.querySelector('#menu-hamburger')
const mobileMenu = document.querySelector('.menu__mobile-expand')
const closeMenu = document.querySelector('.menu__close')

function clickClose() {
  closeMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('openCloseMenu')
  })
}

function toggleMenuOpenClose() {

  toggleMobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('openCloseMenu')
  })
}

clickClose()
toggleMenuOpenClose()


