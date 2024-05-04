const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Function to toggle dark mode and store preference
function toggleDarkMode() {
    const darkModeEnabled = localStorage.getItem('darkMode') === 'enabled';
    body.classList.toggle('dark-mode', darkModeEnabled);
    darkModeToggle.checked = darkModeEnabled;
}

// Apply dark mode on page load
toggleDarkMode();

// Event listener for dark mode toggle
darkModeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode', darkModeToggle.checked);
    // Store user preference in localStorage
    localStorage.setItem('darkMode', darkModeToggle.checked ? 'enabled' : 'disabled');
});