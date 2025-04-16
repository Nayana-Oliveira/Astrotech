const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav');

mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    mobileMenuBtn.innerHTML = nav.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const backToTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('active');
    } else {
        backToTopBtn.classList.remove('active');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const contactForm = document.getElementById('contactForm');
const newsletterForm = document.getElementById('newsletterForm');
const modal = document.querySelector('.modal');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        setTimeout(() => {
            showModal('Mensagem enviada com sucesso!', 'Entraremos em contato em breve.');
            contactForm.reset();
        }, 1000);
    });
}

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        setTimeout(() => {
            showModal('Inscrição realizada!', 'Obrigado por assinar nossa newsletter.');
            newsletterForm.reset();
        }, 1000);
    });
}

function showModal(title, message) {
    const modalContent = modal.querySelector('.modal-content');
    modalContent.innerHTML = `
        <span class="modal-close"><i class="fas fa-times"></i></span>
        <h3>${title}</h3>
        <p>${message}</p>
        <button class="btn primary close-modal">OK</button>
    `;
    
    modal.classList.add('active');
    
    modal.querySelector('.modal-close').addEventListener('click', () => {
        modal.classList.remove('active');
    });
    
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.classList.remove('active');
    });
}

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

const animateOnScroll = () => {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
});