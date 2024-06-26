function changeImage(event) {
    var bigImage = document.querySelector('.states-img');
    var bigImageSrc = bigImage.src;
    var clickedImage = event.target;
    var clickedImageSrc = clickedImage.src;
    bigImage.src = clickedImageSrc;
    clickedImage.src = bigImageSrc;
  }

  function changeCityImage(event) {
    var bigImage = document.querySelector('.cities-img');
    var bigImageSrc = bigImage.src;
    var clickedImage = event.target;
    var clickedImageSrc = clickedImage.src;
    bigImage.src = clickedImageSrc;
    clickedImage.src = bigImageSrc;
  }
  
  
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
  
  function scaleHotelCard(element) {
    const allContainers = document.querySelectorAll('.hotel-img');
    allContainers.forEach(container => {
      if (container === element) {
        container.style.transform = 'scale(1.1)';
      } else {
        container.style.transform = 'scale(0.8)';
      }
    });
  }
  
  function resetHotelScale() {
    const allContainers = document.querySelectorAll('.hotel-img');
    allContainers.forEach(container => {
      container.style.transform = 'scale(1)';
    });
  }
  
  
  
  function scaleRestCard(element) {
    const allContainers = document.querySelectorAll('.rest-img');
    allContainers.forEach(container => {
      if (container === element) {
        container.style.transform = 'scale(1.1)';
      } else {
        container.style.transform = 'scale(0.8)';
      }
    });
  }
  
  function resetRestScale() {
    const allContainers = document.querySelectorAll('.rest-img');
    allContainers.forEach(container => {
      container.style.transform = 'scale(1)';
    });
  }