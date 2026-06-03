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

function updateEntry(val)
{
    document.getElementById('location-' + val).textContent = loc.value;
    document.getElementById('iteam-' + val).textContent = iteam.value;
    document.getElementById('amount-' + val).textContent = amount.value;
	
	localStorage.setItem('location-' + val, loc.value);
	localStorage.setItem('iteam-' + val, iteam.value);
	localStorage.setItem('amount-' + val, amount.value);
	
	numberOfIteams = val;
	localStorage.setItem('number-of-iteams', val);
}

function updateEntryValue() {
	console.log('number of iteams: ' +  numberOfIteams);
	if (numberOfIteams == 0)
	{
		updateEntry(1);
	}
	else if (numberOfIteams == 1)
	{
	    updateEntry(2);
	}
	else if (numberOfIteams == 2)
	{
		updateEntry(3);
	}
	else if (numberOfIteams == 3)
	{
		updateEntry(4);
	}
}

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  total += Number(priceInput.value);
  
  updateEntryValue();
  document.getElementById('display-amount').textContent = total;
  
  localStorage.setItem('Amount-Spent', total);
});

const resetButton = document.getElementById('reset');

resetButton.addEventListener('click', function() {
	total = 0;
	
	localStorage.setItem('Amount-Spent', 0);
	localStorage.setItem('number-of-iteams', 0);
	
	numberOfIteams = 0;
	document.getElementById('display-amount').textContent = total;
});



function initializeApp() {
	let amount_spent = localStorage.getItem('Amount-Spent');
	total = Number(amount_spent);
	numberOfIteams = localStorage.getItem('number-of-iteams');
	document.getElementById('display-amount').textContent = amount_spent;
	
	if (numberOfIteams == null || numberOfIteams == 0)
	{
		console.log("value is not set or is 0");
		localStorage.setItem('number-of-iteams', 0);
	}
	else
	{
		numberOfIteams = localStorage.getItem('number-of-iteams');
		console.log("value is set: " + numberOfIteams);
		
		for (let i = 0; i < numberOfIteams; i++) {
			let val = i + 1;
			
		    document.getElementById('location-' + val).textContent = localStorage.getItem('location-' + val);
		   	document.getElementById('iteam-' + val).textContent = localStorage.getItem('iteam-' + val);
		   	document.getElementById('amount-' + val).textContent = localStorage.getItem('amount-' + val);
			
			console.log(val);
		}
	}
	console.log(localStorage.getItem('testing'))
	console.log("The webpage has fully loaded!");
}

// 2. Trigger it automatically when the HTML structure is complete
window.addEventListener('DOMContentLoaded', initializeApp);