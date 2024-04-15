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
function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.(?:com|net|org)$/;
  return emailRegex.test(email);
}

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault(); 
  var firstName = document.getElementById('firstname').value.trim();
  var lastName = document.getElementById('lastname').value.trim();
  var email = document.getElementById('email').value.trim();


  var isValid = true;
  var firstNameError = document.querySelector('.formGroup + .error');
  var lastNameError = document.querySelector('.formGroup + .error');
  var emailError = document.querySelector('.formGroup + .error');

  firstNameError.textContent = '';
  lastNameError.textContent = '';
  emailError.textContent = '';

  if (firstName === '') {
    isValid = false;
    firstNameError.textContent = 'First Name is required';
    showIcon('error-icon', 'firstname');
  }

  if (lastName === '') {
    isValid = false;
    lastNameError.textContent = 'Last Name is required';
    showIcon('error-icon', 'lastname');
  }

  if (email === '') {
    isValid = false;
    emailError.textContent = 'Email Address is required';
    showIcon('error-icon', 'email');
  } else if (!isValidEmail(email)) {
    isValid = false;
    emailError.textContent = 'Invalid Email Address';
    showIcon('error-icon', 'email');
  } else {
    showIcon('success-icon', 'email');
  }

  if (isValid) {

    var signature = document.createElement('div');
    signature.textContent = firstName + ' ' + lastName;
    document.getElementById('names-list').appendChild(signature);


    document.getElementById('form').reset();
  }
});


function showIcon(className, inputId) {
  var iconContainer = document.querySelector('#' + inputId).closest('.formGroup').querySelector('.icon-container');
  var icon = iconContainer.querySelector('.' + className);
  if (icon) {
    icon.style.display = 'inline'; 
  }
  
}
