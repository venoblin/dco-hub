const homeLink = document.getElementById('home-link')
const guidesLink = document.getElementById('guides-link')

switch (window.location.pathname) {
  case '/':
    homeLink.classList.toggle('active')
    break
  case '/guides':
  case '/guides/new':
    guidesLink.classList.toggle('active')
    break
}
