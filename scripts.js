function submitForm() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;

  if (name !== '' && email !== '') {
    displayConfirmation(name, email);
  }

  // returning false will keep the page from reloading on submit
    return false;
}

function displayConfirmation(name, email) {
  document.getElementById('confirmation').style.display = 'block';
  document.getElementById('confirmationName').innerHTML = name;
  document.getElementById('confirmationEmail').innerHTML = email;
}

function reset() {
  document.getElementById('survey-form').reset();
  document.getElementById('confirmation').style.display = 'none';
}
