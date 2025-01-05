// script.js

// Function to highlight bold words by changing their color to green
function highlight() {
    // Select all <strong> elements in the document
    const boldWords = document.querySelectorAll('strong');

    // Loop through each bold word and change its color to green
    boldWords.forEach(word => {
        word.style.color = 'green';
    });
}

// Function to revert bold words back to black color
function return_normal() {
    // Select all <strong> elements in the document
    const boldWords = document.querySelectorAll('strong');

    // Loop through each bold word and change its color back to black
    boldWords.forEach(word => {
        word.style.color = 'black';
    });
}
