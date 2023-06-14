
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

usernameInput.addEventListener('focusout', validateUsername);
passwordInput.addEventListener('focusout', validatePassword);

function validateUsername() {
  const username = usernameInput.value.trim();

  if (username === '') {
    showError('username', 'Username is required.');
  } else {
    hideError('username');
  }
}

function validatePassword() {
  const password = passwordInput.value.trim();

  if (password === '') {
    showError('password', 'Password is required.');
  } else {
    hideError('password');
  }
}

function showError(field, message) {
  const errorElement = document.getElementById(`${field}-error`);
  errorElement.textContent = message;
}

function hideError(field) {
  const errorElement = document.getElementById(`${field}-error`);
  errorElement.textContent = '';
}