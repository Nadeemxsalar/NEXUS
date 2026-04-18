// frontend/main.js

// DOM Manipulation Example
function updateDOM() {
    const element = document.getElementById('content');
    element.textContent = 'Hello, World! This text was updated via JS!';
}

// API Call Example
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data'); // Replace with a valid API URL
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Initialize DOM update and fetch data
updateDOM();
fetchData();