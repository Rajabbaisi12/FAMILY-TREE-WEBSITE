// typing.js
const paragraphs = document.querySelectorAll('#about p');
let index = 0;

// Hide all paragraphs initially
paragraphs.forEach(paragraph => {
    paragraph.style.display = 'none';
});

function typeWriter() {
    const text = paragraphs[index].innerHTML.trim();
    paragraphs[index].style.display = 'inline-block'; // Display paragraph
    paragraphs[index].innerHTML = ''; // Clear existing text

    let i = 0;
    let withinStrongTag = false;
    const typing = setInterval(() => {
        const currentChar = text.charAt(i);

        if (currentChar === '<') {
            const tagEnd = text.indexOf('>', i);
            paragraphs[index].innerHTML += text.slice(i, tagEnd + 1);
            if (text.slice(i, tagEnd + 1) === '<strong>') {
                withinStrongTag = true;
            } else if (text.slice(i, tagEnd + 2) === '</strong>') {
                withinStrongTag = false;
            }
            i = tagEnd + 1;
        } else {
            if (withinStrongTag) {
                paragraphs[index].innerHTML += `<strong>${currentChar}</strong>`;
            } else {
                paragraphs[index].innerHTML += currentChar;
            }
            i++;
        }

        if (i >= text.length) {
            clearInterval(typing);
            index++;
            if (index < paragraphs.length) {
                setTimeout(() => {
                    typeWriter();
                }, 1000); // Start typing next paragraph after 1 sec
            }
        }
    }, 50); // Typing speed (milliseconds)
}

setTimeout(typeWriter, 1000); // Start typing after 1 sec for a blank page effect


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
  
