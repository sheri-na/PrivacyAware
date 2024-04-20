//Toggle
const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');

function toggleDarkMode() {
    if (toggleSwitch.checked) {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
    }
}

toggleSwitch.addEventListener('change', toggleDarkMode);

if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    toggleSwitch.checked = false;
    toggleDarkMode();
}
// Form Validation
