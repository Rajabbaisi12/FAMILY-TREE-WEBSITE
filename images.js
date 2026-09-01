// JavaScript code for image interactivity

// Get all the person elements
const personElements = document.querySelectorAll('.person');

// Add a click event listener to each person element
personElements.forEach((person) => {
  // Get the image, name, phone, and email elements inside each person element
  const image = person.querySelector('img');
  const name = person.querySelector('h3');
  const phone = person.querySelectorAll('p')[0];
  const email = person.querySelectorAll('p')[1];

  // Add a click event listener to the image
  image.addEventListener('click', () => {
    // Toggle a CSS class to show/hide the additional information
    person.classList.toggle('show-info');
  });
});


//for the scroll button
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


// for the search box
const searchInput = document.getElementById('searchInput');
const nameOptions = document.getElementById('nameOptions');

searchInput.addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase().trim();
    const persons = document.querySelectorAll('.person');
    const suggestions = [];

    persons.forEach(person => {
        const personName = person.querySelector('h3').textContent.toLowerCase().trim();
        if (personName.includes(searchTerm) && searchTerm !== '') {
            suggestions.push(person); // Push the person element instead of just the name
        }

        // Check if the search term matches the person's name exactly
         if (personName === searchTerm) {
          // Scroll to the matched person's position on the page
          person.scrollIntoView({ behavior: 'smooth', block: 'start' });

          // Apply a CSS class to change the color of the matched name
          person.classList.add('highlight');
          
          // Remove highlighting from other elements
          persons.forEach(p => {
              if (p !== person) {
                  p.classList.remove('highlight');
              }
          });

          return; // Exit the loop once a match is found
      }
    });

    displaySuggestions(suggestions);
});

// Function to display suggestions in the datalist
function displaySuggestions(suggestions) {
    nameOptions.innerHTML = ''; // Clear previous suggestions

    suggestions.forEach(person => {
        const option = document.createElement('option');
        option.value = person.querySelector('h3').textContent; // Display person name in the dropdown
        nameOptions.appendChild(option);

        option.addEventListener('click', function () {
            scrollToPerson(person.querySelector('h3').textContent);
        });
    });
}

// Function to scroll to the selected person
function scrollToPerson(name) {
    const persons = document.querySelectorAll('.person');

    persons.forEach(person => {
        const personName = person.querySelector('h3').textContent.toLowerCase().trim();

        if (personName === name.toLowerCase().trim()) {
            person.scrollIntoView({ behavior: 'smooth', block: 'start' });

            persons.forEach(p => {
                if (p !== person) {
                    p.classList.remove('highlight');
                }
            });

            person.classList.add('highlight');
        }
    });
}
