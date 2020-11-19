

$(document).ready(function(){
  $(".btntog").click(function(){
    $("p").fadeToggle(500);
  });
});

let n=0
let x=0


while (n<3){
    n++
    x += n;
}

function btnmath() {

    document.getElementById("btnnum").innerHTML = x;
}


// function btnFunction() {
//     // var demo2 = document.getElementById("demo2")
//     var button = document.createElement("BUTTON")
//     button.innerHTML = "___";
//     demo.appendChild(button)
    
//     console.log(button)
// }

// function myFunction5() {
//     document.getElementById("demo").innerHTML = "";
// }

window.onload=function(){
document.getElementById("demo").addEventListener("click", myFunction);
}
function myFunction() {
  document.getElementById("demo").innerHTML = "you've clicked this ";
}

 
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

function btnFunction() {
    var demo2 = document.getElementById("demo2")
    var button = document.createElement("BUTTON")
    button.innerHTML = "___";
    demo2.appendChild(button)
    
    console.log(button)
}

 function myFunction5() {
     document.getElementById("demo2").innerHTML = "buttons appear here ->";
}

function validateForm() {
    let x = document.forms["myForm"]["btnform"].value;
    if (x == "") {
        alert("how many buttons do you want?");
        return false;
        
    }

}