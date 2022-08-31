const menuMobile = document.querySelector('#menu-hamburger')
const menuExpand = document.querySelector('.menu__mobile-expand')

console.log(menuExpand)

function toggleMenuOpenClose() {

    menuMobile.addEventListener('click', () => {
      menuExpand.classList.toggle('openCloseMenu')
    })
}

toggleMenuOpenClose()


