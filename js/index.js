function changeCityColor(selectedButton) {
    var buttons = document.querySelectorAll('.city-button');
    buttons.forEach(function (button) {
      if (button === selectedButton) {
        button.style.backgroundColor = '#7bbcb0';
      } else {
        button.style.backgroundColor = '#fff';
      }
    });
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


  document.addEventListener("DOMContentLoaded", function() {
    let item=document.getElementsByClassName("que-container");4
    let show=document.getElementsByClassName("show");
    let hide=document.getElementsByClassName("hide");
    for (let i=0;i<item.length;i++){
      item[i].addEventListener("click",function(){
        let result=item[i].classList.toggle("active");
    
        if(result==true){
          show[i].style.display="none";
          hide[i].style.display="block";
        }
        else{
          show[i].style.display="block";
          hide[i].style.display="none";
        }
      });
    }
    });