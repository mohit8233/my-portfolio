document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Navigation Toggle ---
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const navLinks = document.querySelector('.nav-links');

    hamburgerBtn.addEventListener('click', () => {
        // Toggle 'active' class on the nav links menu
        navLinks.classList.toggle('active');
        
        // Toggle 'active' class on the hamburger button (triggers CSS animation)
        hamburgerBtn.classList.toggle('active');
    });

    // --- Close mobile nav when a link is clicked ---
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            // Check if the mobile nav is open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburgerBtn.classList.remove('active'); // Also remove active from button
            }
        });
    });


    // --- Fade-in on Scroll Animation (Same as before) ---
    const sections = document.querySelectorAll('section, header.hero');

    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1 
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

});