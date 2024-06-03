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

const form = document.getElementById('form');
const nameList = document.getElementById('nameList');
const emailRegex = /^[^\s@]+@[^\s@]+\.(?:com|net|org|edu|io)$/;

document.getElementById('form').addEventListener('input', function(event) {
  //Email
    if(document.getElementById('email').value.indexOf('@') === -1 || emailRegex.test(document.getElementById('email').value) ===false) {
    document.getElementById('form').getElementsByClassName('error-icon')[2].getElementsByTagName('img')[0].style["display"] = 'inline';
      document.getElementById('form').getElementsByClassName('success-icon')[2].getElementsByTagName('img')[0].style["display"] = 'none';
  }
  else{
    document.getElementById('form').getElementsByClassName('success-icon')[2].getElementsByTagName('img')[0].style["display"] = 'inline';
     document.getElementById('form').getElementsByClassName('error-icon')[2].getElementsByTagName('img')[0].style["display"] = 'none'
  }
  })

document.getElementById('form').addEventListener('input', function(event) {
  // First Name

   if(document.getElementById('firstname').value.length < 2) {
    document.getElementById('form').getElementsByClassName('error-icon')[0].getElementsByTagName('img')[0].style["display"] = 'inline';
      document.getElementById('form').getElementsByClassName('success-icon')[0].getElementsByTagName('img')[0].style["display"] = 'none';
  }
  else{
    document.getElementById('form').getElementsByClassName('success-icon')[0].getElementsByTagName('img')[0].style["display"] = 'inline';
     document.getElementById('form').getElementsByClassName('error-icon')[0].getElementsByTagName('img')[0].style["display"] = 'none'
  }
  })
document.getElementById('form').addEventListener('input', function(event) {
// Last Name 

   if(document.getElementById('lastname').value.length < 2) {
    document.getElementById('form').getElementsByClassName('error-icon')[1].getElementsByTagName('img')[0].style["display"] = 'inline';
      document.getElementById('form').getElementsByClassName('success-icon')[1].getElementsByTagName('img')[0].style["display"] = 'none';
  }
  else{
    document.getElementById('form').getElementsByClassName('success-icon')[1].getElementsByTagName('img')[0].style["display"] = 'inline';
     document.getElementById('form').getElementsByClassName('error-icon')[1].getElementsByTagName('img')[0].style["display"] = 'none'
  }
    })
//Submission
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const firstName = document.getElementById('firstname').value.trim();
  const lastName = document.getElementById('lastname').value.trim();
  const email = document.getElementById('email').value.trim();

  const li = document.createElement('li');
  li.textContent = `${firstName} ${lastName} signed up`;
  li.classList.add('typewriter', 'typewriter-animation');

  nameList.appendChild(li);

  // Reset the form after submission
  form.reset();
});
//Scroll Animations

//Hamburger 

