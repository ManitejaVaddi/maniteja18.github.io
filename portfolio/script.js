let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
});
menu.onclick = () => {
    navbar.classList.toggle("active");
};
window.onscroll = () => {
    navbar.classList.remove("active");
};
// Dark Mode / light mode
let darkmode = document.querySelector("#darkmode");
darkmode.onclick = () => {
    if (darkmode.classList.contains("bx-moon")) {
        darkmode.classList.replace("bx-moon", "bx-sun");
        document.body.classList.add("active");
    }
    else {
        darkmode.classList.replace("bx-sun", "bx-moon");
        document.body.classList.remove("active");
    }
} 

document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkmode');
    const body = document.body;
    
    // Check for saved user preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        darkModeToggle.classList.replace('bx-moon', 'bx-sun');
    }
    
    // Toggle dark mode
    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            darkModeToggle.classList.replace('bx-moon', 'bx-sun');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            darkModeToggle.classList.replace('bx-sun', 'bx-moon');
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});