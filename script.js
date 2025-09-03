// Mobile navigation toggle
const toggleButton = document.querySelector('.nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (toggleButton && mobileMenu) {
    toggleButton.addEventListener('click', () => {
        const isOpen = toggleButton.getAttribute('aria-expanded') === 'true';
        toggleButton.setAttribute('aria-expanded', String(!isOpen));
        mobileMenu.hidden = isOpen;
        mobileMenu.setAttribute('aria-hidden', String(isOpen));
    });
}

// Intersection Observer for reveal animations
const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

revealElements.forEach((el) => observer.observe(el));

// Dynamic year in footer
const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

// Header shadow on scroll
const header = document.querySelector('.site-header');
let lastY = 0;
window.addEventListener('scroll', () => {
    const currentY = window.scrollY || window.pageYOffset;
    if (header) {
        header.style.background = currentY > 6 ? 'rgba(0,0,0,0.75)' : 'rgba(0,0,0,0.7)';
    }
    lastY = currentY;
});

