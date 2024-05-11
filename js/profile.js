// JavaScript for the Main(new) page

// Wait for the DOM to be fully loaded before executing JavaScript
document.addEventListener("DOMContentLoaded", function () {
  
    // Event listener for saving personal information
    var savePersonalButton = document.getElementById("savePersonalButton");
    savePersonalButton.addEventListener("click", function () {
      alert("Personal information saved!");
    });
  
    // Event listener for saving security information
    var saveSecurityButton = document.getElementById("saveSecurityButton");
    saveSecurityButton.addEventListener("click", function () {
      alert("Security information saved!");
    });
  
    // Function to update profile picture when a file is selected
    function updateProfilePicture(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById('profileImage').src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  
    // Event listener for saving personal information (updating profile information)
    document.getElementById("savePersonalButton").addEventListener("click", function () {
      var name = document.querySelector(".div-25").value;
      var dob = document.querySelector(".div-25[type='date']").value;
      var location = document.querySelector(".div-32").value;
  
      document.querySelector(".s-11").textContent = name;
      document.querySelector(".s-14").textContent = location;
      document.querySelector(".s-17").textContent = dob; 
      document.querySelector(".s-18").textContent = "Profile Information Updated";
    });
  });
  
  // Function to navigate to the newsletter subscription page
  function goToNewsletterPage() {
    window.location.href = "newsletter_subscription_page.html";
  }
  
  // Function to navigate to the notification page
  function notificationPage() {
    window.location.href = "notification_Page.html";
  }
  
  // Function to navigate to the profile page
  function profilePage() {
    window.location.href = "new.html";
  }
  



  // JavaScript for the newsletter subscription page
  document.addEventListener("DOMContentLoaded", function () {
    var newsletterForm = document.getElementById("newsletterForm");
  
    // Event listener for the newsletter subscription form submission
    newsletterForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission behavior
  
      var emailInput = document.getElementById("mail").value;
  
      // Alert the user about successful subscription and reset the form
      alert("Subscription successful for " + emailInput);
      newsletterForm.reset(); 
    });
  });



  
  // JavaScript for the notification page
  document.addEventListener("DOMContentLoaded", function() {
    const accordionBtn = document.getElementById("accordionBtn");
    const accordionContent = document.querySelector(".accordion-content");
  
    // Toggle the visibility of the accordion content when the accordion button is clicked
    if (accordionBtn && accordionContent) {
      accordionBtn.addEventListener("click", function() {
        accordionContent.classList.toggle("active");
      });
    } else {
      console.error("Accordion button or content not found.");
    }
  });