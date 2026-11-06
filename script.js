// Initialize Typed.js dynamic text animation and smooth interactions
document.addEventListener('DOMContentLoaded', function () {
    // Check if Typed.js library is loaded and the target element exists
    if (typeof Typed !== 'undefined' && document.getElementById('element')) {
        new Typed('#element', {
            strings: ['Web developer', 'Web designer', 'Java developer', 'Video Editor'],
            typeSpeed: 50,
            backSpeed: 35,
            backDelay: 1500,
            loop: true
        });
    }

    // Smooth scrolling for navigation anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});
