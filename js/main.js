// Mobile Menu Toggle Function
class MobileMenu {
    constructor() {
        this.menuBtn = document.getElementById('menu-btn');
        this.mobileMenu = document.getElementById('mobile-menu');
        this.init();
    }

    init() {
        if (this.menuBtn) {
            this.menuBtn.addEventListener('click', () => {
                this.toggleMenu();
            });
        }
    }

    toggleMenu() {
        this.mobileMenu.classList.toggle('hidden');
        // Animate menu items
        const items = this.mobileMenu.querySelectorAll('a');
        if (!this.mobileMenu.classList.contains('hidden')) {
            items.forEach((item, index) => {
                item.style.animation = `slideIn 0.3s ease forwards ${index * 0.1}s`;
            });
        }
    }
}

// Slideshow Class for Home Page
class Slideshow {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.currentSlide = 0;
        this.interval = null;
        if (this.slides.length > 0) {
            this.init();
        }
    }

    init() {
        this.showSlide(0);
        this.startAutoPlay();
    }

    showSlide(index) {
        this.slides.forEach((slide, i) => {
            slide.style.opacity = '0';
            slide.classList.remove('slide-active');
        });
        this.slides[index].style.opacity = '1';
        this.slides[index].classList.add('slide-active');
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.showSlide(this.currentSlide);
    }

    startAutoPlay() {
        this.interval = setInterval(() => this.nextSlide(), 5000);
    }
}

// Project Filter Class for Projects Page
class ProjectFilter {
    constructor() {
        this.filterBtns = document.querySelectorAll('.filter-btn');
        this.gridContainer = document.getElementById('projects-grid');
        if (this.filterBtns.length > 0 && this.gridContainer) {
            this.init();
        }
    }

    init() {
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.handleFilter(e);
            });
        });
    }

    handleFilter(e) {
        const filter = e.currentTarget.getAttribute('data-filter');
        
        // Update active state
        this.filterBtns.forEach(btn => {
            btn.classList.remove('active', 'bg-[#2E7D32]', 'text-white');
        });
        e.currentTarget.classList.add('active', 'bg-[#2E7D32]', 'text-white');
        
        // Filter projects
        const projects = document.querySelectorAll('.project-item');
        projects.forEach(project => {
            if (filter === 'all' || project.getAttribute('data-category') === filter) {
                project.style.display = 'block';
                gsap.from(project, {
                    opacity: 0,
                    scale: 0.8,
                    duration: 0.5,
                    ease: "back.out(0.5)"
                });
            } else {
                project.style.display = 'none';
            }
        });
    }
}

// Contact Form Handler
class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        if (this.form) {
            this.init();
        }
    }

    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    handleSubmit(e) {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('name')?.value;
        const email = document.getElementById('email')?.value;
        const message = document.getElementById('message')?.value;
        
        // Simple validation
        if (!name || !email || !message) {
            this.showStatus('Please fill in all fields', 'error');
            return;
        }
        
        if (!this.isValidEmail(email)) {
            this.showStatus('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission
        this.showStatus('Sending message...', 'info');
        
        setTimeout(() => {
            this.showStatus('Message sent successfully! We\'ll get back to you soon.', 'success');
            this.form.reset();
        }, 1500);
    }
    
    isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    showStatus(message, type) {
        const statusDiv = document.getElementById('formStatus');
        if (statusDiv) {
            statusDiv.innerHTML = message;
            statusDiv.className = `mt-4 text-center text-sm ${
                type === 'success' ? 'text-green-600' : 
                type === 'error' ? 'text-red-600' : 
                'text-blue-600'
            }`;
            
            setTimeout(() => {
                statusDiv.innerHTML = '';
            }, 5000);
        }
    }
}

// Initialize all components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new MobileMenu();
    new Slideshow();
    new ProjectFilter();
    new ContactForm();
    
    // Set active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active-nav-link');
        }
    });
});