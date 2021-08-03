
var flipped = false; //Bool used to check if a card has already been flipped
var card1 
var card2

var background1
var background2


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function ResetVars(){
    card1 = null;
    card2 = null;
    background1 = null;
    background2 = null;
    flipped = false;
}
  
async function CheckSimilarities(){
    await sleep(1000);
    if(card1.alt == card2.alt){
       console.log("Yes They Are the Same");
       card1.style.visibility = "hidden";
       card2.style.visibility = "hidden";
       background1.style.visibility = "hidden";
       background2.style.visibility = "hidden";
       ResetVars();

    }
    else
    {
        console.log("They are not the same");
        card1.style.visibility = "hidden";
        card2.style.visibility = "hidden";
        ResetVars();
    }
}


function button1(){
    document.getElementById('Button1').style.display = "block";
    if (flipped == true){
        card2 = document.getElementById("Button1");
        background2 = document.getElementById("B1");
        CheckSimilarities();
    }
    else{
        flipped = true;
        card1 = document.getElementById("Button1");
        background1 = document.getElementById("B1");
    }
    
   
}


function button2(){
document.getElementById('Button2').style.display = "block";
if (flipped == true){
    card2 = document.getElementById("Button2");
    background2 = document.getElementById("B2");
    CheckSimilarities();
}
else{
    flipped = true;
    card1 = document.getElementById("Button2");
    background1 = document.getElementById("B2");
}
    
}

function button3(){

    document.getElementById('Button3').style.display = "block";
    if (flipped == true){
        card2 = document.getElementById("Button3");
        background2 = document.getElementById("B3");
        CheckSimilarities();
    }
    else{
        flipped = true;
        card1 = document.getElementById("Button3");
        background1 = document.getElementById("B3");
    }
}

function button4(){

    document.getElementById('Button4').style.display = "block";
    if (flipped == true){
        card2 = document.getElementById("Button4");
        background2 = document.getElementById("B4");
        CheckSimilarities();
    }
    else{
        flipped = true;
        card1 = document.getElementById("Button4");
        background1 = document.getElementById("B4");
    }
}

function button5(){
  
    document.getElementById('Button5').style.display = "block";
    if (flipped == true){
        card2 = document.getElementById("Button5");
        background2 = document.getElementById("B5");
        CheckSimilarities();
    }
    else{
        flipped = true;
        card1 = document.getElementById("Button5");
        background1 = document.getElementById("B5");
    }
}

function button6(){
   
    document.getElementById('Button6').style.display = "block";
    if (flipped == true){
        card2 = document.getElementById("Button6");
        background2 = document.getElementById("B6");
        CheckSimilarities();
    }
    else{
        flipped = true;
        card1 = document.getElementById("Button6");
        background1 = document.getElementById("B6");
    }
}

function button7(){
   
    document.getElementById('Button7').style.display = "block";
    if (flipped == true){
        card2 = document.getElementById("Button7");
        background2 = document.getElementById("B7");
        CheckSimilarities();
    }
    else{
        flipped = true;
        card1 = document.getElementById("Button7");
        background1 = document.getElementById("B7");
    }
}
function button8(){
   
    document.getElementById('Button8').style.display = "block";
    if (flipped == true){
        card2 = document.getElementById("Button8");
        background2 = document.getElementById("B8");
        CheckSimilarities();
    }
    else{
        flipped = true;
        card1 = document.getElementById("Button8");
        background1 = document.getElementById("B8");
    }
}