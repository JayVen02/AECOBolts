// Enhanced DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize page loader
    initPageLoader();
    
    // Initialize mobile optimizations first
    initMobileOptimizations();
    
    // Initialize all functionality
    initNavigation();
    initScrollAnimations();
    initCarousel();
    initLeaderboardTabs();
    initSmoothScrolling();
    initMobileMenu();
    initTouchFeedback();
    initScrollToTop();
    initIntersectionObserver();
    initParallaxEffects();
    initEnhancedAnimations();
    initLearnMoreButton();
    initScrollIndicator();
    initHeroAnimations();
    initParticleAnimation();
    initAdvancedScrollEffects();
    initButtonEnhancements();
    
    // Update leaderboards with animation
    setTimeout(() => {
        updateLeaderboards();
    }, 1000);
});

// Page Loader
function initPageLoader() {
    // Create page loader if it doesn't exist
    let loader = document.querySelector('.page-loader');
    if (!loader) {
        loader = document.createElement('div');
        loader.className = 'page-loader';
        loader.innerHTML = `
            <div class="loader-content">
                <div class="loader-spinner"></div>
                <h3>Loading AECO BOLTS 2025...</h3>
            </div>
        `;
        document.body.prepend(loader);
    }
    
    // Hide loader after page loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
            document.body.classList.add('page-loaded');
            setTimeout(() => {
                loader.remove();
            }, 500);
        }, 1500);
    });
}

// Advanced Scroll Effects
function initAdvancedScrollEffects() {
    const elements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, Math.random() * 300);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(el => observer.observe(el));
}

// Button Enhancements
function initButtonEnhancements() {
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.cta-button, .nav-link, .social-icon');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Mobile optimizations
function initMobileOptimizations() {
    // Ensure proper viewport meta tag
    let viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) {
        viewportMeta = document.createElement('meta');
        viewportMeta.name = 'viewport';
        document.head.appendChild(viewportMeta);
    }
    viewportMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes';

    // Detect mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
        document.body.classList.add('mobile-device');
    }

    // Handle orientation change
    window.addEventListener('orientationchange', () => {
        setTimeout(() => {
            window.scrollTo(0, 1);
        }, 500);
    });

    // Optimize touch scrolling for mobile
    if (isMobile) {
        document.body.style.webkitOverflowScrolling = 'touch';
        document.body.style.overflowScrolling = 'touch';
    }

    // Prevent double-tap zoom on buttons
    document.addEventListener('touchend', (e) => {
        const clickedElement = e.target;
        if (clickedElement.matches('button, .cta-button, .nav-link, .nav-toggle')) {
            e.preventDefault();
            clickedElement.click();
        }
    });
}

