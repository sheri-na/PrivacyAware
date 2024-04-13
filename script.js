const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const email = document.getElementById('email');
const lastname = document.getElementById('lastname');

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const setSuccess = (element) => { 
    const inputControl = element.parentElement;
    inputControl.classList.remove('error');
    inputControl.classList.add('success');
}

const validateInputs = () => {
    const emailValue = email.value.trim();
    const lastnameValue = lastname.value.trim();
    const firstnameValue = firstname.value.trim();

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) { 
        setError(email, 'Please enter a valid email address');
    } else {
        setSuccess(email); 
    }

    if (lastnameValue === '') {
        setError(lastname, 'Last Name is required');
    } else {
        setSuccess(lastname); 
    }

    if (firstnameValue === '') {
        setError(firstname, 'First Name is required');
    } else {
        setSuccess(firstname); 
    }
};

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

// Validate inputs on input event
firstname.addEventListener('input', validateInputs);
lastname.addEventListener('input', validateInputs);
email.addEventListener('input', validateInputs);