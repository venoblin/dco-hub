const homeLink = document.getElementById('home-link')
const guidesLink = document.getElementById('guides-link')

console.log(window.location.pathname)

switch (window.location.pathname) {
  case '/':
    homeLink.classList.toggle('active')
    break
  case '/guides':
    guidesLink.classList.toggle('active')
    break
}
