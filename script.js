// hiding pin display element
document.getElementById("wrong-pin").style.display = "none";
document.getElementById("right-pin").style.display = "none";

// generating random 4 digit pin number
document.getElementById("generate-pin").addEventListener("click", function(){
   randomPinGenerate();
})
function randomPinGenerate(){
    let randomPin =1000 + Math.random()*9000;
    let randomPinIntegar = Math.ceil(randomPin);
    document.getElementById("pin-input").value=randomPinIntegar;
    document.getElementById("wrong-pin").style.display="none"; // when user generate pin second time and so on the element will hide
    document.getElementById("right-pin").style.display="none";
}
// function for displaying digit value
function valueAdd(digit){
    let numClickPad = document.getElementById("digit-input").value;
    let digitView = numClickPad + digit;
    document.getElementById('digit-input').value=digitView;
}

//function for clearing the display
function clr(){
    document.getElementById("digit-input").value = "";
}

// function for clear one by one back
function back (){
    let getBack = document.getElementById("digit-input").value;
    getBack = getBack.slice(0,-1);
    document.getElementById("digit-input").value = getBack;
}

// function for submit button
function submitClick(){
    let inputPin = document.getElementById("digit-input").value;
    let generatedPin = document.getElementById("pin-input").value;
    if(inputPin == "" && generatedPin == ""){
        alert("You haven't generate pin yet.");
    }
    else if(inputPin == generatedPin){
        document.getElementById("right-pin").style.display = "block";
    }
    else{
        document.getElementById("wrong-pin").style.display = "block";
    }
    document.getElementById("pin-input").value="";
    document.getElementById("digit-input").value="";
}

    
