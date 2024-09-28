// scripts.js

// Initialize an array of skills
let skills = ['Python, C++, Java', 'ML, DL for Log Analysis'];

// Function to render skills on the page
function renderSkills() {
    const skillsList = document.getElementById('skills-list');
    skillsList.innerHTML = ''; // Clear existing list
    skills.forEach(skill => {
        const listItem = document.createElement('li');
        listItem.textContent = skill;
        skillsList.appendChild(listItem);
    });
}

// Function to add a new skill
function addSkill() {
    const newSkill = prompt("Enter a new skill:");
    if (newSkill) {
        skills.push(newSkill);
        renderSkills(); // Re-render the skills list
    }
}

// Function to handle navigation to books page
function navigateToBooks() {
    window.location.href = 'Lectures.html'; // Navigate to books.html page
}

// Attach click event to "Reading" link
window.onload = function() {
    renderSkills(); // Initial rendering of skills
    document.getElementById('Lecture Notes').onclick = navigateToBooks; // Attach click event
};
