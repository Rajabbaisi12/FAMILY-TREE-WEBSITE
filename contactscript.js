// JavaScript
//document.addEventListener("DOMContentLoaded", function() {
  //  const inputFields = document.querySelectorAll(".input-box input, .input-box textarea");
  
    // Add focus and blur events for input fields
    //inputFields.forEach(function(inputField) {
      //inputField.addEventListener("focus", function() {
        //this.parentNode.querySelector("label").style.top = "-10px";
        //this.parentNode.querySelector(".icon").style.color = "#4285f4";
//      });
  
  //    inputField.addEventListener("blur", function() {
    //    if (this.value === "") {
      //    this.parentNode.querySelector("label").style.top = "10px";
//          this.parentNode.querySelector(".icon").style.color = "#aaa";
  //      }
//      });
//    });
//  });
  
  

  // Function to handle responsiveness
//function handleResponsive() {
  // Example: If the viewport width is less than 600px, adjust some styles
  //const viewportWidth = window.innerWidth;

//  if (viewportWidth < 600) {
      // Example: Modify styles for smaller screens
      // This is just an example; adjust styles according to your layout needs
  //    document.querySelector('.logo').style.fontSize = '18px';
      // Adjust other styles as needed for smaller screens
//  } else {
      // Reset styles for larger screens
      // Example: Reset the logo font size to default
  //    document.querySelector('.logo').style.fontSize = '24px';
      // Reset other styles as needed for larger screens
//  }
//}

// Event listener for window resize
//window.addEventListener('resize', () => {
  // Call the function to handle responsiveness
  //handleResponsive();
//});

// Initial call to handle responsiveness on page load
//handleResponsive();

//sending the message


// When the document is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the arrow-up element
  var arrowUp = document.getElementById('arrowUp');

  // Show the button when scrolling down the page
  window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
          arrowUp.classList.add('show');
      } else {
          arrowUp.classList.remove('show');
      }
  });

  // Smooth scroll to the top when the button is clicked
  arrowUp.addEventListener('click', function() {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
});

//sending message
