var angles = document.querySelectorAll(".angles");
var checkBtn = document.querySelector("#check-triangle-btn");
var result = document.querySelector("#show-result");

function calculateSumOfAngles(){
    var sum = 0;
    for(let angle of angles){
        sum = sum+Number(angle.value);
    }
    return sum;
}

function isTriangle(){
    if(calculateSumOfAngles() === 180){
        result.innerText = "Given Angles form a Triangle..!";
    }
    else{        
        result.innerText = "Given Angles DO NOT form a Triangle..!";
    }
}

checkBtn.addEventListener("click", isTriangle);
