// Navigation Menu Toggle (for mobile)
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
  burger.classList.toggle("toggle");
});

// Simple Testimonial Slider (basic example, can be improved)
const testimonials = document.querySelectorAll(".testimonial");
let currentTestimonial = 0;

function showTestimonial() {
  testimonials.forEach((testimonial, index) => {
    if (index === currentTestimonial) {
      testimonial.style.display = "block";
    } else {
      testimonial.style.display = "none";
    }
  });
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial();
}

// Show the first testimonial initially
if (testimonials.length > 0) {
  showTestimonial();

  // Automatic sliding (adjust interval as needed)
  setInterval(nextTestimonial, 5000);
}

// Example:  Smooth scrolling to sections
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50, // Adjust for header height if needed
        behavior: "smooth",
      });

      // Close the mobile menu if it's open
      if (navLinks.classList.contains("nav-active")) {
        navLinks.classList.remove("nav-active");
        burger.classList.remove("toggle");
      }
    }
  });
});

/*document.addEventListener("DOMContentLoaded", () => {
  const slideshowContainer = document.querySelector(".slideshow-container");
  const slides = document.querySelectorAll(".slide");
  let currentIndex = 0;

  function showNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    slideshowContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  setInterval(showNextSlide, 3000); // Change slide every 3 seconds
}); */

document.addEventListener("DOMContentLoaded", () => {
  const slideshowContainer = document.querySelector(".slideshow-container");
  const slides = document.querySelectorAll(".slide");
  let currentIndex = 0;

  function showNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    slideshowContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  setInterval(showNextSlide, 3000); // Change slide every 3 seconds
});
