// Dark Mode Toggle
document.getElementById("toggleMode").addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
  
  window.addEventListener('DOMContentLoaded', () => {
    const progresses = document.querySelectorAll('.progress');
    progresses.forEach(bar => {
      const width = bar.style.width;
      bar.style.width = '0';
      setTimeout(() => {
        bar.style.width = width;
      }, 100);
    });
  });
// Dark Mode Toggle
document.getElementById("toggleMode").addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
  
  window.addEventListener('DOMContentLoaded', () => {
    const progresses = document.querySelectorAll('.progress');
    progresses.forEach(bar => {
      const width = bar.style.width;
      bar.style.width = '0';
      setTimeout(() => {
        bar.style.width = width;
      }, 100);
    });
  });

  function toggleMenu() {
    const nav = document.getElementById("navLinks");
    const hamburger = document.querySelector(".hamburger");
  
    if (nav) {
      nav.classList.toggle("show");
  
      // Hide hamburger when menu is open
      if (nav.classList.contains("show")) {
        hamburger.style.display = "none";
      } else {
        hamburger.style.display = "flex";
      }
    }
  }
  
  // Hide hamburger when menu is open, and show it again when clicking outside
  document.addEventListener("click", function (event) {
    const nav = document.getElementById("navLinks");
    const hamburger = document.querySelector(".hamburger");
  
    if (
      nav.classList.contains("show") &&
      !nav.contains(event.target) &&
      !hamburger.contains(event.target)
    ) {
      nav.classList.remove("show");
      hamburger.style.display = "flex";
    }
  });
  
  function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("show");
  }
  
  // Hide nav when link is clicked (for mobile)
  document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
      document.getElementById("navLinks").classList.remove("show");
    });
  });
  
  // Hide nav when clicking outside of it
  document.addEventListener("click", (event) => {
    const nav = document.getElementById("navLinks");
    const hamburger = document.querySelector(".hamburger");
    
    const isClickInsideNav = nav.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);
  
    if (!isClickInsideNav && !isClickOnHamburger) {
      nav.classList.remove("show");
    }
  });  
 
  document.querySelectorAll('.donut-chart').forEach(chart => {
    const percent = chart.getAttribute('data-percent');
    const circle = chart.querySelector('.circle');
    
    const totalLength = 100; // your SVG circle total length
    const offset = totalLength - percent;
  
    circle.style.strokeDasharray = totalLength;
    circle.style.strokeDashoffset = totalLength;
    
    // Trigger animation using setTimeout or requestAnimationFrame
    setTimeout(() => {
      circle.style.transition = 'stroke-dashoffset 2s ease-in-out';
      circle.style.strokeDashoffset = offset;
    }, 100);
  });
  