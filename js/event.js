document.addEventListener("DOMContentLoaded", function() 
{
    const btn = document.querySelector(".input-button");
    const emailInput = document.getElementById("email-input");
    const passwordInput = document.getElementById("password-input");
    const confirmPasswordInput = document.getElementById("confirm-password-input");

  
    btn.addEventListener("mouseover", () => {
      btn.style.backgroundColor = "#0069e2";
      btn.style.fontWeight = "bold";
      btn.style.cursor = "pointer";
    });

    btn.addEventListener("mouseout", () => {
      btn.style.backgroundColor = "#009ee2";
      btn.style.fontWeight = "normal";
      btn.style.cursor = "default";
    });
  
    const googleIcon = document.querySelector(".google");
    googleIcon.addEventListener("mouseover", () => {
      googleIcon.title = "Google";
      enlargeIcon(googleIcon);
      googleIcon.style.cursor = "pointer";
    });

    googleIcon.addEventListener("mouseout", () => {
        restoreIconSize(googleIcon);
      });
  
    const facebookIcon = document.querySelector(".facebook");
    facebookIcon.addEventListener("mouseover", () => {
        facebookIcon.title = "Facebook";
        enlargeIcon(facebookIcon);
        facebookIcon.style.cursor = "pointer";
    });

    facebookIcon.addEventListener("mouseout", () => {
        restoreIconSize(facebookIcon);
      });
  
    const appleIcon = document.querySelector(".apple");
    appleIcon.addEventListener("mouseover", () => {
      appleIcon.title = "Apple";
      enlargeIcon(appleIcon);
      appleIcon.style.cursor = "pointer";
    });

    appleIcon.addEventListener("mouseout", () => {
        restoreIconSize(appleIcon);
      });

    function enlargeIcon(icon) {
        icon.style.transform = "scale(1.2)";
    }
    function restoreIconSize(icon) {
        icon.style.transform = "scale(1)";
    }
    
    const registerLink = document.querySelector(".register-link");
    let originalSize; // To store the original font size
    
    registerLink.addEventListener("mouseover", () => {
        originalSize = window.getComputedStyle(registerLink).fontSize; // Capture the original size
        enlargeText(registerLink);
    });
    
    registerLink.addEventListener("mouseout", () => {
        restoreTextSize(registerLink);
    });
    
    function enlargeText(text) {
        text.style.fontSize = "1.1em"; // Increase font size by 10%
        text.style.cursor = "pointer";
    }
    
    function restoreTextSize(text) {
        text.style.fontSize = originalSize; // Restore the original size
        text.style.cursor = "default";
    }

    btn.addEventListener("click", function(event) {
      if (emailInput.value.trim() === '') {
          event.preventDefault(); // Prevent form submission
          alert("Please enter your email.");
      } else if (!isPasswordStrong(passwordInput.value)) {
          event.preventDefault(); // Prevent form submission
          alert("Please enter a strong password. It should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
      } else if (passwordInput.value !== confirmPasswordInput.value) {
          event.preventDefault(); // Prevent form submission
          alert("Passwords do not match. Please re-enter your password.");
      }
    });

  function isPasswordStrong(password) {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return regex.test(password);
  }
});
  