// Typed text animation
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Typed.js
  const typed = new Typed('.text', {
    strings: ['NITIAN','Frontend Developer',, 'Full Stack Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });

  // Scroll to top button
  const scrollTopBtn = document.querySelector('.top');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('active');
    } else {
      scrollTopBtn.classList.remove('active');
    }
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        });
        
        // Update active nav link
        document.querySelectorAll('.navbar a').forEach(navLink => {
          navLink.classList.remove('active');
        });
        this.classList.add('active');
      }
    });
  });

  // Update active nav link on scroll
  const sections = document.querySelectorAll('section');
  
  window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.scrollY >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });
    
    document.querySelectorAll('.navbar a').forEach(navLink => {
      navLink.classList.remove('active');
      if (navLink.getAttribute('href') === `#${current}`) {
        navLink.classList.add('active');
      }
    });
  });

  // Skills Animation
  const skillsSection = document.querySelector('.skills-section');
  const progressBars = document.querySelectorAll('.progress-line span');
  const circleProgress = document.querySelectorAll('.circle-progress');

  function animateSkills() {
    const triggerBottom = window.innerHeight * 0.8;
    const skillsTop = skillsSection.getBoundingClientRect().top;

    if (skillsTop < triggerBottom) {
      progressBars.forEach(progress => {
        progress.style.width = progress.dataset.progress;
        progress.style.opacity = 1;
      });

      circleProgress.forEach(circle => {
        const dashoffset = circle.style.strokeDashoffset;
        circle.style.strokeDashoffset = '502';
        
        setTimeout(() => {
          circle.style.strokeDashoffset = dashoffset;
          circle.style.transition = 'stroke-dashoffset 2s ease';
        }, 100);
      });

      // Remove scroll event once animation is triggered
      window.removeEventListener('scroll', animateSkills);
    }
  }

  window.addEventListener('scroll', animateSkills);
  // Trigger animation on page load if skills section is in view
  animateSkills();

  // Form submission
  const contactForm = document.querySelector('.contact-form form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your message! I will get back to you soon.');
      contactForm.reset();
    });
  }
});

// Mobile menu toggle
function toggleMenu() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active');
}