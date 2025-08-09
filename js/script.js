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

  document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.getElementById('projectsContainer');
    const btnLeft = document.getElementById('prevBtn');
    const btnRight = document.getElementById('nextBtn');
  
    if (!projectsContainer || !btnLeft || !btnRight) {
      console.error('Missing projects container or buttons');
      return;
    }
  
    // Scroll amount per click - about 80% of container width
    const scrollAmount = projectsContainer.clientWidth * 0.8;
  
    function updateButtons() {
      btnLeft.style.opacity = projectsContainer.scrollLeft <= 0 ? '0.3' : '0.8';
      btnLeft.style.pointerEvents = projectsContainer.scrollLeft <= 0 ? 'none' : 'auto';
  
      btnRight.style.opacity = projectsContainer.scrollLeft + projectsContainer.clientWidth >= projectsContainer.scrollWidth - 1 ? '0.3' : '0.8';
      btnRight.style.pointerEvents = projectsContainer.scrollLeft + projectsContainer.clientWidth >= projectsContainer.scrollWidth - 1 ? 'none' : 'auto';
    }
  
    updateButtons();
  
    btnLeft.addEventListener('click', () => {
      projectsContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
  
    btnRight.addEventListener('click', () => {
      projectsContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  
    projectsContainer.addEventListener('scroll', updateButtons);
  
    // Optional: allow keyboard activation on Enter or Space
    [btnLeft, btnRight].forEach(btn => {
      btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          btn.click();
        }
      });
    });
  });  