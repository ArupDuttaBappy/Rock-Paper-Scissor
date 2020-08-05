let userScore=0;
let compScore=0;
let winMess=""
let logo1=""
let logo2=""
const result_span=document.getElementById("result");
const logo1_span=document.getElementById("logo1");
const logo2_span=document.getElementById("logo2");

const userScore_span=document.getElementById("user-score");
const compScore_span=document.getElementById("AI-score");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");

function computerGame()
{
	choices=['rock','paper','scissor'];
	ooo=choices[Math.floor(Math.random()*3)]
	logo2_span.innerHTML=ooo;
	return ooo;
}



function wins(){
	userScore++;
	winMess="You Win!"
	userScore_span.innerHTML=userScore;
	compScore_span.innerHTML=compScore;
	result_span.innerHTML=winMess	
}
function loses(){
	compScore++;
	winMess="AI Wins!"
	userScore_span.innerHTML=userScore;
	compScore_span.innerHTML=compScore;
	result_span.innerHTML=winMess	
	
}
function drawn(){
	winMess="Match Drawn!"
	userScore_span.innerHTML=userScore;
	compScore_span.innerHTML=compScore;
	result_span.innerHTML=winMess	
	
}
//for USER
function rock(name)
{
    logo1_span.innerHTML=name;
}
function paper(name)
{
	logo1_span.innerHTML=name;
}
function scissor(name)
{
	logo1_span.innerHTML=name;
}
//for COMPUTER



function userGame(userChoice){
const compChoice=computerGame();

switch(userChoice+" "+compChoice)
{
	case "rock scissor":
	case "paper rock":
	case "scissor paper":
	       wins();
	       break;
	case "scissor rock":
	case "rock paper":
	case "paper scissor":
	       loses();
	       break;

	case "scissor scissor":
	case "paper paper":
	case "rock rock":
	       drawn();
	       break;

}
}


function main(){
//or,  document.getElementById("r").addEventListener('click',function()
 rock_div.addEventListener('click',function()//function works on click
 {
	userGame("rock");
	rock("rock");
 })
 paper_div.addEventListener('click',function()
 {
	userGame("paper");
	paper("paper");
 })
 scissor_div.addEventListener('click',function()
 {
	userGame("scissor");
	scissor("scissor");
 })


}

main();
