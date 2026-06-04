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
let drink_total = 0;
let numberOfIeams = 0;

function updateEntry(val)
{	
	container.insertAdjacentHTML('afterbegin', `
      <div class="iteam">
        <p><b>Iteam: ${iteam.value}</b> <span id="iteam-${val}"></span></p>
        <p><b>Amount: ${amount.value}</b> <span id="amount-${val}"></span></p>
        <p><b>Location: ${loc.value}</b> <span id="location-${val}"></span></p>
      </div>
    `);
	
	localStorage.setItem('location-' + val, loc.value);
	localStorage.setItem('iteam-' + val, iteam.value);
	localStorage.setItem('amount-' + val, amount.value);
	
	numberOfIteams = val;
	localStorage.setItem('number-of-iteams', val);
}

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  total += Number(priceInput.value);
  
  updateEntry(Number(numberOfIteams) + 1);
  document.getElementById('display-amount').textContent = total;
  
  localStorage.setItem('Amount-Spent', total);
});

const resetButton = document.getElementById('reset');
const container = document.getElementById('testing');
const drinksContainer = document.getElementById('drinks');
   
resetButton.addEventListener('click', function() {
	total = 0;
	
	localStorage.setItem('Amount-Spent', 0);
	localStorage.setItem('number-of-iteams', 0);
	
	numberOfIteams = 0;
	document.getElementById('display-amount').textContent = total;
});

const drinksButton = document.getElementById('show_drinks');

drinksButton.addEventListener('click', function() {
    drinksContainer.innerHTML = ''; // Wipes old entries before rebuilding the loop
	if (container.style.display == 'none')
	{
		container.style.display = 'flex';
		document.getElementById('drinks_button_text').textContent = 'Show Drinks';
		document.getElementById('display-amount').textContent = total;
	}
	else
	{
		drink_total = 0;
		container.style.display = 'none';
		document.getElementById('drinks_button_text').textContent = 'Show All';
		for (let i = 0; i < numberOfIteams; i++) {
			let val = i + 1;
			
			let item = localStorage.getItem('iteam-' + val);
			let amount = localStorage.getItem('amount-' + val);
			let loc = localStorage.getItem('location-' + val);
			
			if (item == "Drink") 
			{
				drink_total += Number(amount);
				drinksContainer.insertAdjacentHTML('afterbegin', `
				<div class="iteam">
			 		<p><b>Iteam: ${item}</b> <span id="iteam-${val}"></span></p>
			 		<p><b>Amount: $${amount}</b> <span id="amount-${val}"></span></p>
			 		<p><b>Location: ${loc}</b> <span id="location-${val}"></span></p>
			 	</div>
				`);
			}
			console.log(val);
		}
		document.getElementById('display-amount').textContent = drink_total;
 	}
})

const breakfeastButton = document.getElementById('menu');
const goBackButton = document.getElementById('go_back');
const main_div = document.getElementById('main_div');
const menu = document.getElementById('breakfast_menu')

breakfeastButton.addEventListener('click', function() {
	main_div.style.display = 'none';
	menu.style.display = 'block';
})

goBackButton.addEventListener('click', function() {
	main_div.style.display = 'block';
	menu.style.display = 'none';
})

function initializeApp() {
	let amount_spent = localStorage.getItem('Amount-Spent');
	total = Number(amount_spent);
	numberOfIteams = localStorage.getItem('number-of-iteams');
	document.getElementById('display-amount').textContent = amount_spent;
	document.getElementById('drinks_button_text').textContent = 'Show Drinks';
	menu.style.display = 'none';
	
	
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
			
			let item = localStorage.getItem('iteam-' + val);
			let amount = localStorage.getItem('amount-' + val);
			let loc = localStorage.getItem('location-' + val);
			
			container.insertAdjacentHTML('afterbegin', `
		      <div class="iteam">
		        <p><b>Iteam: ${item}</b> <span id="iteam-${val}"></span></p>
		        <p><b>Amount: $${amount}</b> <span id="amount-${val}"></span></p>
		        <p><b>Location: ${loc}</b> <span id="location-${val}"></span></p>
		      </div>
		    `);
			
			console.log(val);
		}
	}
	console.log(localStorage.getItem('testing'))
	console.log("The webpage has fully loaded!");
}

// 2. Trigger it automatically when the HTML structure is complete
window.addEventListener('DOMContentLoaded', initializeApp);