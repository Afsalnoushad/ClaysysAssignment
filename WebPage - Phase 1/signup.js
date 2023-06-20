

  // JavaScript code for setting the age according to dob
            
  const dobInput = document.getElementById('dob');
  const ageInput = document.getElementById('age');

  dobInput.addEventListener('change', function() {
      const dob = new Date(this.value);
      const today = new Date();
      const age = today.getFullYear() - dob.getFullYear();
      ageInput.value = age;
  });

  

  // JavaScript code for updating city options based on the selected state
           
  const stateInput = document.getElementById('state');
  const cityInput = document.getElementById('city');
  
  const citiesByState = {
      state1: ['Trivandrum', 'Ernakulam', 'Kozhikode'],
      state2: ['Basavanagudi', 'Indira Nagar', 'Jayanagar'],
      state3: ['Chennai', 'Coimbatore', 'Madurai']
  };
  
  function updateCities() {
      const selectedState = stateInput.value;
      cityInput.innerHTML = ''; 
      
      if (selectedState && citiesByState[selectedState]) {
          citiesByState[selectedState].forEach(city => {
              const option = document.createElement('option');
              option.value = city;
              option.textContent = city;
              cityInput.appendChild(option);
          });
      } else {
          
          const option = document.createElement('option');
          option.value = '';
          option.textContent = 'Select City';
          cityInput.appendChild(option);
      }
  }

  function validateForm(event) {
   event.preventDefault(); 
 
   // Clear previous error messages
   const errorMessages = document.querySelectorAll('.error-message');
   errorMessages.forEach(errorMessage => errorMessage.remove());
 
   
 
   // Validation passed, redirect to the home page
   window.location.href = 'home.html'; 
 }
 
 function displayErrorMessage(message, fieldId) {
   const errorMessage = document.createElement('span');
   errorMessage.classList.add('error-message');
   errorMessage.textContent = message;
   
   const field = document.getElementById(fieldId);
   field.classList.add('invalid');
   field.parentNode.appendChild(errorMessage);
 }

// ... Existing code ...

// Add focus out event listeners to specified fields
document.getElementById('first-name').addEventListener('focusout', function () {
  validateFirstName();
});

document.getElementById('last-name').addEventListener('focusout', function () {
  validateLastName();
});

document.getElementById('phone').addEventListener('focusout', function () {
  validatePhone();
});

document.getElementById('email').addEventListener('focusout', function () {
  validateEmail();
});

document.getElementById('address').addEventListener('focusout', function () {
  validateAddress();
});

document.getElementById('password').addEventListener('focusout', function () {
  validatePassword();
});

document.getElementById('confirm-password').addEventListener('focusout', function () {
  validateConfirmPassword();
});

// Function to validate first name
function validateFirstName() {
  const firstName = document.getElementById('first-name').value.trim();
  const errorMessage = document.getElementById('first-name-error');

  if (firstName === '') {
    errorMessage.textContent = 'Please enter your first name.';
    showErrorMessage('first-name');
  } else if (!/^[A-Za-z]+$/.test(firstName)) {
    errorMessage.textContent = 'First name should contain only letters.';
    showErrorMessage('first-name');
  } else {
    hideErrorMessage('first-name');
  }
}

// Function to validate last name
function validateLastName() {
  const lastName = document.getElementById('last-name').value.trim();
  const errorMessage = document.getElementById('last-name-error');

  if (lastName === '') {
    errorMessage.textContent = 'Please enter your last name.';
    showErrorMessage('last-name');
  } else if (!/^[A-Za-z]+$/.test(lastName)) {
    errorMessage.textContent = 'Last name should contain only letters.';
    showErrorMessage('last-name');
  } else {
    hideErrorMessage('last-name');
  }
}

// Function to validate phone number
function validatePhone() {
  const phone = document.getElementById('phone').value.trim();
  const errorMessage = document.getElementById('phone-error');

  if (phone === '') {
    errorMessage.textContent = 'Please enter your phone number.';
    showErrorMessage('phone');
  } else if (phone.length !== 10 || !/^\d+$/.test(phone)) {
    errorMessage.textContent = 'Phone number should be a 10-digit number.';
    showErrorMessage('phone');
  } else {
    hideErrorMessage('phone');
  }
}

// Function to validate email address
function validateEmail() {
  const email = document.getElementById('email').value.trim();
  const errorMessage = document.getElementById('email-error');

  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === '') {
    errorMessage.textContent = 'Please enter your email address.';
    showErrorMessage('email');
  } else if (!emailRegex.test(email)) {
    errorMessage.textContent = 'Please enter a valid email address.';
    showErrorMessage('email');
  } else {
    hideErrorMessage('email');
  }
}


// Function to validate address
function validateAddress() {
  const address = document.getElementById('address').value.trim();
  const errorMessage = document.getElementById('address-error');

  if (address === '') {
    errorMessage.textContent = 'Please enter your address.';
    showErrorMessage('address');
  } else {
    hideErrorMessage('address');
  }
}


// Function to validate password
function validatePassword() {
  const password = document.getElementById('password').value.trim();
  const errorMessage = document.getElementById('password-error');

  if (password === '') {
    errorMessage.textContent = 'Please enter a password.';
    showErrorMessage('password');
  } else if (password.length < 8) {
    errorMessage.textContent = 'Password should be at least 8 characters long.';
    showErrorMessage('password');
  } else if (!/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
    errorMessage.textContent = 'Password should contain at least one digit and one letter.';
    showErrorMessage('password');
  } else {
    hideErrorMessage('password');
  }
}

// Function to validate confirm password
function validateConfirmPassword() {
  const confirmPassword = document.getElementById('confirm-password').value.trim();
  const errorMessage = document.getElementById('confirm-password-error');
  const password = document.getElementById('password').value.trim();

  if (confirmPassword === '') {
    errorMessage.textContent = 'Please confirm your password.';
    showErrorMessage('confirm-password');
  } else if (password !== confirmPassword) {
    errorMessage.textContent = 'Passwords do not match. Please try again.';
    showErrorMessage('confirm-password');
  } else {
    hideErrorMessage('confirm-password');
  }
}

// Function to show error message and add invalid class
function showErrorMessage(fieldId) {
  const field = document.getElementById(fieldId);
  const errorMessage = document.getElementById(fieldId + '-error');
  field.classList.add('invalid');
  errorMessage.style.display = 'block';
}

// Function to hide error message and remove invalid class
function hideErrorMessage(fieldId) {
  const field = document.getElementById(fieldId);
  const errorMessage = document.getElementById(fieldId + '-error');
  field.classList.remove('invalid');
  errorMessage.style.display = 'none';
}

 
 document.querySelector('form').addEventListener('submit', validateForm);
 