// Enhanced Navigation functionality
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    
    // Enhanced navbar style on scroll with smooth transitions
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 8px 40px rgba(0, 0, 0, 0.12)';
            navbar.style.borderBottom = '1px solid rgba(255, 123, 84, 0.2)';
        } else {
            navbar.classList.remove('scrolled');
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 4px 32px rgba(0, 0, 0, 0.06)';
            navbar.style.borderBottom = '1px solid rgba(255, 123, 84, 0.1)';
        }
    });

    // Enhanced active navigation link highlighting with smooth transitions
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
                // Add a subtle animation when link becomes active
                link.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    link.style.transform = '';
                }, 300);
            }
        });
    });

    // Add smooth scroll behavior to nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for navbar height
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const navMenu = document.getElementById('nav-menu');
                const mobileMenu = document.getElementById('mobile-menu');
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    mobileMenu.classList.remove('active');
                }

                // Add ripple effect
                addRippleEffect(link, e);
            }
        });
    });

    // Add ripple effect function
    function addRippleEffect(element, event) {
        const ripple = document.createElement('span');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple 0.6s linear;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
        `;
        
        element.style.position = 'relative';
        element.style.overflow = 'hidden';
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Enhanced Mobile menu functionality
function initMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!mobileMenu || !navMenu) return;

    // Add touch support variables
    let isMenuOpen = false;
    let touchStartY = 0;
    let touchStartX = 0;

    // Toggle mobile menu with enhanced animations
    mobileMenu.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        toggleMobileMenu();
    });

    function toggleMobileMenu() {
        isMenuOpen = !isMenuOpen;
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open with better positioning
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
            document.body.style.top = `-${window.scrollY}px`;
            
            // Add animation delay for nav links
            navLinks.forEach((link, index) => {
                link.style.opacity = '0';
                link.style.transform = 'translateX(50px)';
                setTimeout(() => {
                    link.style.transition = 'all 0.3s ease';
                    link.style.opacity = '1';
                    link.style.transform = 'translateX(0)';
                }, index * 100 + 200);
            });
        } else {
            const scrollY = document.body.style.top;
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
            document.body.style.top = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
            
            // Reset nav link styles
            navLinks.forEach(link => {
                link.style.transition = '';
                link.style.opacity = '';
                link.style.transform = '';
            });
        }
    }

    // Enhanced touch handling for swipe gestures
    navMenu.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
        touchStartX = e.touches[0].clientX;
    }, { passive: true });

    navMenu.addEventListener('touchmove', (e) => {
        if (!isMenuOpen) return;
        
        const touchY = e.touches[0].clientY;
        const touchX = e.touches[0].clientX;
        const deltaY = touchY - touchStartY;
        const deltaX = touchX - touchStartX;
        
        // Close menu on swipe right (for right-side menu)
        if (deltaX > 50 && Math.abs(deltaY) < 100) {
            toggleMobileMenu();
        }
    }, { passive: true });

    // Close menu when clicking on nav links with better UX
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Add visual feedback
            link.style.transform = 'scale(0.95)';
            setTimeout(() => {
                link.style.transform = '';
            }, 150);
            
            setTimeout(() => {
                if (isMenuOpen) {
                    toggleMobileMenu();
                }
            }, 200);
        });
    });

    // Close menu when clicking outside with improved detection
    document.addEventListener('click', (e) => {
        if (isMenuOpen && !navMenu.contains(e.target) && !mobileMenu.contains(e.target)) {
            toggleMobileMenu();
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isMenuOpen) {
            toggleMobileMenu();
        }
    });

    // Handle window resize with debouncing
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            if (window.innerWidth > 768 && isMenuOpen) {
                toggleMobileMenu();
            }
        }, 100);
    });

    // Add focus trap for accessibility
    function trapFocus(e) {
        if (!isMenuOpen) return;
        
        const focusableElements = navMenu.querySelectorAll(
            'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
        );
        const firstFocusableElement = focusableElements[0];
        const lastFocusableElement = focusableElements[focusableElements.length - 1];

        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusableElement) {
                    lastFocusableElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusableElement) {
                    firstFocusableElement.focus();
                    e.preventDefault();
                }
            }
        }
    }

    document.addEventListener('keydown', trapFocus);
}

// Enhanced touch feedback for mobile buttons
function initTouchFeedback() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    [mobileMenu, ...navLinks].forEach(element => {
        if (!element) return;
        
        element.addEventListener('touchstart', () => {
            element.style.transform = 'scale(0.95)';
        });
        
        element.addEventListener('touchend', () => {
            setTimeout(() => {
                element.style.transform = '';
            }, 150);
        });
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 70;
                const elementPosition = target.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function scrollToSection(sectionId) {
    const target = document.getElementById(sectionId);
    if (target) {
        const headerOffset = 70;
        const elementPosition = target.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

function initLearnMoreButton() {
    const learnMoreBtn = document.getElementById('learn-more-btn');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // console.log('Learn More button clicked'); 
            scrollToSection('description');
        });
        console.log('Learn More button event listener added');
    }
    
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton && !ctaButton.onclick) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            // console.log('CTA button clicked'); 
            scrollToSection('description');
        });
        // console.log('CTA button event listener added');
    }
    
    window.scrollToSection = scrollToSection;
    
    document.addEventListener('click', function(e) {
        const scrollTarget = e.target.getAttribute('data-scroll-target');
        if (scrollTarget) {
            e.preventDefault();
            // console.log('Scrolling to:', scrollTarget); 
            scrollToSection(scrollTarget);
        }
    });
}

function initScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const scrollArrow = document.querySelector('.scroll-arrow');
    
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToSection('description');
        });
        
        // Make it cursor pointer to indicate it's clickable
        scrollIndicator.style.cursor = 'pointer';
    }
    
    if (scrollArrow) {
        scrollArrow.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToSection('description');
        });
        
        // Make it cursor pointer to indicate it's clickable
        scrollArrow.style.cursor = 'pointer';
    }
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Add staggered animation for cards
                if (entry.target.classList.contains('instructions-grid') ||
                    entry.target.classList.contains('speakers-grid') ||
                    entry.target.classList.contains('photo-carousel')) {
                    const children = entry.target.children;
                    Array.from(children).forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('animate');
                        }, index * 150);
                    });
                }
            }
        });
    }, observerOptions);

    // Observe all elements with scroll-animate class
    document.querySelectorAll('.scroll-animate').forEach(el => {
        observer.observe(el);
    });
}

// Photo Carousel functionality
function initCarousel() {
    const carousels = document.querySelectorAll('.carousel-container');
    
    carousels.forEach((carousel, carouselIndex) => {
        const track = carousel.querySelector('.carousel-track');
        const slides = carousel.querySelectorAll('.carousel-slide');
        const prevBtn = carousel.querySelector('.prev-btn');
        const nextBtn = carousel.querySelector('.next-btn');
        const indicators = carousel.querySelectorAll('.indicator');
        
        if (!track || !slides.length) return;
        
        let currentSlide = 0;
        const totalSlides = slides.length;
        
        // Function to update carousel position
        function updateCarousel() {
            const slideWidth = slides[0].offsetWidth;
            track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
            
            // Update active slide
            slides.forEach((slide, index) => {
                slide.classList.toggle('active', index === currentSlide);
            });
            
            // Update indicators
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentSlide);
            });
        }
        
        // Next slide function
        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel();
        }
        
        // Previous slide function
        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateCarousel();
        }
        
        // Event listeners
        if (nextBtn) {
            nextBtn.addEventListener('click', nextSlide);
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', prevSlide);
        }
        
        // Indicator click events
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                currentSlide = index;
                updateCarousel();
            });
        });
        
        // Auto-play carousel (optional)
        let autoPlayInterval = setInterval(nextSlide, 5000);
        
        // Pause auto-play on hover
        if (carousel) {
            carousel.addEventListener('mouseenter', () => {
                clearInterval(autoPlayInterval);
            });
            
            carousel.addEventListener('mouseleave', () => {
                autoPlayInterval = setInterval(nextSlide, 5000);
            });
        }
        
        // Touch/swipe support for mobile
        let startX = 0;
        let endX = 0;
        
        if (carousel) {
            carousel.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
            });
            
            carousel.addEventListener('touchend', (e) => {
                endX = e.changedTouches[0].clientX;
                handleSwipe();
            });
        }
        
        function handleSwipe() {
            const threshold = 50;
            const diff = startX - endX;
            
            if (Math.abs(diff) > threshold) {
                if (diff > 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
            }
        }
        
        // Handle window resize
        window.addEventListener('resize', updateCarousel);
        
        // Initialize carousel
        updateCarousel();
    });
}

// Enhanced hero animations
function initHeroAnimations() {
    const animateElements = document.querySelectorAll('.animate-on-load');
    
    animateElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('loaded');
        }, index * 200);
    });
}

// Leaderboard tabs functionality
function initLeaderboardTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetBoard = button.textContent.toLowerCase().includes('team') ? 'teams' : 'individuals';
            showLeaderboard(targetBoard);
        });
    });
}

function showLeaderboard(boardType) {
    // Update active tab
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const activeTab = boardType === 'teams' ? 0 : 1;
    document.querySelectorAll('.tab-button')[activeTab].classList.add('active');
    
    // Show/hide leaderboard content
    document.querySelectorAll('.leaderboard-content').forEach(content => {
        content.classList.remove('active');
    });
    
    const targetContent = document.getElementById(`${boardType}-leaderboard`);
    if (targetContent) {
        targetContent.classList.add('active');
        
        // Animate leaderboard rows
        const rows = targetContent.querySelectorAll('.leaderboard-row');
        rows.forEach((row, index) => {
            row.style.opacity = '0';
            row.style.transform = 'translateX(-20px)';
            setTimeout(() => {
                row.style.transition = 'all 0.4s ease';
                row.style.opacity = '1';
                row.style.transform = 'translateX(0)';
            }, index * 100);
        });
    }
}

// Update leaderboards with real-time effect
function updateLeaderboards() {
    const teamRows = document.querySelectorAll('#teams-leaderboard .leaderboard-row');
    const individualRows = document.querySelectorAll('#individuals-leaderboard .leaderboard-row');
    
    // Simulate point updates
    setInterval(() => {
        // Randomly update team points
        if (Math.random() > 0.7) {
            const randomTeamRow = teamRows[Math.floor(Math.random() * teamRows.length)];
            const pointsElement = randomTeamRow.querySelector('.points');
            if (pointsElement) {
                const currentPoints = parseInt(pointsElement.textContent);
                const newPoints = currentPoints + Math.floor(Math.random() * 5) + 1;
                animatePointUpdate(pointsElement, newPoints);
            }
        }
        
        // Randomly update individual points
        if (Math.random() > 0.8) {
            const randomIndividualRow = individualRows[Math.floor(Math.random() * individualRows.length)];
            const pointsElement = randomIndividualRow.querySelector('.points');
            if (pointsElement) {
                const currentPoints = parseInt(pointsElement.textContent);
                const newPoints = currentPoints + Math.floor(Math.random() * 3) + 1;
                animatePointUpdate(pointsElement, newPoints);
            }
        }
    }, 5000); // Update every 5 seconds
}

function animatePointUpdate(element, newValue) {
    element.style.transform = 'scale(1.2)';
    element.style.color = '#e74c3c';
    
    setTimeout(() => {
        element.textContent = newValue;
        element.style.transform = 'scale(1)';
        element.style.color = '';
    }, 200);
}

// Scroll to top functionality
function initScrollToTop() {
    // Create scroll to top button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(45deg, #e74c3c, #f39c12);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3);
    `;
    
    document.body.appendChild(scrollTopBtn);
    
    // Show/hide scroll to top button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.visibility = 'visible';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top on click
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effect
    scrollTopBtn.addEventListener('mouseenter', () => {
        scrollTopBtn.style.transform = 'translateY(-2px)';
        scrollTopBtn.style.boxShadow = '0 6px 20px rgba(231, 76, 60, 0.4)';
    });
    
    scrollTopBtn.addEventListener('mouseleave', () => {
        scrollTopBtn.style.transform = 'translateY(0)';
        scrollTopBtn.style.boxShadow = '0 4px 15px rgba(231, 76, 60, 0.3)';
    });
}

