document.addEventListener("DOMContentLoaded", function() {
  
    var savePersonalButton = document.getElementById("savePersonalButton");
  
    
    savePersonalButton.addEventListener("click", function() {
      
        alert("Personal information saved!");
    });
  
    
    var saveSecurityButton = document.getElementById("saveSecurityButton");
  
    
    saveSecurityButton.addEventListener("click", function() {
        
        alert("Security information saved!");
    });
  });