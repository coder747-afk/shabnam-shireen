// Slideshow functionality
class GallerySlideshow {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.slide');
        this.dots = document.querySelectorAll('.dot');
        this.prevBtn = document.querySelector('.prev-arrow');
        this.nextBtn = document.querySelector('.next-arrow');
        this.currentSlideDisplay = document.querySelector('.current-slide');
        this.totalSlidesDisplay = document.querySelector('.total-slides');
        
        this.init();
    }

    init() {
        // Set total slides
        this.totalSlidesDisplay.textContent = this.slides.length;
        
        // Event listeners
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        // Dot navigation
        this.dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                const slideIndex = parseInt(dot.dataset.slide);
                this.goToSlide(slideIndex);
            });
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.prevSlide();
            } else if (e.key === 'ArrowRight') {
                this.nextSlide();
            }
        });

        // Touch swipe support
        this.addSwipeSupport();

        // Auto-play (optional - uncomment to enable)
        // this.startAutoPlay();
    }

    goToSlide(index) {
        // Pause all videos when changing slides
        this.pauseAllVideos();

        // Remove active class from current slide and dot
        this.slides[this.currentSlide].classList.remove('active');
        this.dots[this.currentSlide].classList.remove('active');

        // Update current slide index
        this.currentSlide = index;

        // Add active class to new slide and dot
        this.slides[this.currentSlide].classList.add('active');
        this.dots[this.currentSlide].classList.add('active');

        // Update counter
        this.currentSlideDisplay.textContent = this.currentSlide + 1;

        // Add animation effect
        this.animateSlideChange();
    }

    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(nextIndex);
    }

    prevSlide() {
        const prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.goToSlide(prevIndex);
    }

    pauseAllVideos() {
        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
            video.pause();
        });
    }

    animateSlideChange() {
        const activeSlide = this.slides[this.currentSlide];
        activeSlide.style.animation = 'none';
        setTimeout(() => {
            activeSlide.style.animation = '';
        }, 10);
    }

    addSwipeSupport() {
        let touchStartX = 0;
        let touchEndX = 0;
        const slideshow = document.querySelector('.slideshow-wrapper');

        slideshow.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        slideshow.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        });

        this.handleSwipe = () => {
            const swipeThreshold = 50;
            if (touchStartX - touchEndX > swipeThreshold) {
                this.nextSlide();
            } else if (touchEndX - touchStartX > swipeThreshold) {
                this.prevSlide();
            }
        };
    }

    startAutoPlay(interval = 5000) {
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, interval);

        // Pause autoplay on hover
        const slideshow = document.querySelector('.slideshow-wrapper');
        slideshow.addEventListener('mouseenter', () => {
            clearInterval(this.autoPlayInterval);
        });

        slideshow.addEventListener('mouseleave', () => {
            this.startAutoPlay(interval);
        });
    }
}

// Parallax effect for background blobs
class ParallaxEffect {
    constructor() {
        this.blobs = document.querySelectorAll('.blob');
        this.init();
    }

    init() {
        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;

            this.blobs.forEach((blob, index) => {
                const speed = (index + 1) * 15;
                const x = (mouseX - 0.5) * speed;
                const y = (mouseY - 0.5) * speed;

                blob.style.transform = `translate(${x}px, ${y}px)`;
            });
        });
    }
}

// Sparkle effect on hover
class SparkleEffect {
    constructor() {
        this.init();
    }

    init() {
        const mediaWrappers = document.querySelectorAll('.media-wrapper');
        
        mediaWrappers.forEach(wrapper => {
            wrapper.addEventListener('mouseenter', (e) => {
                this.createSparkles(e.currentTarget);
            });
        });
    }

    createSparkles(element) {
        const sparkles = ['✨', '💫', '⭐', '🌟'];
        const sparkle = document.createElement('span');
        sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
        sparkle.style.position = 'absolute';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.fontSize = '1.5rem';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.animation = 'sparkleFloat 1s ease-out forwards';
        
        element.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }
}

// Add sparkle float animation
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkleFloat {
        0% {
            opacity: 0;
            transform: translateY(0) scale(0);
        }
        50% {
            opacity: 1;
            transform: translateY(-20px) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-40px) scale(0);
        }
    }
`;
document.head.appendChild(style);

// Smooth scroll reveal animation
class ScrollReveal {
    constructor() {
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1
        });

        const elements = document.querySelectorAll('.glass-note, .media-wrapper');
        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
}

// Cursor trail effect (optional kawaii feature)
class CursorTrail {
    constructor() {
        this.trail = [];
        this.maxTrail = 10;
        this.init();
    }

    init() {
        document.addEventListener('mousemove', (e) => {
            this.createTrailDot(e.pageX, e.pageY);
        });
    }

    createTrailDot(x, y) {
        const emojis = ['💕', '💖', '💗', '💓', '💝', '🌸', '🌺', '🦋'];
        const dot = document.createElement('div');
        dot.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        dot.style.position = 'absolute';
        dot.style.left = x + 'px';
        dot.style.top = y + 'px';
        dot.style.fontSize = '1rem';
        dot.style.pointerEvents = 'none';
        dot.style.zIndex = '9999';
        dot.style.opacity = '0.7';
        dot.style.animation = 'fadeOut 1s ease-out forwards';
        
        document.body.appendChild(dot);
        
        this.trail.push(dot);
        
        if (this.trail.length > this.maxTrail) {
            const oldDot = this.trail.shift();
            oldDot.remove();
        }
        
        setTimeout(() => {
            dot.remove();
        }, 1000);
    }
}

// Add fade out animation
const fadeOutStyle = document.createElement('style');
fadeOutStyle.textContent = `
    @keyframes fadeOut {
        0% {
            opacity: 0.7;
            transform: scale(1) translateY(0);
        }
        100% {
            opacity: 0;
            transform: scale(0.5) translateY(-20px);
        }
    }
`;
document.head.appendChild(fadeOutStyle);

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Initialize all features
document.addEventListener('DOMContentLoaded', () => {
    new GallerySlideshow();
    new ParallaxEffect();
    new SparkleEffect();
    new ScrollReveal();
    // Uncomment to enable cursor trail
    // new CursorTrail();
    
    console.log('✨ Gallery loaded successfully! ✨');
});

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        // Easter egg activated!
        const cursorTrail = new CursorTrail();
        alert('✨ Kawaii mode activated! ✨');
        konamiCode = [];
    }
});
