const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  }, { threshold: 0.4 });
  
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el, index) => {
    const delay = 200 * index; // Adjust the delay value as needed (milliseconds)
    setTimeout(() => observer.observe(el), delay);
  });
  