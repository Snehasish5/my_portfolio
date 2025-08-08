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
    if (nav) {
      nav.classList.toggle("show");
    }
  }
  
  const nav = document.getElementById("navLinks");
  const hamburger = document.querySelector(".hamburger");
  
  function toggleMenu() {
    nav.classList.toggle("show");
  }
  
  hamburger.addEventListener("click", function(event) {
    toggleMenu();
    event.stopPropagation();
  });
  
  nav.addEventListener("click", function(event) {
    event.stopPropagation();
  });
  
  document.addEventListener("click", function() {
    if (nav.classList.contains("show")) {
      nav.classList.remove("show");
    }
  });
  
  document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("show");
    });
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
  