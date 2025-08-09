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

  const projectsContainer = document.querySelector('.projects-container');
const btnLeft = document.querySelector('.projects-nav.left');
const btnRight = document.querySelector('.projects-nav.right');

if (projectsContainer && btnLeft && btnRight) {
  const scrollAmount = projectsContainer.clientWidth * 0.7;

  // Update buttons disabled state depending on scroll position
  function updateButtons() {
    btnLeft.disabled = projectsContainer.scrollLeft <= 0;
    btnRight.disabled = projectsContainer.scrollLeft + projectsContainer.clientWidth >= projectsContainer.scrollWidth;
    
    btnLeft.style.opacity = btnLeft.disabled ? '0.3' : '0.8';
    btnRight.style.opacity = btnRight.disabled ? '0.3' : '0.8';
    btnLeft.style.cursor = btnLeft.disabled ? 'default' : 'pointer';
    btnRight.style.cursor = btnRight.disabled ? 'default' : 'pointer';
  }

  // Initial check
  updateButtons();

  btnLeft.addEventListener('click', () => {
    if (!btnLeft.disabled) {
      projectsContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  });

  btnRight.addEventListener('click', () => {
    if (!btnRight.disabled) {
      projectsContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  });

  // Update buttons on scroll
  projectsContainer.addEventListener('scroll', updateButtons);
}