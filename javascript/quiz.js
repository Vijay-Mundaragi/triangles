var submitBtn = document.querySelector("#formSubmit");
var formInfo = document.querySelector("#quizForm");
var result = document.querySelector("#result");

const correctAnswers = ['90°', 'right angled']; 

function checkAnswers(){
    var scores = 0;
    var formData = new FormData(formInfo);
    var index = 0; 
    for (var val of formData.values()){
        if(val === correctAnswers[index]){
            scores += 1;
        };
        index += 1;
    }
    console.log(scores);
    result.innerText = " Your Score is "+scores;
}

submitBtn.addEventListener("click", checkAnswers)



