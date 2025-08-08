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
    const typingElement = document.getElementById("typing-text");
    const originalText = typingElement.textContent.trim();
    const glitchChars = "!@#$%^&*<>?/\\|{}[]~";
    let index = 0;
  
    // Clear the original text before typing
    typingElement.textContent = "";
  
    function glitchEffect(finalChar, callback) {
      let glitchCount = 0;
      const maxGlitches = 5;
  
      function glitch() {
        if (glitchCount < maxGlitches) {
          const randChar = glitchChars.charAt(Math.floor(Math.random() * glitchChars.length));
          if (typingElement.textContent.length === 0) {
            typingElement.textContent = randChar;
          } else {
            typingElement.textContent = typingElement.textContent.slice(0, -1) + randChar;
          }
          glitchCount++;
          setTimeout(glitch, 50);
        } else {
          if (typingElement.textContent.length === 0) {
            typingElement.textContent = finalChar;
          } else {
            typingElement.textContent = typingElement.textContent.slice(0, -1) + finalChar;
          }
          callback();
        }
      }
  
      glitch();
    }
  
    function type() {
      if (index < originalText.length) {
        typingElement.textContent += "_";
        glitchEffect(originalText.charAt(index), () => {
          index++;
          setTimeout(type, 150);
        });
      }
    }
  
    type();
  });  