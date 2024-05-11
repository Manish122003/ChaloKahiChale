function scaleCityCard(element) {
    const allContainers = document.querySelectorAll('.city-img1');
    allContainers.forEach(container => {
      if (container === element) {
        container.style.transform = 'scale(1.1)';
      } else {
        container.style.transform = 'scale(0.8)';
      }
    });
  }
  
  function resetCityScale() {
    const allContainers = document.querySelectorAll('.city-img1');
    allContainers.forEach(container => {
      container.style.transform = 'scale(1)';
    });
  }