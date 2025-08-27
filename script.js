// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);
  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = formatNumber(target);
      clearInterval(timer);
    } else {
      element.textContent = formatNumber(Math.floor(start));
    }
  }, 16);
}

function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(0) + "K";
  } else if (num >= 100) {
    return num + "%";
  }
  return num.toString();
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in-up");

      // Animate counters when stats section is visible
      if (entry.target.classList.contains("stats")) {
        animateCounter(document.getElementById("users-count"), 50000);
        animateCounter(document.getElementById("productivity-increase"), 300);
        animateCounter(document.getElementById("time-saved"), 2500000);
        animateCounter(document.getElementById("satisfaction-rate"), 98);
      }
    }
  });
}, observerOptions);

// Observe elements for animations
document.querySelectorAll(".feature-card, .stats, .cta-section").forEach((el) => {
  observer.observe(el);
});

// Add hover effects to feature cards
document.querySelectorAll(".feature-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px) scale(1.02)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";
  });
});

// Parallax effect for hero section
// window.addEventListener("scroll", () => {
//   const scrolled = window.pageYOffset;
//   const hero = document.querySelector(".hero");
//   const rate = scrolled * -0.5;

//   if (hero) {
//     hero.style.transform = `translateY(${rate}px)`;
//   }
// });

// Mobile menu functionality
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuOverlay = document.getElementById("menu-overlay");
const hamburger = document.getElementById("hamburger");

function toggleMobileMenu() {
  mobileMenu.classList.toggle("active");
  menuOverlay.classList.toggle("active");
  hamburger.classList.toggle("active");
  document.body.style.overflow = mobileMenu.classList.contains("active") ? "hidden" : "auto";
}

mobileMenuBtn.addEventListener("click", toggleMobileMenu);
menuOverlay.addEventListener("click", toggleMobileMenu);

// Close mobile menu when clicking on a link
document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    toggleMobileMenu();
  });
});

// Add loading animations
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

// Simulate some dynamic data loading
setTimeout(() => {
  const cards = document.querySelectorAll(".feature-card");
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 100);
  });
}, 500);
