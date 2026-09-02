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
  


$(document).ready(function () {
    const $searchInput = $('#searchInput');
    const $searchButton = $('#searchButton');
    const $clearSearchButton = $('#clearSearchButton');
    const $datalist = $('#nameOptions');
    const $members = $('.genealogy-tree li');
    const $status = $('#searchStatus');
    const $suggestions = $('#searchSuggestions');
    let activeSuggestionIndex = -1;

    function normalizeName(name) {
        return (name || '').toString().trim().replace(/\s+/g, ' ').toLowerCase();
    }

    $members.each(function () {
        const $member = $(this);
        const personName = $member.find('.member-details h3').first().text().trim();
        if (personName) {
            $member.attr('data-name', personName);
        }
    });

    function clearHighlight() {
        $('.highlight').removeClass('highlight');
    }

    function showStatus(message) {
        $status.text(message || '');
    }

    function hideSuggestions() {
        $suggestions.removeClass('visible').empty();
        activeSuggestionIndex = -1;
    }

    function revealPerson($member) {
        if (!$member || !$member.length) return false;

        clearHighlight();

        $member.parents('ul').show().addClass('active');
        $member.closest('li').show();
        $member.find('.member-details h3').first().addClass('highlight');

        const targetTop = $member.offset().top - $('header').outerHeight() - 30;
        $('html, body').animate({ scrollTop: targetTop }, 'fast');
        return true;
    }

    function findMatchingMember(searchTerm) {
        const value = normalizeName(searchTerm);
        if (!value) return null;

        let bestMatch = null;
        let bestScore = 0;

        $members.each(function () {
            const memberName = normalizeName($(this).attr('data-name'));
            if (!memberName) return;

            if (memberName === value) {
                bestMatch = $(this);
                bestScore = 100;
                return false;
            }

            if (memberName.includes(value)) {
                const score = value.length / memberName.length;
                if (score > bestScore) {
                    bestMatch = $(this);
                    bestScore = score;
                }
            }
        });

        return bestMatch;
    }

    function populateSuggestions(searchTerm) {
        $datalist.empty();
        $suggestions.empty();

        if (!searchTerm) {
            hideSuggestions();
            return [];
        }

        const matches = $members
            .map(function () {
                const name = $(this).attr('data-name');
                if (!name) return null;
                return normalizeName(name).includes(searchTerm) ? name : null;
            })
            .get()
            .filter(Boolean);

        const uniqueMatches = [...new Set(matches)];

        uniqueMatches.forEach(function (name) {
            $datalist.append(`<option value="${name}">`);
            const $button = $('<button type="button" class="search-suggestion">').text(name);
            $button.on('click', function () {
                $searchInput.val(name);
                const selected = findMatchingMember(name);
                if (selected) {
                    revealPerson(selected);
                    showStatus('Showing: ' + selected.attr('data-name'));
                }
                hideSuggestions();
            });
            $suggestions.append($button);
        });

        if (uniqueMatches.length) {
            $suggestions.addClass('visible');
            $suggestions.find('.search-suggestion').first().addClass('active');
            activeSuggestionIndex = 0;
        } else {
            hideSuggestions();
        }

        return uniqueMatches;
    }

    function handleSearch() {
        const searchTerm = $searchInput.val();
        const value = normalizeName(searchTerm);

        if (!value) {
            clearHighlight();
            showStatus('Type a family name to search the tree.');
            hideSuggestions();
            return;
        }

        const match = findMatchingMember(searchTerm);

        if (!match) {
            clearHighlight();
            hideSuggestions();
            showStatus('No matching person found for: ' + searchTerm.trim());
            return;
        }

        revealPerson(match);
        showStatus('Showing: ' + match.attr('data-name'));
        hideSuggestions();
    }

    $searchInput.on('input', function () {
        const searchTerm = normalizeName($(this).val());
        if (!searchTerm) {
            clearHighlight();
            showStatus('');
            hideSuggestions();
            return;
        }

        populateSuggestions(searchTerm);

        const firstMatch = findMatchingMember(searchTerm);
        if (firstMatch) {
            revealPerson(firstMatch);
            showStatus('Showing suggestion: ' + firstMatch.attr('data-name'));
        }
    });

    $searchButton.on('click', handleSearch);
    $clearSearchButton.on('click', function () {
        $searchInput.val('');
        clearHighlight();
        showStatus('');
        hideSuggestions();
    });

    $searchInput.on('keydown', function (event) {
        const suggestionItems = $suggestions.find('.search-suggestion');

        if (event.key === 'Enter') {
            event.preventDefault();
            if (activeSuggestionIndex >= 0 && suggestionItems.length) {
                suggestionItems.eq(activeSuggestionIndex).trigger('click');
            } else {
                handleSearch();
            }
            return;
        }

        if (event.key === 'ArrowDown' && suggestionItems.length) {
            event.preventDefault();
            activeSuggestionIndex = (activeSuggestionIndex + 1) % suggestionItems.length;
            suggestionItems.removeClass('active');
            suggestionItems.eq(activeSuggestionIndex).addClass('active');
            return;
        }

        if (event.key === 'ArrowUp' && suggestionItems.length) {
            event.preventDefault();
            activeSuggestionIndex = (activeSuggestionIndex <= 0) ? suggestionItems.length - 1 : activeSuggestionIndex - 1;
            suggestionItems.removeClass('active');
            suggestionItems.eq(activeSuggestionIndex).addClass('active');
            return;
        }

        if (event.key === 'Escape') {
            hideSuggestions();
            showStatus('');
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
