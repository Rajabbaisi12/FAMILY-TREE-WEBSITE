const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});
    
    

// JavaScript to handle video playback and interactions

const video = document.querySelector('video');

if (video) {
  video.addEventListener('click', () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
}

// Optional: Add any additional JavaScript functionalities or interactions for your video

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
  