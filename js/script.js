// Created by Graeme
// Created on: April  26
// JS functions for index.html


// This function generates a random number and tells the user if they guessed it
'use strict';
function submit() {
	// Declares variable
	let ranNumber = Math.floor((Math.random() * 6) + 1)
	let userGuess = document.getElementById('guess').value
	
	// If statement for user guess, correct or incorrect 
	if (userGuess == ranNumber) {
		//User guessed the number
		document.getElementById('guess-answer').innerHTML = 'The number was ' + ranNumber + '. You correctly guessed the number! Good job.';
		document.getElementById('invalid').innerHTML = "";
	} else if (userGuess == "") {
		// User did not give an input
		document.getElementById('invalid').innerHTML = "You need to fill in the text field to guess.";
		document.getElementById('guess-answer').innerHTML = "";
	} else if (userGuess > 6) {
		//User guess is too large
		document.getElementById('invalid').innerHTML = "Your guess needs to be an integer and between 1 and 6";
		document.getElementById('guess-answer').innerHTML = "";
	} else if (userGuess < 1) {
		//User guess is too small
		document.getElementById('invalid').innerHTML = "Your guess needs to be an integer and between 1 and 6";
		document.getElementById('guess-answer').innerHTML = "";
	} else {
		//User did not guess the number
		document.getElementById('guess-answer').innerHTML = 'The number was ' + ranNumber + '. You did not guess the number. Try again next time.';
		document.getElementById('invalid').innerHTML = "";
	}
}