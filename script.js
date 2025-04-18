// Update copyright year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Header scroll effect
const header = document.querySelector('.header');
const scrollThreshold = 50;

window.addEventListener('scroll', () => {
    if (window.scrollY > scrollThreshold) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMobile = document.querySelector('.nav-mobile');

menuToggle.addEventListener('click', () => {
    navMobile.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navMobile.contains(e.target)) {
        navMobile.classList.remove('active');
    }
});

// Close mobile menu when clicking a link
const mobileLinks = navMobile.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMobile.classList.remove('active');
    });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const buttonText = submitButton.querySelector('.btn-text');
    const originalText = buttonText.textContent;
    
    // Show loading state
    submitButton.disabled = true;
    buttonText.textContent = 'Sending...';
    
    // Simulate form submission
    try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Reset form
        contactForm.reset();
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
    } catch (error) {
        alert('An error occurred. Please try again later.');
    } finally {
        // Reset button state
        submitButton.disabled = false;
        buttonText.textContent = originalText;
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});