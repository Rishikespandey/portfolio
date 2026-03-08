document.addEventListener('DOMContentLoaded', () => {

    /* --- Preloader --- */
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 500);
    });

    /* --- Navbar Scroll Effect & Active Links --- */
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    const scrollUpBtn = document.getElementById('scroll-up');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollY = window.pageYOffset;

        // Navbar blur on scroll
        if (scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Back to top button visibility
        if (scrollY > 500) {
            scrollUpBtn.classList.add('show');
        } else {
            scrollUpBtn.classList.remove('show');
        }

        // Active link highlight
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    /* --- Mobile Menu Toggle --- */
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.menu-toggle i');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('nav-active');
        if (navMenu.classList.contains('nav-active')) {
            menuIcon.classList.remove('uil-bars');
            menuIcon.classList.add('uil-times');
        } else {
            menuIcon.classList.remove('uil-times');
            menuIcon.classList.add('uil-bars');
        }
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('nav-active');
            menuIcon.classList.remove('uil-times');
            menuIcon.classList.add('uil-bars');
        });
    });


    /* --- Typing Animation (Hero Section) --- */
    const typingElement = document.querySelector('.typing');
    const roles = ["FullStack Developer", "Problem Solver", "DSA Enthusiast"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeEffect() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50; // Faster backspace
        } else {
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100; // Normal typing
        }

        // Word complete
        if (!isDeleting && charIndex === currentRole.length) {
            typingSpeed = 2000; // Pause at end of word
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 500; // Pause before new word
        }

        setTimeout(typeEffect, typingSpeed);
    }
    
    // Start typing effect slightly after load
    setTimeout(typeEffect, 1500);


    /* --- Intersection Observer for Scroll Animations --- */
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once animated
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elements to animate
    const animateElements = document.querySelectorAll('.fade-in, .slide-up, .fade-in-up, .fade-in-left, .fade-in-right');
    animateElements.forEach(el => observer.observe(el));


    /* --- 3D Background (Three.js) --- */
    initThreeJS();

    /* --- Form Validation and Submission --- */
    const form = document.getElementById('portfolio-form');
    const successMsg = document.getElementById('success-message');
    
    // Setup validation on input
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            if (input.parentElement.classList.contains('error') && input.checkValidity()) {
                input.parentElement.classList.remove('error');
            }
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        inputs.forEach(input => {
            if (!input.checkValidity()) {
                input.parentElement.classList.add('error');
                isValid = false;
            } else {
                input.parentElement.classList.remove('error');
            }
        });

        if (isValid) {
            // Simulate form submission delay
            const submitBtn = form.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span>Sending...</span> <i class="uil uil-spinner uil-spin"></i>';
            submitBtn.style.opacity = '0.7';
            submitBtn.disabled = true;

            setTimeout(() => {
                form.style.opacity = '0';
                setTimeout(() => {
                    form.style.display = 'none';
                    successMsg.classList.add('show');
                }, 400);

                // Assuming actual submission via a backend or Formspree would happen here.
                
                // Reset after 3 seconds for demo purposes
                setTimeout(() => {
                    successMsg.classList.remove('show');
                    setTimeout(() => {
                        form.reset();
                        form.style.display = 'block';
                        // Trigger reflow
                        void form.offsetWidth;
                        form.style.opacity = '1';
                        submitBtn.innerHTML = originalText;
                        submitBtn.style.opacity = '1';
                        submitBtn.disabled = false;
                    }, 400);
                }, 4000);

            }, 1000);
        }
    });

    // Set Copyright Year
    document.getElementById('year').textContent = new Date().getFullYear();

});


/* --- Three.js Background Initialization --- */
function initThreeJS() {
    const canvas = document.getElementById('bg3d');
    if (!canvas || typeof THREE === 'undefined') return;

    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create particles/stars
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 700;
    
    const posArray = new Float32Array(particlesCount * 3);
    
    for(let i = 0; i < particlesCount * 3; i++) {
        // Spread particles
        posArray[i] = (Math.random() - 0.5) * 15;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const material = new THREE.PointsMaterial({
        size: 0.015,
        color: 0x6366f1, // Indigo accent color
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, material);
    scene.add(particlesMesh);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX - windowHalfX);
        mouseY = (event.clientY - windowHalfY);
    });

    // Handle Resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Animation Loop
    const clock = new THREE.Clock();

    function animate() {
        requestAnimationFrame(animate);
        
        const elapsedTime = clock.getElapsedTime();

        // Rotate whole particle system slowly
        particlesMesh.rotation.y = elapsedTime * 0.05;
        particlesMesh.rotation.x = elapsedTime * 0.02;

        // Subtle Parallax effect based on mouse
        targetX = mouseX * 0.001;
        targetY = mouseY * 0.001;
        
        particlesMesh.rotation.y += 0.05 * (targetX - particlesMesh.rotation.y);
        particlesMesh.rotation.x += 0.05 * (targetY - particlesMesh.rotation.x);

        renderer.render(scene, camera);
    }

    animate();
}

/* --- 3D Tilt Effect on Project Cards --- */
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element.
        const y = e.clientY - rect.top;  // y position within the element.
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -10; // Max tilt 10deg
        const rotateY = ((x - centerX) / centerX) * 10;
        
        card.style.transform = `perspective(1000px) scale(1.02) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) scale(1) rotateX(0deg) rotateY(0deg)`;
        card.style.transition = 'transform 0.5s ease';
    });
    
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'none'; // Remove transition for smooth mouse tracking
    });
});