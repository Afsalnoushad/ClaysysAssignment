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

   function validateFirstName() {
    const firstNameInput = document.getElementById('first-name');
    const firstName = firstNameInput.value.trim();
    const regex = /^[a-zA-Z]+$/;

    if (!regex.test(firstName)) {
        firstNameInput.setCustomValidity('Please enter a valid first name (only alphabets allowed).');
    } else {
        firstNameInput.setCustomValidity('');
    }
}

function redirectToHome() {
    // Redirect to the home page
    window.location.href = "signin.html";
  }
