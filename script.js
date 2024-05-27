document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Animation on scroll
    const animateOnScroll = () => {
        const serviceBoxes = document.querySelectorAll('.service-box');
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        const handleAnimation = (items, animationClass) => {
            items.forEach(item => {
                const
