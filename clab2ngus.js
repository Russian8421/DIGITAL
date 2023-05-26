
  function checkAnswers() {
   var numCorrect = 0;
   var numQuestions = 23;

   // Check answer to Question 1
   var answer1 = document.querySelector('input[name="t_1"]:checked').value;
   if (answer1 === "3") {
    numCorrect++;
   }

   // Check answer to Question 2
   var answer2 = document.querySelector('input[name="t_2"]:checked').value;
   if (answer2 === "3") {
    numCorrect++;
   }

   // Check answer to Question 3
   var answer3 = document.querySelector('input[name="t_3"]:checked').value;
   if (answer3 === "4") {
    numCorrect++;
   }

   var answer4 = document.querySelector('input[name="t_4"]:checked').value;
   if (answer4 === "3") {
    numCorrect++;
   }

   var answer5 = document.querySelector('input[name="t_5"]:checked').value;
   if (answer5 === "3") {
    numCorrect++;
   }

   var answer6 = document.querySelector('input[name="t_6"]:checked').value;
   if (answer6 === "2") {
    numCorrect++;
   }
   
   var answer7 = document.querySelector('input[name="t_7"]:checked').value;
   if (answer7 === "3") {
    numCorrect++;
   }
   
   var answer8 = document.querySelector('input[name="t_8"]:checked').value;
   if (answer8 === "1") {
    numCorrect++;
   }
   
   var answer9 = document.querySelector('input[name="t_9"]:checked').value;
   if (answer9 === "1") {
    numCorrect++;
   }
   
   var answer10 = document.querySelector('input[name="t_10"]:checked').value;
   if (answer10 === "3") {
    numCorrect++;
   }
   
   var answer11 = document.querySelector('input[name="t_11"]:checked').value;
   if (answer11 === "3") {
    numCorrect++;
   }
   
   var answer12 = document.querySelector('input[name="t_12"]:checked').value;
   if (answer12 === "2") {
    numCorrect++;
   }
   
   var answer13 = document.querySelector('input[name="t_13"]:checked').value;
   if (answer13 === "4") {
    numCorrect++;
   }
   
   var answer14 = document.querySelector('input[name="t_14"]:checked').value;
   if (answer14 === "3") {
    numCorrect++;
   }
   
   var answer15 = document.querySelector('input[name="t_15"]:checked').value;
   if (answer15 === "3") {
    numCorrect++;
   }
   
   var answer16 = document.querySelector('input[name="t_16"]:checked').value;
   if (answer16 === "1") {
    numCorrect++;
   }
   
   var answer17 = document.querySelector('input[name="t_17"]:checked').value;
   if (answer17 === "1") {
    numCorrect++;
   }
   
   var answer18 = document.querySelector('input[name="t_18"]:checked').value;
   if (answer18 === "3") {
    numCorrect++;
   }
   
   var answer19 = document.querySelector('input[name="t_19"]:checked').value;
   if (answer19 === "3") {
    numCorrect++;
   }
   
   var answer20 = document.querySelector('input[name="t_20"]:checked').value;
   if (answer20 === "1") {
    numCorrect++;
   }
   
   var answer21 = document.querySelector('input[name="t_21"]:checked').value;
   if (answer21 === "3") {
    numCorrect++;
   }
   
   var answer22 = document.querySelector('input[name="t_22"]:checked').value;
   if (answer22 === "1") {
    numCorrect++;
   }
   
   var answer23 = document.querySelector('input[name="t_23"]:checked').value;
   if (answer23 === "3") {
    numCorrect++;
   }
   
   var resultsMessage = "You got " + numCorrect + " out of " + numQuestions + " questions correct.";
   alert(resultsMessage);
  }