// Particle animation for hero section
function initParticleAnimation() {
    const hero = document.querySelector('.hero');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(hero);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: rgba(255, 255, 255, 0.7);
        border-radius: 50%;
        pointer-events: none;
    `;
    
    const x = Math.random() * container.offsetWidth;
    const y = Math.random() * container.offsetHeight;
    const duration = Math.random() * 3 + 2;
    
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    
    container.appendChild(particle);
    
    // Animate particle
    particle.animate([
        { transform: 'translateY(0px)', opacity: 1 },
        { transform: 'translateY(-100px)', opacity: 0 }
    ], {
        duration: duration * 1000,
        iterations: Infinity,
        easing: 'linear'
    });
}

// Task completion simulation
function initTaskCompletion() {
    const taskItems = document.querySelectorAll('.task-item');
    
    taskItems.forEach(task => {
        task.addEventListener('click', () => {
            if (!task.classList.contains('completed')) {
                task.classList.add('completed');
                task.style.opacity = '0.7';
                task.style.background = 'rgba(46, 204, 113, 0.2)';
                
                // Add checkmark
                const checkmark = document.createElement('div');
                checkmark.innerHTML = '<i class="fas fa-check"></i>';
                checkmark.style.cssText = `
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    color: #2ecc71;
                    font-size: 1.2rem;
                `;
                task.style.position = 'relative';
                task.appendChild(checkmark);
                
                // Update points (simulation)
                const pointsElement = task.querySelector('.task-points');
                if (pointsElement) {
                    pointsElement.style.background = '#2ecc71';
                    pointsElement.textContent = '✓ Completed';
                }
            }
        });
    });
}

// Initialize task completion after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initTaskCompletion, 1500);
});

// Speaker card interactions
function initSpeakerInteractions() {
    const speakerCards = document.querySelectorAll('.speaker-card');
    
    speakerCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) rotateY(5deg)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) rotateY(0)';
        });
    });
}

// Timeline animations
function initTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideInFromLeft 0.8s ease forwards';
            }
        });
    }, { threshold: 0.3 });
    
    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });
}

// Add CSS animations for timeline
const timelineStyles = `
    @keyframes slideInFromLeft {
        0% {
            opacity: 0;
            transform: translateX(-50px);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes fadeInUp {
        0% {
            opacity: 0;
            transform: translateY(30px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = timelineStyles;
document.head.appendChild(styleSheet);

// Initialize all additional features
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        initParticleAnimation();
        initSpeakerInteractions();
        initTimelineAnimations();
    }, 2000);
});

// Performance optimization - Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
const throttledScrollHandler = throttle(() => {
}, 16); 

window.addEventListener('scroll', throttledScrollHandler);

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
        });
    });
});

