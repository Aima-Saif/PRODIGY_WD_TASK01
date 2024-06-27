document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navLinks = navbar.querySelectorAll('.nav-link');


    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.color = '#f39c12';
        });
        link.addEventListener('mouseout', function() {
            this.style.color = '';
        });
    });
});
