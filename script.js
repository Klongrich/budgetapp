//Setting current date
const today = new Date().toLocaleDateString();

document.getElementById('current-date').textContent = today;

//Getting user input
const form = document.getElementById('form');
const priceInput = document.getElementById('price');
const amount = document.getElementById('price');
const loc = document.getElementById('location');
const iteam = document.getElementById('iteam');

let total = 0;
let numberOfIeams = 0;

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  total += Number(priceInput.value);
  document.getElementById('display-amount').textContent = total;

  document.getElementById('location-1').textContent = loc.value;
  document.getElementById('iteam-1').textContent = iteam.value;
  document.getElementById('amount-1').textContent = amount.value;
  
  localStorage.setItem('Amount-Spent', total);
});

const resetButton = document.getElementById('reset');

resetButton.addEventListener('click', function() {
	total = 0;
	
	localStorage.setItem('Amount-Spent', 0);
	
	document.getElementById('display-amount').textContent = total;
});

function initializeApp() {
	let amount_spent = localStorage.getItem('Amount-Spent');
	total = Number(amount_spent);
	numberOfIteams = localStorage.getItem('number-of-iteams');
	document.getElementById('display-amount').textContent = amount_spent;
	
	if (numberOfIteams == null)
	{
		console.log("value is not set");
		localStorage.setItem('number-of-iteams', 0);
	}
	else
	{
		console.log("value is set: " + numberOfIteams);
		
	}
	
	console.log(localStorage.getItem('testing'))
	console.log("The webpage has fully loaded!");
}

// 2. Trigger it automatically when the HTML structure is complete
window.addEventListener('DOMContentLoaded', initializeApp);