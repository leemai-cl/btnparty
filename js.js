

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


function btnFunction() {
    var demo2 = document.getElementById("demo2")
    var button = document.createElement("BUTTON")
    button.innerHTML = "___";
    demo.appendChild(button)
    
    console.log(button)
}

function myFunction5() {
    document.getElementById("demo").innerHTML = "";
}

window.onload=function(){
document.getElementById("demo").addEventListener("click", myFunction);
}
function myFunction() {
  document.getElementById("demo").innerHTML = "you've clicked this ";
}

