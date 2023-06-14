

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
       cityInput.innerHTML = ''; // Clear previous options
       
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
    event.preventDefault(); // Prevent the form from submitting by default

    // Perform form validation
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var dob = document.getElementById('dob').value;
    var age = document.getElementById('age').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var state = document.getElementById('state').value;
    var city = document.getElementById('city').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    // Validation check
    if (firstName.trim() === '') {
        alert('Please enter your first name.');
        return;
    }

    if (lastName.trim() === '') {
        alert('Please enter your last name.');
        return;
    }

    if (dob.trim() === '') {
        alert('Please enter your date of birth.');
        return;
    }

    if (age.trim() === '') {
        alert('Please enter your age.');
        return;
    }

    if (!gender) {
        alert('Please select your gender.');
        return;
    }

    if (phone.trim() === '') {
        alert('Please enter your phone number.');
        return;
    }

    if (email.trim() === '') {
        alert('Please enter your email address.');
        return;
    }

    if (address.trim() === '') {
        alert('Please enter your address.');
        return;
    }

    if (state === '') {
        alert('Please select your state.');
        return;
    }

    if (city === '') {
        alert('Please select your city.');
        return;
    }

    if (username.trim() === '') {
        alert('Please enter a username.');
        return;
    }

    if (password.trim() === '') {
        alert('Please enter a password.');
        return;
    }

    if (confirmPassword.trim() === '') {
        alert('Please confirm your password.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return;
    }

    window.location.href = 'home.html'; 
}

document.querySelector('form').addEventListener('submit', validateForm);  

  