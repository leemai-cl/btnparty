
//this is a button that shows and hides content
$(document).ready(function(){
  $(".btntog").click(function(){
    $("p").fadeToggle(500);
  });
});

//simple while loop that displays the number 6, not finished
let n=0
let x=0
while (n<3){
    n++
    x += n;
}
function btnmath() {
    document.getElementById("btnnum").innerHTML = x;
}

//clickable text that changes the text
window.onload=function(){
document.getElementById("demo").addEventListener("click", myFunction);
}
function myFunction() {
  document.getElementById("demo").innerHTML = "you've clicked this ";
}

//for loop that uses form value to create # of buttons
//also should display an alert is form value is empty
var i;
  
function btnloop() { 
    let l = document.forms["myForm"]["btnform"].value;
    if (l == "") {
      alert("how many buttons do you want?");
      return false;}
    for (i = 0; i < l; i++) {
   btnFunction();
 }
}
//function that creates single useless buttons
function btnFunction() {
    var demo2 = document.getElementById("demo2")
    var button = document.createElement("BUTTON")
    button.innerHTML = "___";
    demo2.appendChild(button)
    
    console.log(button)
}
//clears useless buttons on page
 function myFunction5() {
     document.getElementById("demo2").innerHTML = "buttons appear here ->";
}
//pulls form number value, this function might not be needed anymore
// function validateForm() {
//     let x = document.forms["myForm"]["btnform"].value;
//     if (x == "") {
//         alert("how many buttons do you want?");
//         return false;
        
//     }

