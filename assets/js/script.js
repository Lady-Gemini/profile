// Initialize Lucide Icons
lucide.createIcons();

// ========== PARTICLE SYSTEM ==========
function createParticles() {
    const container = document.getElementById('particle-container');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;
        const tx = (Math.random() - 0.5) * 200;
        const ty = (Math.random() - 0.5) * 200;
        const delay = Math.random() * 5;
        
        particle.style.left = startX + 'px';
        particle.style.top = startY + 'px';
        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');
        particle.style.animationDelay = delay + 's';
        
        container.appendChild(particle);
    }
}

createParticles();

// ========== TYPING ANIMATION ==========
function typeWriter(element, text, speed = 150) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Start typing animation when page loads
window.addEventListener('load', () => {
    const nameElement = document.getElementById('typed-name');
    if (nameElement) {
        setTimeout(() => {
            typeWriter(nameElement, 'Rida Shahid', 200);
        }, 800);
    }
});

// ========== COUNTER ANIMATION ==========
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Trigger counters on scroll
let countersAnimated = false;
function checkCounters() {
    if (countersAnimated) return;
    
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const rect = counter.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
            const target = parseInt(counter.getAttribute('data-target'));
            animateCounter(counter, target);
            countersAnimated = true;
        }
    });
}

// ========== SKILL BAR ANIMATION ==========
let skillsAnimated = false;
function animateSkills() {
    if (skillsAnimated) return;
    
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
            bar.classList.add('animate');
            skillsAnimated = true;
        }
    });
}

// ========== QUOTE REVEAL ==========
let quoteRevealed = false;
function revealQuote() {
    if (quoteRevealed) return;
    
    const quote = document.querySelector('.quote-reveal');
    if (quote) {
        const rect = quote.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
            quote.classList.add('active');
            quoteRevealed = true;
        }
    }
}

// ========== NAVIGATION ==========
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('bg-stone-950/90', 'backdrop-blur-md', 'shadow-lg', 'border-b', 'border-stone-800', 'py-4');
        navbar.classList.remove('bg-transparent', 'py-6');
    } else {
        navbar.classList.remove('bg-stone-950/90', 'backdrop-blur-md', 'shadow-lg', 'border-b', 'border-stone-800', 'py-4');
        navbar.classList.add('bg-transparent', 'py-6');
    }
    updateActiveLink();
    checkCounters();
    animateSkills();
    revealQuote();
});

// ========== ACTIVE LINK HIGHLIGHTING ==========
const sections = ['home', 'about', 'expertise', 'work', 'contact'];
function updateActiveLink() {
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        const navLink = document.getElementById(`nav-${sectionId}`);
        if (section && navLink) {
            const rect = section.getBoundingClientRect();
            if (rect.top >= -300 && rect.top < 300) {
                document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
                navLink.classList.add('active');
            }
        }
    });
}

// ========== SMOOTH SCROLLING ==========
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// ========== MOBILE MENU TOGGLE ==========
const mobileMenu = document.getElementById('mobile-menu');
const hamburger = document.getElementById('hamburger');
const closeIcon = document.getElementById('close-icon');
let isMenuOpen = false;

function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
        mobileMenu.classList.remove('translate-x-full');
        mobileMenu.classList.add('translate-x-0');
        hamburger.classList.add('hidden');
        closeIcon.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('translate-x-full');
        mobileMenu.classList.remove('translate-x-0');
        hamburger.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }
}

// ========== SCROLL ANIMATIONS (INTERSECTION OBSERVER) ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal-element').forEach(el => {
    observer.observe(el);
});

// ========== INITIALIZE ON LOAD ==========
window.addEventListener('load', () => {
    checkCounters();
    animateSkills();
});

// ========== CURSOR TRAIL EFFECT (Optional Enhancement) ==========
const coords = { x: 0, y: 0 };
const circles = [];
const colors = ["rgba(212, 175, 55, 0.1)", "rgba(212, 175, 55, 0.2)", "rgba(212, 175, 55, 0.3)"];

for (let i = 0; i < 3; i++) {
    const circle = document.createElement("div");
    circle.style.position = "fixed";
    circle.style.width = "20px";
    circle.style.height = "20px";
    circle.style.borderRadius = "50%";
    circle.style.backgroundColor = colors[i];
    circle.style.pointerEvents = "none";
    circle.style.zIndex = "9999";
    circle.style.transition = "transform 0.1s";
    document.body.appendChild(circle);
    circles.push(circle);
}

window.addEventListener("mousemove", (e) => {
    coords.x = e.clientX;
    coords.y = e.clientY;
});

function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    circles.forEach((circle, index) => {
        circle.style.left = x - 10 + "px";
        circle.style.top = y - 10 + "px";
        circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

        const nextCircle = circles[index + 1] || circles[0];
        x += (parseInt(nextCircle.style.left) || coords.x) / 20;
        y += (parseInt(nextCircle.style.top) || coords.y) / 20;
    });

    requestAnimationFrame(animateCircles);
}

animateCircles();
