setTimeout(function () {
  alert('working on the form submission and social links');
}, 5000);

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

function cvClick() {
  alert('CV not available yet');
}

function sitelink() {
  alert("You're currently on the site");
}