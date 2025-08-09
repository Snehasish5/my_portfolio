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

  document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("projectsContainer");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
  
    function updateButtonsVisibility() {
      const tolerance = 2;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
  
      prevBtn.style.display = container.scrollLeft <= tolerance ? "none" : "flex";
      nextBtn.style.display = container.scrollLeft >= maxScrollLeft - tolerance ? "none" : "flex";
    }
  
    function scrollProjects(direction) {
      const firstCard = container.querySelector(".project-card");
      if (!firstCard) return;
  
      const containerStyle = getComputedStyle(container);
      const gap = parseInt(containerStyle.columnGap) || 0; // Assuming horizontal gap
      
      const cardWidth = firstCard.offsetWidth + gap;
      const scrollAmount = direction === "next" ? cardWidth : -cardWidth;
  
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  
    if (prevBtn && nextBtn && container) {
      prevBtn.addEventListener("click", () => scrollProjects("prev"));
      nextBtn.addEventListener("click", () => scrollProjects("next"));
  
      [prevBtn, nextBtn].forEach(btn => {
        btn.addEventListener("keydown", e => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            btn.click();
          }
        });
      });
  
      container.addEventListener("scroll", updateButtonsVisibility);
      updateButtonsVisibility();
    }
  });  