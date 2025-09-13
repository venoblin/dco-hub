import { getBasePathname } from './utils/index.js'

const homeLink = document.getElementById('home-link')
const guidesLink = document.getElementById('guides-link')

const basePath = getBasePathname(window.location.pathname)

switch (basePath) {
  case '/':
    homeLink.classList.toggle('active')
    break
  case '/guides':
    guidesLink.classList.toggle('active')
    break
}
