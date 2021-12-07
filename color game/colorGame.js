 var numSquares = 6;
 var colors = generateRandomColor(numSquares);
 var squares = document.querySelectorAll(".square");
 var pickedColor = pickColor();
 var colorDisplay = document.getElementById("colorDisplay");
 var messageDisplay = document.getElementById("message");
 var h1 = document.querySelector("h1");
 var resetButton = document.getElementById("reset");
 var easyBtn = document.querySelector("#easyBtn");
 var hardBtn = document.querySelector("#hardBtn");
 var modeButtons = document.querySelectorAll(".mode");

 for(var i=0; i<modeButtons.length; i++){
     modeButtons[i].addEventListener("click",function(){
         modeButtons[0].classList.remove("selected");
         modeButtons[1].classList.remove("selected");
         this.classList.add("selected");
         if(this.textContent === "Easy"){ // this.textContent === "Easy" ? numSquares = 3 : numSquares = 6 ;
            numSquares = 3;
        }else{
            numSquares = 6;
        }
        reset();
     })
 }

 function reset(){
    //GENERATE ALL NEW COLORS
    colors = generateRandomColor(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent="New colors"
    messageDisplay.textContent="";
    //change color of squares
    for(var i = 0; i<squares.length; i++){
        //add initial colors to squares
        if (colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor=colors[i];
        }else{
            squares[i].style.display="none";
        }
    }
    h1.style.backgroundColor = "steelblue";
 }

resetButton.addEventListener("click",function(){
  reset();
})



 colorDisplay.textContent = pickedColor;
 for(var i = 0; i<squares.length; i++){
     //add initial colors to squares
     squares[i].style.backgroundColor = colors[i];
     //add click listeners ta squares
     squares[i].addEventListener("click",function(){
         //grab color of clicked square
         var clickedColor = this.style.backgroundColor;
         //compare color to pickedcolor
         if(clickedColor === pickedColor){
             messageDisplay.textContent ="correct";
             resetButton.textContent="play again ?";
             changeColors(clickedColor);
             h1.style.backgroundColor = clickedColor;
         }else{
             this.style.backgroundColor ="#232323";
             messageDisplay.textContent = "Try again";
         }
     })
}

function changeColors(color){
    //loop through all squares   
    for(var i=0; i<squares.length; i++){
    //change all colors to match given color
    squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColor(nbr){
    //Make an array
    arr=[];
    // LOOP nbr times
    for(var i=0; i<nbr; i++){
        //get random colors & put them into the array
        arr.push(randomColor());
    }
    return arr;
}
function randomColor(){
    //pick a RED from 0 - 255
    var r = Math.floor(Math.random()*256);
    //pick a GREEN from 0 - 255
    var g = Math.floor(Math.random()*256);
    //pick a BLUE from 0 - 255
    var b = Math.floor(Math.random()*256);
    return "rgb("+ r +", "+ g +", "+ b +")";
}
