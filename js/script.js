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


  const slider = document.getElementById('projectsContainer');
  let currentIndex = 0;

  function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100} %)`;
    const currentCard = slider.children[currentIndex];
  }

  function nextSlide() {
    if (currentIndex < slider.children.length - 1) {
      currentIndex++;
      updateSlider();
    }
  }

  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  }
