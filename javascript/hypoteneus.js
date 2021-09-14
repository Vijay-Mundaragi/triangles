var side1 = document.querySelector("#side1");
var side2 = document.querySelector("#side2");
var calculateBtn = document.querySelector("#calculate-btn");
var result = document.querySelector("#result");

function calculateHypoteneus(){
    var a = Number(side1.value);
    var b = Number(side2.value);
    var hypoteneus = Math.sqrt(a*a+b*b);
    result.innerText = "Hypoteneus is "+hypoteneus;
}

calculateBtn.addEventListener("click", calculateHypoteneus);

