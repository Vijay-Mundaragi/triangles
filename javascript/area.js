var base = document.querySelector("#base");
var height = document.querySelector("#height");
var calculateBtn = document.querySelector("#calculate-btn");
var result = document.querySelector("#result");

function calculateArea(){
    var a = Number(base.value);
    var b = Number(height.value);
    var area = (a*b)/2;
    result.innerText = "Area is "+area;
}

calculateBtn.addEventListener("click", calculateArea);

