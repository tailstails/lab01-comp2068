// Name: Taeler Burgess
// Due Date: Sunday, June 6th, 2021
// Lab 1 - JavaScript Frameworks

//Using this to be able to get the prompt-sync module to get user input since I'm using Node.js
const prompt = require('prompt-sync')();

//Initalizing our variables
var userSelection; 
var computerSelection = "";  

//Asking the user to input a value
userSelection = prompt("Please type in either Rock, Paper or Scissors as exactly as shown (first letter cannot be lowercase):");


//This function determines the computer's choice of rock, paper or scissors based on what Math.random() choses
function game(){

    if(Math.random() <= .34){

        computerSelection = "Paper";
    }
    
    if (Math.random() >= .35 && Math.random() <= .67){
    
        computerSelection = "Scissors";
    }
    
    if(Math.random() >= .68 && Math.random() <= 1){
    
        computerSelection = "Rock";
    }

    //returning the result from the computer
    return computerSelection;
}

//This function will determine the results of the game based on the rules of rock, paper, scissors
function gameResults(){

    var finalResults = "";

    //Tie 
    if(userSelection == computerSelection) {

        finalResults = "It's a tie"; 
    }

    //Computer winning
    if (userSelection == "Rock" && computerSelection == "Paper") {

        finalResults = "Computer Wins";
    }

    if(userSelection == "Paper" && computerSelection == "Scissors") {

        finalResults = "Computer Wins";
    }

    if(userSelection == "Scissors" && computerSelection == "Rock") {

        finalResults = "Computer Wins";
    }

    //User Winning
    if (userSelection == "Rock"  && computerSelection == "Scissors") {

        finalResults = "User Wins";
    }

    if(userSelection == "Paper"  && computerSelection == "Rock") {

        finalResults = "User Wins";
    }

    if(userSelection == "Scissors" && computerSelection == "Paper") {

        finalResults = "User Wins";
    }

    //returning the final result based on the rules of the game
    return finalResults;
    
}

//Our outputs 
console.log(userSelection);
console.log(game());
console.log(gameResults());








