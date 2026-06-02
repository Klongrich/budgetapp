//Setting current date
const today = new Date().toLocaleDateString();

document.getElementById('current-date').textContent = today;

//Getting user input
const form = document.getElementById('form');
const priceInput = document.getElementById('price');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  document.getElementById('display-amount').textContent = priceInput.value;
});