//variable declare for global use
let firstCard = 3;
let secondCard = 10;
let cards = [firstCard, secondCard]; //array

let sum = firstCard + secondCard;
let hasBlackjack = false;

let cards = [firstCard, secondCard];

let isAlive = true;

let message = "";

let messageEl = document.getElementById("message-el");

let sumEl = document.getElementById("sum-el");

let cardsEl = document.getElementById("cards-el");

function startGame() {
	renderGame();
}

	//function that lets you play
function renderGame() {
	//card counting, showsmup on screen
	cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
	sumEl.textContent = "Sum: " + sum;
	if (sum <= 20) {
	//less than 21
		message = "Do you want to draw a new card?";
		//see newCard() function
	} 

	else if (sum === 21) {
	//21 achieved, game won
		message = "You've got Blackjack!";
		hasBlackjack = true;
	}

	else {
	//bigger than 21, game ends
		message = "You're out of the game!";
		isAlive = false;
	}
	messageEl.textContent = message;
}
	//drawing new card function
function newCard() {
	console.log("Drawing a new card from the deck!");	
	//variable for pulled card
	let card = 6;
	//add to sum
	sum+= card;
	cards.push(card);
	//rerun renderGame()
	renderGame();
}
//cashout time
console.log(hasBlackjack);
console.log(isAlive);
