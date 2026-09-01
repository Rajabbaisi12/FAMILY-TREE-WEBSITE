// JavaScript code assuming you have a reference to the signup link element and the container
const container = document.querySelector('.container');
const containerSpan = document.querySelector('.container span');
const loginLink = document.querySelector('.HOME-LOGIN.HTML');
const registerLink = document.querySelector('.HOME-REGISTER.HTML');


HOME-REGISTER.HTML.addEventListener('click',()=>{s
    container.classList.add('active');
});

HOME-LOGIN.HTML.addEventListener('click',()=>{
    container.classList.remove('active');
});


//signupLink.addEventListener('click', function(event) {
  //  event.preventDefault(); // Prevent the default action of the link
    //container.classList.add('active');
//});

// Hide the registration form when the page loads
//document.addEventListener('DOMContentLoaded', function() {
  //  container.classList.remove('active');
//});


//for login authentication
const signupForm = document.querySelector('.form-box.register-box form');
const notification = document.querySelector('.notification');

signupForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally (for demonstration purposes)

    // Get form input values (username, email, password, etc.)
    const username = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelector('input[type="password"]').value;
    const agreeTerms = this.querySelector('input[type="checkbox"]').checked;

    // Basic form validation (you can add more complex validation if needed)
    if (username && email && password && agreeTerms) {
        // Simulating successful registration
        // You would typically send this data to a server to handle user registration
        // For demonstration, this will show a notification after 1 second
        setTimeout(function() {
            notification.style.display = 'block'; // Show the notification
        }, 1000);
    } else {
        // Show an error message or handle validation failures
        console.log('Please fill in all fields and agree to terms.');
    }
});
 