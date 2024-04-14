// Get the toggle switch element
const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');

// Function to toggle dark mode
function toggleDarkMode() {
    if (toggleSwitch.checked) {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
    }
}

// Event listener for toggle switch change
toggleSwitch.addEventListener('change', toggleDarkMode);

// Check the initial state of the toggle switch
if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    toggleSwitch.checked = false;
    toggleDarkMode();
}