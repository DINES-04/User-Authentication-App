const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    let isValid = validate();
    if (isValid) {
        console.log('Form is valid');
        clearInputs(); // Clear inputs after successful submission
    } else {
        const generalError = document.querySelector('#generalError');
        generalError.textContent = "There are errors in the form. Please fix them.";
    }
});

function validate() {
    // Clear previous error messages
    clearErrors();
    const usernameval = username.value.trim();
    const emailval = email.value.trim();
    const passwordval = password.value.trim();
    const cpasswordval = cpassword.value.trim();
    let success = true;

    // Username validation
    if (usernameval === '') {
        success = false;
        seterror(username, 'Username is required');
    } else {
        setsuccess(username);
    }

    // Email validation
    if (emailval === '') {
        success = false;
        seterror(email, 'Email is required');
    } else if (!validateEmail(emailval)) {
        success = false;
        seterror(email, 'Please enter a valid email');
    } else {
        setsuccess(email);
    }

    // Password validation
    if (passwordval === '') {
        success = false;
        seterror(password, 'Password is required');
    } else if (passwordval.length < 8) {
        success = false;
        seterror(password, 'Password must be at least 8 characters long');
    } else if (!uppercase(passwordval)) {
        success = false;
        seterror(password, 'Password must contain at least one uppercase letter');
    } else if (!lowercase(passwordval)) {
        success = false;
        seterror(password, 'Password must contain at least one lowercase letter');
    } else if (!nospecial(passwordval)) {
        success = false;
        seterror(password, 'Password must contain at least one special character');
    } else {
        setsuccess(password);
    }

    // Confirm Password validation
    if (cpasswordval === '') {
        success = false;
        seterror(cpassword, 'Confirm Password is required');
    } else if (passwordval !== cpasswordval) {
        success = false;
        seterror(cpassword, 'Passwords do not match');
    } else {
        setsuccess(cpassword);
    }
    console.log(success);
    return success;
}

function seterror(element, message) {
    const inputgroup = element.parentElement;
    const errorelement = inputgroup.querySelector('.error');

    errorelement.innerText = message;
    inputgroup.classList.add('error');
    inputgroup.classList.remove('success');
}

function setsuccess(element) {
    const inputgroup = element.parentElement;
    const errorelement = inputgroup.querySelector('.error');

    errorelement.innerText = '';
    inputgroup.classList.add('success');
    inputgroup.classList.remove('error');
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

function uppercase(password) {
    return /[A-Z]/.test(password);
}

function lowercase(password) {
    return /[a-z]/.test(password);
}

function nospecial(password) {
    return /[^a-zA-Z0-9]/.test(password);
}

// Function to clear all input fields
function clearInputs() {
    username.value = '';
    email.value = '';
    password.value = '';
    cpassword.value = '';
}

// Clear error messages before validation
function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(element => {
        element.innerText = '';
    });
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach(group => {
        group.classList.remove('error', 'success');
    });
}
