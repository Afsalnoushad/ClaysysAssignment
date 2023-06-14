// Form validation
function validateForm(event) {
  event.preventDefault(); 

  // Get form inputs
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');

  // Get error message elements
  const usernameError = document.getElementById('username-error');
  const passwordError = document.getElementById('password-error');

  // Clear previous error messages
  usernameError.textContent = '';
  passwordError.textContent = '';

  // Perform validation checks
  let isValid = true;

  if (usernameInput.value.trim() === '') {
    usernameError.textContent = 'Please enter your username.';
    isValid = false;
  }

  if (passwordInput.value.trim() === '') {
    passwordError.textContent = 'Please enter your password.';
    isValid = false;
  } else if (passwordInput.value.trim().length < 6) {
    passwordError.textContent = 'Password should contain at least 6 characters.';
    isValid = false;
  }

  // If validation fails, stop execution
  if (!isValid) {
    return;
  }

  // Validation passed, redirect to home page (replace with your desired URL)
  window.location.href = 'home.html';
}

// Add event listener to the form submit button
document.querySelector('form').addEventListener('submit', validateForm);
