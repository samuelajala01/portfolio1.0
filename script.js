function myalert(){
    alert("Adding finishing touches to site");
}
myalert();

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

function cvClick() {
    alert("You are now moving to another site");
}
