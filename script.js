// Animasi Scroll Reveal
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);
window.onload = reveal;

// Simple Hamburger Menu Toggle
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if(menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '60px';
        navLinks.style.background = '#7b1d1d';
        navLinks.style.width = '100%';
        navLinks.style.left = '0';
        navLinks.style.padding = '20px';
    });
}
document.querySelectorAll('.card-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetID = this.getAttribute('href');
        const targetElement = document.querySelector(targetID);
      
        if (targetElement) {
            window.scrollTo({
                top: document.body.scrollHeight, // Penyesuaian tinggi Navbar
                behavior: 'smooth'
            });
        }
    });
});
