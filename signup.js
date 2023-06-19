

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
  
    // Perform form validation
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const dob = document.getElementById('dob').value;
    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const state = document.getElementById('state').value;
    const city = document.getElementById('city').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
  
    // Validation check
    if (firstName.trim() === '') {
      displayErrorMessage('Please enter your first name.', 'first-name');
      return;
    }
    if (!/^[A-Za-z]+$/.test(firstName.trim())) {
      displayErrorMessage('First name should contain only letters.', 'first-name');
      return;
    }
  
    if (lastName.trim() === '') {
      displayErrorMessage('Please enter your last name.', 'last-name');
      return;
    }
  
    if (!/^[A-Za-z]+$/.test(lastName.trim())) {
      displayErrorMessage('Last name should contain only letters.', 'last-name');
      return;
    }
  
    if (dob.trim() === '') {
      displayErrorMessage('Please enter your date of birth.', 'dob');
      return;
    }
  
    if (age.trim() === '') {
      displayErrorMessage('Please enter your age.', 'age');
      return;
    }
  
    if (!gender) {
      displayErrorMessage('Please select your gender.', 'gender');
      return;
    }
  
    if (phone.trim() === '') {
      displayErrorMessage('Please enter your phone number.', 'phone');
      return;
    }
  
    if (phone.trim().length !== 10 || !/^\d+$/.test(phone.trim())) {
      displayErrorMessage('Phone number should be a 10-digit number.', 'phone');
      return;
    }
  
    if (email.trim() === '') {
      displayErrorMessage('Please enter your email address.', 'email');
      return;
    }
  
    if (address.trim() === '') {
      displayErrorMessage('Please enter your address.', 'address');
      return;
    }
  
    if (state === '') {
      displayErrorMessage('Please select your state.', 'state');
      return;
    }
  
    if (city === '') {
      displayErrorMessage('Please select your city.', 'city');
      return;
    }
  
    if (username.trim() === '') {
      displayErrorMessage('Please enter a username.', 'username');
      return;
    }
  
    if (password.trim() === '') {
      displayErrorMessage('Please enter a password.', 'password');
      return;
    }
  
    if (password.length < 8) {
      displayErrorMessage('Password should be at least 8 characters long.', 'password');
      return;
    }
  
    if (!/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
      displayErrorMessage('Password should contain at least one digit and one letter.', 'password');
      return;
    }
  
    if (confirmPassword.trim() === '') {
      displayErrorMessage('Please confirm your password.', 'confirm-password');
      return;
    }
  
    if (password !== confirmPassword) {
      displayErrorMessage('Passwords do not match. Please try again.', 'confirm-password');
      return;
    }
  
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
  
  document.querySelector('form').addEventListener('submit', validateForm);
  