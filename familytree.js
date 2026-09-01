//javascript code
$(document).ready(function () {
    $('.genealogy-tree ul').hide();
    $('.genealogy-tree > ul').show();
    $('.genealogy-tree ul.active').show();

    $('.genealogy-tree li').on('click', function (e) {
        var children = $(this).find('> ul');
        if (children.is(":visible")) {
            children.hide('fast').removeClass('active');
        } else {
            children.show('fast').addClass('active');
            var headerHeight = $('navigation').outerHeight(); // Replace 'header' with your header's class or ID
            var windowHeight = $(window).height();
            var availableSpace = windowHeight - headerHeight;
            var treeBottom = $(this).offset().top + children.outerHeight();

            if (treeBottom > availableSpace) {
                $('html, body').animate({
                    scrollTop: $(this).offset().top - headerHeight
                }, 'fast');
            }

            children.show('fast').addClass('active');
        }
        e.stopPropagation();
    });
});

   
// Rest of your code remains unchanged


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
  


//new code
$(document).ready(function () {
    const datalist = $('#nameOptions');
    const members = $('.genealogy-tree li');

    // Collect names from the family tree
    const names = members.map(function () {
        return $(this).data('name');
    }).get();

    // Handle input for suggestions
    $('#searchInput').on('input', function () {
        const searchTerm = $(this).val().toLowerCase();

        // Clear existing options
        datalist.empty();

        // Filter names based on input and populate datalist
        const filteredNames = names.filter(name => name.toLowerCase().includes(searchTerm));
        filteredNames.forEach(name => {
            datalist.append(`<option value="${name}">`);
        });

        // Remove existing highlights
        $('.highlight').removeClass('highlight');

        // Highlight matched elements
        members.each(function () {
            const memberName = $(this).data('name').toLowerCase();
            if (memberName.includes(searchTerm)) {
                $(this).find('.member-details h3').addClass('highlight');
            }
        });
    });

    // Scroll to selected person when pressing Enter
    $('#searchInput').on('keypress', function (e) {
        if (e.which === 13) { // Enter key
            const searchTerm = $(this).val().toLowerCase();

            if (searchTerm === "") {
                return;
            }

            // Remove existing highlights
            $('.highlight').removeClass('highlight');

            // Scroll to the first matched element
            members.each(function () {
                const memberName = $(this).data('name').toLowerCase();
                if (memberName.includes(searchTerm)) {
                    $(this).find('.member-details h3').addClass('highlight');

                    // Scroll to the member
                    $('html, body').animate({
                        scrollTop: $(this).offset().top - $('header').outerHeight()
                    }, 'fast');

                    return false; // Stop after finding the first match
                }
            });
        }
    });
});






/*code for searching for a person on the tree
function searchPerson(name) {
    const allMembers = document.querySelectorAll('.member-details h3');
    allMembers.forEach(member => {
        const memberName = member.textContent.trim().toLowerCase();
        if (memberName.includes(name.toLowerCase())) {
            // Highlight the person
            highlightElement(member);

            // Expand the tree to reveal the path
            expandTree(member);
            
            // Scroll to the person
            scrollToElement(member);
        }
    });
}

function expandTree(member) {
    let currentNode = member.parentElement;
    while (currentNode && currentNode !== document.body) {
        if (currentNode.tagName === 'ul' && currentNode.parentElement.tagName === 'li') {
            const parentli = currentNode.parentElement;
            if (parentli.classList.contains('collapsed')) {
                parentli.classList.remove('collapsed');
            }
        }
        currentNode = currentNode.parentElement;
    }
}
*/



//from chartgp 
/*

function updateSuggestions() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const suggestions = document.getElementById('nameSuggestions');
    const memberNames = Array.from(document.querySelectorAll('.member-details h3')).map(member => member.textContent);
    
    // Clear existing suggestions
    suggestions.innerHTML = '';
    
    if (searchInput.length > 0) {
        // Filter member names based on the input
        const filteredNames = memberNames.filter(name => name.toLowerCase().includes(searchInput));
        
        // Create option elements for each filtered name
        filteredNames.forEach(name => {
            const option = document.createElement('option');
            option.value = name;
            suggestions.appendChild(option);
        });
    }
}

function searchFamilyTree() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const memberNames = document.querySelectorAll('.member-details h3');
    
    let found = false;
    memberNames.forEach(member => {
        if (member.textContent.toLowerCase() === searchInput) {
            member.style.color = 'red';
            member.scrollIntoView({ behavior: 'smooth', block: 'center' });
            found = true;
        } else {
            member.style.color = '';
        }
    });
    
    if (!found) {
        alert('Name not found in the family tree.');
    }
} 
*/
