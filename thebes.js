// ==================== HAMBURGER MENU ====================
const hamburger = document.getElementById('hamburgerBtn');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        console.log('Menu toggled');
    });

    // Close menu when a link is clicked
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
} else {
    console.log('Hamburger or nav menu elements not found');
}

// ==================== SIGN IN MODAL ====================
const signInBtn = document.getElementById('signInBtn');
const loginModal = document.getElementById('loginModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalOverlay = document.querySelector('.modal-overlay');
const loginForm = document.getElementById('loginForm');

if (signInBtn && loginModal) {
    // Open modal when Sign In button is clicked
    signInBtn.addEventListener('click', function(e) {
        e.preventDefault();
        loginModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });
}

if (closeModalBtn) {
    // Close modal when close button is clicked
    closeModalBtn.addEventListener('click', function() {
        loginModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        loginForm.reset();
    });
}

if (modalOverlay) {
    // Close modal when overlay is clicked
    modalOverlay.addEventListener('click', function() {
        loginModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        loginForm.reset();
    });
}

// Close modal when Escape key is pressed
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && loginModal && loginModal.classList.contains('active')) {
        loginModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        loginForm.reset();
    }
});

// ==================== LOGIN FORM SUBMISSION ====================
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Basic validation
        if (email && password) {
            console.log('Login attempt with:', { email, password });
            
            // Show success message (in a real app, this would send to server)
            alert(`Welcome back, ${email.split('@')[0]}! Login successful.`);
            
            // Close modal
            loginModal.classList.remove('active');
            document.body.style.overflow = 'auto';
            loginForm.reset();
        } else {
            alert('Please fill in all fields');
        }
    });
}

// ==================== SMOOTH SCROLLING FOR NAVIGATION LINKS ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const element = document.querySelector(href);
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== CONSOLE LOGGING ====================
console.log('LUGX Gaming Platform - All scripts loaded successfully');

