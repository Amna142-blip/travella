document.addEventListener('DOMContentLoaded', function() {
    // Navigation menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav ul li a');

    navToggle.addEventListener('change', function() {
        nav.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.checked = false;
            nav.classList.remove('active');
        });
    });

    // Sticky header
    const navbar = document.querySelector('.navbar');
    const logo = document.querySelector('.logo img');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('sticky');
            logo.style.height = '45px';
        } else {
            navbar.classList.remove('sticky');
            logo.style.height = '60px';
        }
    });

    // Form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Collect form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                message: document.getElementById('message').value
            };

            // Here you would typically send the data to a server
            console.log('Form data:', formData);

            // Show success message
            alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
            contactForm.reset();
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animation on scroll
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    animateElements.forEach(element => {
        observer.observe(element);
    });

    // Gallery image click handler
    const galleryItems = document.querySelectorAll('.gallery-item img');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const modal = document.createElement('div');
            modal.className = 'image-modal';
            
            const modalContent = document.createElement('div');
            modalContent.className = 'modal-content';
            
            const img = document.createElement('img');
            img.src = this.src;
            img.alt = this.alt;
            
            const closeBtn = document.createElement('button');
            closeBtn.className = 'close-modal';
            closeBtn.innerHTML = '&times;';
            closeBtn.setAttribute('aria-label', 'إغلاق');
            
            modalContent.appendChild(img);
            modalContent.appendChild(closeBtn);
            modal.appendChild(modalContent);
            document.body.appendChild(modal);
            
            // Prevent body scrolling when modal is open
            document.body.style.overflow = 'hidden';
            
            // Close modal on click
            modal.addEventListener('click', function(e) {
                if (e.target === modal || e.target === closeBtn) {
                    modal.remove();
                    document.body.style.overflow = '';
                }
            });
            
            // Close modal on escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    modal.remove();
                    document.body.style.overflow = '';
                }
            });
        });
    });
});
