function myalert(){
    alert("Responsive design in progress");
}
myalert();

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

function cvClick() {
    alert("CV not available yet");
}
