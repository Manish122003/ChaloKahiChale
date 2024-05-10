document.addEventListener("DOMContentLoaded", function () {
    // Save Personal Information button
    var savePersonalButton = document.getElementById("savePersonalButton");
    savePersonalButton.addEventListener("click", function () {
        alert("Personal information saved!");
    });
  
    // Save Security Information button
    var saveSecurityButton = document.getElementById("saveSecurityButton");
    saveSecurityButton.addEventListener("click", function () {
        alert("Security information saved!");
    });
  
    // Find all clickable elements with the "clickable" class
    var clickableElements = document.querySelectorAll('.clickable');
  
    // Add click event listeners to all clickable elements
    clickableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            // Toggle the "clicked" class on the clicked element
            element.classList.toggle('clicked');
  
            // Remove the "clicked" class from all other clickable elements
            clickableElements.forEach(function (el) {
                if (el !== element) {
                    el.classList.remove('clicked');
                }
            });
        });
    });
  
    // Function to update profile picture
  function updateProfilePicture(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = function (e) {
          document.getElementById('profileImage').src = e.target.result;
      };
      reader.readAsDataURL(file);
  }
  // Function to toggle menu for responsive design
  function toggleMenu() {
      const menuItems = document.querySelectorAll('.menu-item');
      const signInButton = document.querySelector('.h-10');
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
          menuItems.forEach(item => {
              item.classList.add('responsive-item');
          });
          signInButton.classList.add('responsive-signin');
      } else {
          menuItems.forEach(item => {
              item.classList.remove('responsive-item');
          });
          signInButton.classList.remove('responsive-signin');
      }
  }
  // Event listener for window resize to toggle menu
  window.addEventListener('resize', toggleMenu);
  // Call toggleMenu initially to set the initial state
  toggleMenu();
  // Add event listener to the savePersonalButton
  document.getElementById("savePersonalButton").addEventListener("click", function () {
      // Get the input values
      var name = document.querySelector(".div-25").value;
      var dob = document.querySelector(".div-25[type='date']").value;
      var location = document.querySelector(".div-32").value;
      
      // Update s-11, s-14, s-17, s-18 with the new values
      document.querySelector(".s-11").textContent = name;
      document.querySelector(".s-14").textContent = location;
      document.querySelector(".s-17").textContent = dob; // Changed to dob from date_of_birth
      document.querySelector(".s-18").textContent = "Profile Informations Updated";
    });
  });
  
  // Function to redirect to the newsletter subscription page
  function goToNewsletterPage() {
    window.location.href = "newsletter_subscription_page.html";
  }
  
  // Function to redirect to the notification page
  function notificationPage() {
    window.location.href = "notification_Page.html";
  }
  
  // Function to redirect to the profile page
  function profilePage() {
    window.location.href = "profile.html";
  }
  
  
  
  document.addEventListener("DOMContentLoaded", function () {
    var newsletterForm = document.getElementById("newsletterForm");
  
    newsletterForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission
  
        var emailInput = document.getElementById("mail").value;
  
        // You can add your logic here to handle the subscription
        alert("Subscription successful for " + emailInput);
        newsletterForm.reset(); // Reset the form after submission
    });
  });
  
  
  window.addEventListener('resize', function() {
      var btn = document.querySelector('.btn');
      if (window.innerWidth <= 768) {
        btn.style.padding = '8px 16px';
        btn.style.fontSize = '14px';
      } else {
        btn.style.padding = '10px 20px';
        btn.style.fontSize = 'inherit';
      }
    });
  
    
  window.dispatchEvent(new Event('resize'));
  const toggle = document.getElementById('notificationToggle');
  toggle.addEventListener('change', function () {
      if (this.checked) {
        
          alert('Notifications turned ON');
      } else {
          
          alert('Notifications turned OFF');
      }
  });