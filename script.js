//Setting current date
const today = new Date().toLocaleDateString();

document.getElementById('current-date').textContent = today;

//Getting user input
const form = document.getElementById('form');
const priceInput = document.getElementById('price');
let total = 0;

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  total += Number(priceInput.value);
  document.getElementById('display-amount').textContent = total;
});