// Accessibility improvements
function initAccessibility() {
    // Add keyboard navigation for interactive elements
    const interactiveElements = document.querySelectorAll('.cta-button, .tab-button, .nav-link');
    
    interactiveElements.forEach(element => {
        element.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                element.click();
            }
        });
    });
    
    // Add focus indicators
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
}

function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.style.animationDelay = '0.1s';
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll(
        '.instruction-card, .speaker-card, .timeline-item, .leaderboard-row, .bring-category'
    );
    
    animateElements.forEach((el, index) => {
        el.classList.add('fade-in-on-scroll');
        el.style.animationDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
}

function initParallaxEffects() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero::before, .hero::after');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Enhanced animations
function initEnhancedAnimations() {
    // Add floating animation to hero image
    const heroImage = document.querySelector('.hero-placeholder');
    if (heroImage) {
        heroImage.style.animation = 'float 3s ease-in-out infinite';
    }

    // Add hover effects to cards
    const cards = document.querySelectorAll('.instruction-card, .speaker-card');
    cards.forEach(card => {
        card.classList.add('card-hover-effect');
        
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });

    const buttons = document.querySelectorAll('.cta-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.overflow = 'hidden';
        });
    });
}

function revealSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.6s ease';
        
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 100);
    }
}

// Particle Animation System
function initParticleAnimation() {
    createParticleContainer();
    setInterval(createParticle, 300);
}

function createParticleContainer() {
    const container = document.createElement('div');
    container.className = 'particle-container';
    container.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
        overflow: hidden;
    `;
    document.body.appendChild(container);
}

function createParticle() {
    const container = document.querySelector('.particle-container');
    if (!container) return;

    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 4 + 2;
    const startX = Math.random() * window.innerWidth;
    const duration = Math.random() * 3000 + 2000;
    
    particle.style.cssText = `
        position: absolute;
        bottom: -10px;
        left: ${startX}px;
        width: ${size}px;
        height: ${size}px;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 50%;
        pointer-events: none;
        animation: floatUp ${duration}ms linear forwards;
    `;
    
    container.appendChild(particle);
    
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, duration);
}

document.addEventListener('DOMContentLoaded', initAccessibility);

const accessibilityStyles = `
    .keyboard-navigation *:focus {
        outline: 2px solid #e74c3c;
        outline-offset: 2px;
    }
`;

const accessibilityStyleSheet = document.createElement('style');
accessibilityStyleSheet.textContent = accessibilityStyles;
document.head.appendChild(accessibilityStyleSheet);