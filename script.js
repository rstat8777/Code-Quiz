var dir1 = document.querySelector(".started1");
dir1.addEventListener("click", function(){
    document.location.href = './page1.html';

});
document.querySelector(".started1").addEventListener("click", function(){
    var timeleft = 60;

    var downloadTimer = setInterval(function function1(){
    document.getElementById("countdown").innerHTML = timeleft + 
    "&nbsp"+"seconds remaining";

    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Time is up!"
    }
    }, 1000);

    console.log(countdown);
});

/*var score = 0; 
for(var i = 0; i < questions.length; i++){
  var response = window.prompt(questions[i].prompt)
  if(response == questions[i].answer){
  score++; 
  alert("correct");
  } else{
    alert("wrong");
  }
}
alert("You got " + score + "/" + questions.length);