function myalert(){
    alert("well, working on that stupid white gap");
}

setTimeout(myalert(), 3000);

const hamMenu = document.querySelector(".ham-menu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
});