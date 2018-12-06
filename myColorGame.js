
var numSquares=6;
var colors = generateRandomColors(numSquares);//generates the 6 random colors from the array returned in the method
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor(); //this is the goal color harcoded
var colorDisplay = document.querySelector("#colorDisplay");
//YOU HAD A WEIRD PROBLEM HERE FROM USING getElementbyId
var messageDisplay= document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");
var numberOfSquares=6;

colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click",easyFunc); //functions for game difficulties
hardBtn.addEventListener("click",hardFunc);

for (var i=0;i < squares.length;i++)
{
	//add initial colors to squares
	squares[i].style.background=colors[i];
	//add click listeners to squares
	squares[i].addEventListener("click",clickSqaure);
}

//***************//to reset the colors (done differently)
resetButton.addEventListener("click", function (){
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	this.textContent="New Colors";//sets the button text back to new colors
	messageDisplay.textContent=""; //makes the "correct" message go away
	for (var i=0;i<squares.length;i++){
		squares[i].style.background=colors[i];
	}

	h1.style.background="crimson";//so that the header goes to steelblue everytime
})
//&&&&&&&&&&&&&&&

//*************
function easyFunc(){
easyBtn.classList.add("selected");//adds a class to the CSS
hardBtn.classList.remove("selected");//removes class to make it look like u swithcing selections
numSquares=3;
colors=generateRandomColors(numSquares);
pickedColor=pickColor();
colorDisplay.textContent=pickedColor;
for (var i=0;i<squares.length;i++){//this loops thru and sets top 3 and erases bottom 3 squares
if(colors[i])
{
squares[i].style.background=colors[i];//if there's a color it changes it. 
//behind the scenes the array is already changed but this is doing it for the display
}
else
{
squares[i].style.display="none";	//makes bottom squares dissapear
}
}

}
//&&&&&&&&&&&&&&

//*************
function hardFunc(){
hardBtn.classList.add("selected"); 
easyBtn.classList.remove("selected");
numSquares=6;
colors=generateRandomColors(numSquares);
pickedColor=pickColor();
colorDisplay.textContent=pickedColor;
for (var i=0;i<squares.length;i++){
squares[i].style.background=colors[i];
squares[i].style.display= "block";
}

}
//&&&&&&&&&&&&&&



//*****************//this chooses the color to guess
function pickColor(){
var random=Math.floor(Math.random()*colors.length)//picks a number in between 0 and 1 not including 1. 
//if you did Math.random*6 it would give u a number from 0-5 so do a +1 at the end to make it 1-6
//Math.floor removes the decimals
return colors[random];
}
//&&&&&&&&&&&&&&&&&&

//*********************//what happens when u click a sqaure
function clickSqaure (){
//grab color of clicked square
var clickedColor=this.style.background; //keyword this refers to the item clicked on

//compare color to picked color
if (clickedColor===pickedColor)
{
messageDisplay.textContent="Correct!";
changeColors(clickedColor);
h1.style.background=clickedColor;//changes header color to win color
resetButton.textContent="Play Again?";
}
else
{
this.style.background="#232323";//makes square dissapear if u wrong
messageDisplay.textContent="Try Again!";
}

}
//&&&&&&&&&&&&&&&&&&&&

//*********************//this one makes all squares change to correct color
function changeColors(color){
//loop thru all squares
for (var i=0;i<squares.length;i++){
	squares[i].style.background=color;
}
//change color to match given color	
}
//&&&&&&&&&&&&&&&&&&&&&&

//********************//makes the random colors
function generateRandomColors(num){
//make an array
var arr =[];
//add num random colors to array
for (var i=0;i<num;i++){
//get random color and push into arr
arr.push(randomColor());//push adds a new item to an array so 
//because you're using the randomColor method, you are getting an rgb thing returned from it each time
}
//return that array
return arr;
}
//&&&&&&&&&&&&&&&&&

//********************//will generate one random color
function randomColor(){
//pick a red, green, and blue from 0-255
var r=Math.floor(Math.random()*256);	
var g=Math.floor(Math.random()*256);
var b=Math.floor(Math.random()*256);
return "rgb(" + r + ", " + g + ", " + b +")";
//BIG NOTE ABOUT SPACING, the dom changes spacing on rgb so u had to change it here too
}
//&&&&&&&&&&&&&&&&&&&&




