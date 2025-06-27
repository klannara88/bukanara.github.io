document.addEventListener('DOMContentLoaded', function() {
    // Login Modal Functionality
    const loginLink = document.getElementById('login-link');
    const loginModal = document.getElementById('loginModal');
    const closeBtn = document.querySelector('.close');
    
    loginLink.addEventListener('click', function(e) {
        e.preventDefault();
        loginModal.style.display = 'block';
    });
    
    closeBtn.addEventListener('click', function() {
        loginModal.style.display = 'none';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });
    
    // Form Submission
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Here you would typically send the data to a server
        console.log('Login attempted with:', { username, password });
        
        // For demo purposes, just show an alert
        alert('Login functionality would connect to backend here. Username: ' + username);
        
        // Close the modal
        loginModal.style.display = 'none';
        
        // Clear the form
        loginForm.reset();
    });
    
    // CTA Button redirect to register
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            window.location.href = 'daftar.html';
        });
    }
    
    // Smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Add hover effects to feature boxes
document.querySelectorAll('.feature-box').forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.style.transform = 'translateY(-10px) scale(1.05)';
        box.style.boxShadow = '0 15px 30px rgba(248, 187, 34, 0.3)';
    });
    
    box.addEventListener('mouseleave', () => {
        box.style.transform = 'translateY(0) scale(1)';
        box.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    });
});

// Add ripple effect to buttons
document.querySelectorAll('.cta-button, .submit-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const x = e.clientX - e.target.getBoundingClientRect().left;
        const y = e.clientY - e.target.getBoundingClientRect().top;
        
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 1000);
    });
});

// Add CSS for ripple effect dynamically
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        background: rgba(255, 255, 255, 0.7);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add parallax effect to promo banner
window.addEventListener('scroll', function() {
    const promoBanner = document.querySelector('.promo-banner');
    const scrollPosition = window.pageYOffset;
    promoBanner.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});

// Add menu item active effect
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        // Create particles effect
        for (let i = 0; i < 5; i++) {
            createParticle(item);
        }
    });
});

function createParticle(element) {
    const particle = document.createElement('span');
    particle.classList.add('menu-particle');
    
    // Position randomly within the menu item
    const rect = element.getBoundingClientRect();
    const x = Math.random() * rect.width;
    const y = Math.random() * rect.height;
    
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    
    // Random size and animation duration
    const size = Math.random() * 5 + 3;
    const duration = Math.random() * 2 + 1;
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.animationDuration = `${duration}s`;
    
    // Random color variation
    const hue = 40 + Math.random() * 20; // Yellow-ish colors
    particle.style.backgroundColor = `hsla(${hue}, 100%, 60%, 0.7)`;
    
    element.appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
        particle.remove();
    }, duration * 1000);
}

// Add CSS for particles dynamically
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    .menu-particle {
        position: absolute;
        border-radius: 50%;
        pointer-events: none;
        animation: particle-float linear forwards;
        z-index: 1;
    }
    
    @keyframes particle-float {
        0% {
            transform: translate(0, 0);
            opacity: 1;
        }
        100% {
            transform: translate(
                ${Math.random() > 0.5 ? '-' : ''}${Math.random() * 30 + 10}px, 
                -${Math.random() * 30 + 10}px
            );
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

// Add click ripple effect to menu items
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function(e) {
        // Remove existing ripples
        const existingRipples = this.querySelectorAll('.menu-ripple');
        existingRipples.forEach(ripple => ripple.remove());
        
        // Create new ripple
        const ripple = document.createElement('span');
        ripple.classList.add('menu-ripple');
        
        // Position ripple at click location
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        this.appendChild(ripple);
        
        // Remove ripple after animation
        setTimeout(() => {
            ripple.remove();
        }, 1000);
    });
});

// Add CSS for ripple effect
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .menu-ripple {
        position: absolute;
        width: 20px;
        height: 20px;
        background: rgba(248, 187, 34, 0.5);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(10);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Create additional sakura petals dynamically
function createSakura() {
    const sakura = document.createElement('div');
    sakura.className = 'sakura';
    sakura.innerHTML = '🌸';
    
    // Random properties
    const left = Math.random() * 100;
    const size = Math.random() * 10 + 15;
    const duration = Math.random() * 10 + 10;
    const delay = Math.random() * 5;
    
    sakura.style.left = `${left}%`;
    sakura.style.fontSize = `${size}px`;
    sakura.style.animationDuration = `${duration}s`;
    sakura.style.animationDelay = `${delay}s`;
    
    // Random rotation direction
    const rotation = Math.random() > 0.5 ? 360 : -360;
    sakura.style.animation = `falling ${duration}s linear ${delay}s infinite`;
    
    document.querySelector('.sakura-container').appendChild(sakura);
    
    // Remove after animation completes
    setTimeout(() => {
        sakura.remove();
    }, (duration + delay) * 1000);
}

// Create initial sakura petals
for (let i = 0; i < 15; i++) {
    setTimeout(createSakura, i * 500);
}

// Continue creating sakura petals periodically
setInterval(() => {
    createSakura();
}, 2000);

// Make sakura petals follow mouse slightly
document.addEventListener('mousemove', (e) => {
    const sakuras = document.querySelectorAll('.sakura');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    sakuras.forEach((sakura, index) => {
        // Calculate different reaction for each petal
        const reaction = (index % 3) * 5;
        sakura.style.transform = `translateX(${(mouseX - 0.5) * reaction}px) translateY(${(mouseY - 0.5) * reaction}px)`;
    });
});