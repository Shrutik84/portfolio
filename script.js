// Portfolio Interactive Functionality
document.addEventListener('DOMContentLoaded', function () {
    // 1. Initialize Typed.js dynamic text animation
    if (typeof Typed !== 'undefined' && document.getElementById('element')) {
        new Typed('#element', {
            strings: ['Web developer', 'Web designer', 'Java developer', 'Video Editor'],
            typeSpeed: 50,
            backSpeed: 35,
            backDelay: 1500,
            loop: true
        });
    }

    // 2. Smooth scrolling for navigation anchor links
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

    // 3. Back to Top Button Behavior
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 300) {
                backToTopBtn.style.display = 'flex';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });

        backToTopBtn.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 4. Interactive Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const nameInput = document.getElementById('name');
            const senderName = nameInput ? nameInput.value.trim() : 'there';

            formStatus.className = 'form-status success';
            formStatus.textContent = `Thank you, ${senderName}! Your message has been sent successfully. Shruti will get back to you soon.`;
            formStatus.style.display = 'block';

            contactForm.reset();

            setTimeout(function () {
                formStatus.style.display = 'none';
            }, 6000);
        });
    }

    // 5. Download Resume Action
    const resumeBtn = document.getElementById('resumeBtn');
    if (resumeBtn) {
        resumeBtn.addEventListener('click', function () {
            window.open('https://www.linkedin.com/in/shrutikumari88', '_blank');
        });
    }
});
