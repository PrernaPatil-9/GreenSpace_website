// GSAP Animations for all pages
gsap.registerPlugin(ScrollTrigger);

class PageAnimations {
    constructor() {
        this.initAnimations();
    }

    initAnimations() {
        // Hero section animations
        this.animateHero();
        
        // Stagger animations for cards and sections
        this.animateStaggerItems();
        
        // Scroll trigger animations
        this.animateOnScroll();
        
        // Parallax effects
        this.initParallax();
        
        // Page transition animations
        this.pageTransition();
    }

    animateHero() {
        // Hero text animations
        gsap.from('.hero-title', {
            duration: 1.2,
            y: 100,
            opacity: 0,
            ease: "back.out(0.7)",
            delay: 0.3
        });
        
        gsap.from('.hero-subtitle', {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: "power2.out",
            delay: 0.6
        });
        
        gsap.from('.hero-button', {
            duration: 0.8,
            scale: 0,
            opacity: 0,
            ease: "back.out(0.8)",
            delay: 0.9
        });
    }

    animateStaggerItems() {
        // Stagger animation for cards
        const staggerItems = document.querySelectorAll('.stagger-item');
        
        staggerItems.forEach((item, index) => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                delay: index * 0.1,
                ease: "power2.out"
            });
        });
        
        // Special stagger for service cards
        const serviceCards = document.querySelectorAll('.service-card');
        if (serviceCards.length > 0) {
            gsap.from(serviceCards, {
                scrollTrigger: {
                    trigger: '.services-grid',
                    start: "top 80%",
                },
                scale: 0.9,
                opacity: 0,
                stagger: 0.15,
                duration: 0.8,
                ease: "back.out(0.6)"
            });
        }
        
        // Project cards stagger
        const projectCards = document.querySelectorAll('.project-card');
        if (projectCards.length > 0) {
            gsap.from(projectCards, {
                scrollTrigger: {
                    trigger: '.projects-grid',
                    start: "top 80%",
                },
                y: 60,
                opacity: 0,
                stagger: 0.1,
                duration: 0.7,
                ease: "power3.out"
            });
        }
    }

    animateOnScroll() {
        // Fade up animation for sections
        gsap.utils.toArray('.fade-up').forEach((element, i) => {
            gsap.from(element, {
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                y: 40,
                opacity: 0,
                duration: 1,
                delay: i * 0.1,
                ease: "power3.out"
            });
        });
        
        // Slide in from left
        gsap.utils.toArray('.slide-left').forEach((element, i) => {
            gsap.from(element, {
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%"
                },
                x: -60,
                opacity: 0,
                duration: 0.8,
                delay: i * 0.1,
                ease: "back.out(0.5)"
            });
        });
        
        // Slide in from right
        gsap.utils.toArray('.slide-right').forEach((element, i) => {
            gsap.from(element, {
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%"
                },
                x: 60,
                opacity: 0,
                duration: 0.8,
                delay: i * 0.1,
                ease: "back.out(0.5)"
            });
        });
        
        // Scale up animation
        gsap.utils.toArray('.scale-up').forEach((element) => {
            gsap.from(element, {
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%"
                },
                scale: 0.8,
                opacity: 0,
                duration: 0.8,
                ease: "elastic.out(1, 0.5)"
            });
        });
    }

    initParallax() {
        // Parallax effect for hero section
        gsap.to('.parallax-bg', {
            scrollTrigger: {
                trigger: '.hero-section',
                start: "top top",
                end: "bottom top",
                scrub: true
            },
            y: 100,
            ease: "none"
        });
        
        // Parallax for images
        gsap.utils.toArray('.parallax-img').forEach(img => {
            gsap.to(img, {
                scrollTrigger: {
                    trigger: img,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                },
                y: 50,
                ease: "none"
            });
        });
    }

    pageTransition() {
        // Page load transition
        gsap.from('body', {
            duration: 0.8,
            opacity: 0,
            ease: "power2.inOut"
        });
        
        // Animate navigation items on page load
        gsap.from('.nav-link', {
            duration: 0.6,
            y: -30,
            opacity: 0,
            stagger: 0.1,
            delay: 0.2,
            ease: "back.out(0.6)"
        });
        
        // Animate footer on load
        gsap.from('footer', {
            scrollTrigger: {
                trigger: 'footer',
                start: "top bottom",
                toggleActions: "play none none reverse"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        });
    }
}

// Hover animations for cards
function addHoverAnimations() {
    const cards = document.querySelectorAll('.service-card, .project-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
}

// Button hover animations
function addButtonAnimations() {
    const buttons = document.querySelectorAll('.btn-primary, .filter-btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, {
                scale: 1.05,
                duration: 0.2,
                ease: "power2.out"
            });
        });
        
        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                scale: 1,
                duration: 0.2,
                ease: "power2.out"
            });
        });
    });
}

// Number counter animation
function animateNumbers() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const updateCount = () => {
            const target = parseInt(counter.getAttribute('data-target'));
            const count = parseInt(counter.innerText);
            const increment = target / 50;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCount();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(counter);
    });
}

// Initialize all animations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new PageAnimations();
    addHoverAnimations();
    addButtonAnimations();
    animateNumbers();
});

// Smooth scroll for anchor links
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