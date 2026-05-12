// ==================== MOBILE MENU HANDLER ====================
const hamburger = document.getElementById('hamburgerBtn');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// ==================== SIGN IN MODAL HANDLER ====================
const signInBtn = document.getElementById('signInBtn');
const loginModal = document.getElementById('loginModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalOverlay = document.querySelector('.modal-overlay');
const loginForm = document.getElementById('loginForm');

const closeModal = () => {
    if (loginModal) {
        loginModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        if (loginForm) {
            loginForm.reset();
        }
    }
};

if (signInBtn && loginModal) {
    signInBtn.addEventListener('click', event => {
        event.preventDefault();
        loginModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
}

if (modalOverlay) {
    modalOverlay.addEventListener('click', closeModal);
}

document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && loginModal && loginModal.classList.contains('active')) {
        closeModal();
    }
});

// ==================== LOGIN FORM SUBMISSION ====================
if (loginForm) {
    loginForm.addEventListener('submit', event => {
        event.preventDefault();

        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        if (email && password) {
            alert(`Welcome back, ${email.split('@')[0]}! Login successful.`);
            closeModal();
        } else {
            alert('Please fill in all fields.');
        }
    });
}

// ==================== SMOOTH SCROLLING FOR NAV LINKS ====================
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(anchor => {
    anchor.addEventListener('click', event => {
        const href = anchor.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            event.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== SEARCH FUNCTIONALITY ====================
const searchBtn = document.querySelector('.searchBtn');
const searchInput = document.querySelector('.searchBar input');
const cards = document.querySelectorAll('.card');

if (searchBtn && searchInput && cards.length > 0) {
    searchBtn.addEventListener('click', () => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        cards.forEach(card => {
            const cardText = card.querySelector('.card-info').textContent.toLowerCase();
            if (cardText.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

