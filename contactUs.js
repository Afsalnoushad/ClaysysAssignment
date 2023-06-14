  // JavaScript code for form validation using onfocusout method

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    nameInput.addEventListener('focusout', validateName);
    emailInput.addEventListener('focusout', validateEmail);
    subjectInput.addEventListener('focusout', validateSubject);
    messageInput.addEventListener('focusout', validateMessage);

    function validateName() {
      const name = nameInput.value.trim();
      const regex = /^[a-zA-Z\s]+$/;

      if (!regex.test(name)) {
        nameInput.setCustomValidity('Please enter a valid name (only alphabets and spaces allowed).');
      } else {
        nameInput.setCustomValidity('');
      }
    }

    function validateEmail() {
      const email = emailInput.value.trim();
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!regex.test(email)) {
        emailInput.setCustomValidity('Please enter a valid email address.');
      } else {
        emailInput.setCustomValidity('');
      }
    }

    function validateSubject() {
      const subject = subjectInput.value.trim();

      if (subject === '') {
        subjectInput.setCustomValidity('Please enter a subject.');
      } else {
        subjectInput.setCustomValidity('');
      }
    }

    function validateMessage() {
      const message = messageInput.value.trim();

      if (message === '') {
        messageInput.setCustomValidity('Please enter a message.');
      } else {
        messageInput.setCustomValidity('');
      }
    }