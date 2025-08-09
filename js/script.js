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
  
    // Show or hide buttons based on scroll position
    function updateButtonsVisibility() {
      prevBtn.style.display = container.scrollLeft <= 0 ? "none" : "flex";
  
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      nextBtn.style.display = container.scrollLeft >= maxScrollLeft - 1 ? "none" : "flex";
    }
  
    // Scroll by one card width on button click
    function scrollProjects(direction) {
      const firstCard = container.querySelector(".project-card");
      if (!firstCard) return;
  
      const cardStyle = getComputedStyle(firstCard);
      const marginRight = parseInt(cardStyle.marginRight) || 0;
      const marginLeft = parseInt(cardStyle.marginLeft) || 0;
      const gap = marginLeft + marginRight;
  
      const cardWidth = firstCard.offsetWidth + gap;
      const scrollAmount = direction === "next" ? cardWidth : -cardWidth;
  
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  
    if (prevBtn && nextBtn && container) {
      prevBtn.addEventListener("click", () => scrollProjects("prev"));
      nextBtn.addEventListener("click", () => scrollProjects("next"));
  
      // Keyboard accessibility
      [prevBtn, nextBtn].forEach(btn => {
        btn.addEventListener("keydown", e => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            btn.click();
          }
        });
      });
  
      container.addEventListener("scroll", updateButtonsVisibility);
  
      // Initial check to hide/show buttons
      updateButtonsVisibility();
    }
  });  