window.Test1 = (function() {
  "use strict";

  var test1score = 0;

  var test1;

  test1 = {
    /**

       * Just remove startbutton and creates a div that holds the score

       */

    test1score: test1score,

    removeStartButton: function() {
      var temp = document.getElementsByClassName("startButtonTest1")[0];

      var temp2 = document.getElementsByClassName("scoreDiv")[0];

      var reset = window.Test;

      temp2.innerHTML = "";

      temp.remove();

      console.log(reset.activeTest);

      reset.activeTest = 1;

      console.log(reset.activeTest);

      return;
    },

    /**

       * Changes the content, color, shape for test1.

       */

    titleTest: function() {
      var h3 = document.getElementsByTagName("h3")[0];

      var p = document.getElementsByTagName("P")[0];

      var content = document.getElementsByClassName("content")[0];

      content.innerHTML = "";

      content.appendChild(h3);

      content.appendChild(p);

      h3.innerHTML = "Frågor";

      p.innerHTML = "klicka på det rätta alternativet:";

      content.style.backgroundColor = "#64eab9";

      content.style.height = "300px";

      content.style.borderRadius = "25px";

      return;
    },

    /**

       * final display of the test1 and shows the total score of test1

       * A new buton that leads to test2 is defined.

       */

    endTest: function() {
      var h3 = document.getElementsByTagName("h3")[0];

      var p = document.getElementsByTagName("P")[0];

      var content = document.getElementsByClassName("content")[0];

      var nextTest2 = document.createElement("DIV");

      var scoreDiv = document.createElement("DIV");

      var test2 = window.Test2;

      nextTest2.innerHTML = "Klicka här för att komma till nästa test...";

      nextTest2.className = "pointer width250";

      h3.innerHTML = "Test 1 avklarat";

      p.innerHTML = "din poäng blev: " + test1.test1score;

      content.style.backgroundColor = "#64eab9";

      content.style.height = "300px";

      scoreDiv.style.color = "black";

      content.appendChild(nextTest2);

      content.appendChild(scoreDiv);

      nextTest2.addEventListener("click", function() {
        nextTest2.remove();

        test2.titleTest2();
      });

      return;
    },

    /**

       * First question. The function declare variables and prints a question

       * with alternatives. It also present a button that leads to next question

       * wheen a answer is selected.

       */

    question1: function() {
      var content = document.getElementsByClassName("content")[0];

      var questionDiv = document.createElement("div");

      var question1 = document.createElement("div");

      var resultDiv = document.createElement("div");

      var alternative1 = document.createElement("BUTTON");

      var alternative2 = document.createElement("BUTTON");

      var alternative3 = document.createElement("BUTTON");

      var counterChoice = 0; // Each time the function starts over

      //(when reset function is used) the score resets

      var nextButton = document.createElement("BUTTON");

      var result1 = document.createElement("div");

      var result2 = document.createElement("div");

      var result3 = document.createElement("div");

      // var test1score = 0;

      question1.className = "question1";

      questionDiv.className = "questionDiv";

      resultDiv.className = "resultDiv";

      alternative1.className = "alternative1";

      alternative2.className = "alternative2";

      alternative3.className = "alternative3";

      alternative1.style.margin = "10px";
      alternative2.style.margin = "10px";
      alternative3.style.margin = "10px";
      alternative1.style.borderRadius = "10px";
      alternative2.style.borderRadius = "10px";
      alternative3.style.borderRadius = "10px";

      nextButton.className = "nextButton";

      nextButton.innerHTML = "Nästa Fråga-->";

      question1.style.color = "blue";
      question1.style.fontSize = "30px";
      question1.style.position = "relative";
      question1.style.position = "absolute";
      question1.style.top = "50%";
      question1.style.left = "40%";

      var textQuestion1 = "Vad är en mitokondrie?";
      var i = 0;
      var speed = 50;

      function timer() {
        if (i < textQuestion1.length) {
          question1.innerHTML += textQuestion1.charAt(i);

          i++;
          setTimeout(timer, speed);
        }
      }
      timer();

      questionDiv.appendChild(question1);

      content.appendChild(questionDiv);

      content.appendChild(resultDiv);

      alternative1.innerHTML = "En viktig del i blodets koaguleringsfunktion";

      content.appendChild(alternative1);

      alternative2.innerHTML = "En cell i immunförsvaret som jagar bakterier";

      content.appendChild(alternative2);

      alternative3.innerHTML =
        "En organell som återfinns i t.ex. mänskliga celler";

      content.appendChild(alternative3);

      /**

           * Add eventlistener to a button with one of the alternative answers

           */

      alternative1.addEventListener("click", function() {
        result1.innerHTML = "Fel :(";
        alternative2.style.backgroundColor = "red";
        alternative3.style.backgroundColor = "green";
        alternative1.style.backgroundColor = "red";

        if (counterChoice < 1) {
          test1score = 0;

          resultDiv.appendChild(result1);

          content.appendChild(nextButton);
        }

        counterChoice += 1;
      });

      /**

           * Add eventlistener to a button with one of the alternative answers

           */

      alternative2.addEventListener("click", function() {
        result2.innerHTML = "Fel :(";
        alternative2.style.backgroundColor = "red";
        alternative3.style.backgroundColor = "green";
        alternative1.style.backgroundColor = "red";

        if (counterChoice < 1) {
          test1score = 0;

          resultDiv.appendChild(result2);

          content.appendChild(nextButton);
        }

        counterChoice += 1;
      });

      /**

           * Add eventlistener to a button with one of the alternative answers

           */

      alternative3.addEventListener("click", function() {
        result3.innerHTML = "Rätt :)";
        alternative3.style.backgroundColor = "green";
        alternative2.style.backgroundColor = "red";
        alternative1.style.backgroundColor = "red";

        if (counterChoice < 1) {
          test1score += 5;

          resultDiv.appendChild(result3);

          content.appendChild(nextButton);
        }

        counterChoice += 1;
      });

      /**

           * removes the buttons and divs presenting alternatives, score and result

           */

      nextButton.addEventListener("click", function() {
        question1.remove();

        result1.remove();

        result2.remove();

        result3.remove();

        alternative1.remove();

        alternative2.remove();

        alternative3.remove();

        nextButton.remove();

        /**

               * remove eventlisteners

               */

        alternative1.removeEventListener("click", function() {
          result1.innerHTML = "Fel :(";

          if (counterChoice < 1) {
            resultDiv.appendChild(result1);

            content.appendChild(nextButton);
          }

          counterChoice += 1;
        });

        alternative2.removeEventListener("click", function() {
          result2.innerHTML = "Fel :(";

          if (counterChoice < 1) {
            resultDiv.appendChild(result2);

            content.appendChild(nextButton);
          }

          counterChoice += 1;
        });

        alternative3.removeEventListener("click", function() {
          result3.innerHTML = "Rätt :)";

          if (counterChoice < 1) {
            resultDiv.appendChild(result3);

            content.appendChild(nextButton);
          }

          counterChoice += 1;
        });

        test1.question2(); //starting a function that present next question
      });
    },

    /**

       * second question. The function declare variables and prints a question

       * with alternatives. It also present a button that leads to next question

       * when an answer is selected.

       */

    question2: function() {
      var content = document.getElementsByClassName("content")[0];

      var questionDiv = document.createElement("div");

      var question1 = document.createElement("div");

      var resultDiv = document.createElement("div");

      var alternative1 = document.createElement("BUTTON");

      var alternative2 = document.createElement("BUTTON");

      var alternative3 = document.createElement("BUTTON");

      var counterChoice = 0; // Each time the function starts over

      //(when reset function is used) the score resets

      var nextButton = document.createElement("BUTTON");

      var result1 = document.createElement("div");

      var result2 = document.createElement("div");

      var result3 = document.createElement("div");

      question1.className = "question2";

      questionDiv.className = "questionDiv";

      resultDiv.className = "resultDiv";

      alternative1.className = "alternative1";

      alternative2.className = "alternative2";

      alternative3.className = "alternative3";

      nextButton.className = "nextButton";

      nextButton.innerHTML = "Nästa Fråga-->";

      question1.innerHTML = "Vad behöver man bl.a för att tillverka glas?";

      questionDiv.appendChild(question1);

      content.appendChild(questionDiv);

      content.appendChild(resultDiv);

      alternative1.innerHTML = "sand";

      content.appendChild(alternative1);

      alternative2.innerHTML = "jord";

      content.appendChild(alternative2);

      alternative3.innerHTML = "trä";

      content.appendChild(alternative3);

      /**

           * Add eventlistener to a button with one of the alternative answers

           */

      alternative1.addEventListener("click", function() {
        result1.innerHTML = "Rätt :)";

        if (counterChoice < 1) {
          test1score += 5;

          resultDiv.appendChild(result1);

          content.appendChild(nextButton);
        }

        counterChoice += 1;
      });

      /**

           * Add eventlistener to a button with one of the alternative answers

           */

      alternative2.addEventListener("click", function() {
        result2.innerHTML = "Fel :(";

        if (counterChoice < 1) {
          resultDiv.appendChild(result2);

          content.appendChild(nextButton);
        }

        counterChoice += 1;
      });

      /**

           * Add eventlistener to a button with one of the alternative answers

           */

      alternative3.addEventListener("click", function() {
        result3.innerHTML = "Fel :(";

        if (counterChoice < 1) {
          resultDiv.appendChild(result3);

          content.appendChild(nextButton);
        }

        counterChoice += 1;
      });

      /**

           * removes the buttons and divs presenting alternatives, score and result

           */

      nextButton.addEventListener("click", function() {
        question1.remove();

        result1.remove();

        result2.remove();

        result3.remove();

        alternative1.remove();

        alternative2.remove();

        alternative3.remove();

        nextButton.remove();

        /**

               * remove eventlisteners

               */

        alternative1.removeEventListener("click", function() {
          result1.innerHTML = "Rätt :)";

          if (counterChoice < 1) {
            resultDiv.appendChild(result1);

            content.appendChild(nextButton);
          }

          counterChoice += 1;
        });

        alternative2.removeEventListener("click", function() {
          result2.innerHTML = "Fel :(";

          if (counterChoice < 1) {
            resultDiv.appendChild(result2);

            content.appendChild(nextButton);
          }

          counterChoice += 1;
        });

        alternative3.removeEventListener("click", function() {
          result3.innerHTML = "Fel :)";

          if (counterChoice < 1) {
            resultDiv.appendChild(result3);

            content.appendChild(nextButton);
          }

          counterChoice += 1;
        });

        test1.question3(); //starting a function that present next question
      });

      return;
    },

    /**

       * third question. The function declare variables and prints a question

       * with alternatives. It also present a button that leads to next question

       * wheen a answer is selected.

       */

    question3: function() {
      var content = document.getElementsByClassName("content")[0];

      var questionDiv = document.createElement("div");

      var question1 = document.createElement("div");

      var resultDiv = document.createElement("div");

      var alternative1 = document.createElement("BUTTON");

      var alternative2 = document.createElement("BUTTON");

      var alternative3 = document.createElement("BUTTON");

      var counterChoice = 0; // Each time the function starts over

      //(when reset function is used) the score resets

      var nextButton = document.createElement("BUTTON");

      var result1 = document.createElement("div");

      var result2 = document.createElement("div");

      var result3 = document.createElement("div");

      question1.className = "question2";

      questionDiv.className = "questionDiv";

      resultDiv.className = "resultDiv";

      alternative1.className = "alternative1";

      alternative2.className = "alternative2";

      alternative3.className = "alternative3";

      nextButton.className = "nextButton";

      nextButton.innerHTML = "Nästa Fråga-->";

      question1.innerHTML = "vilket grundämne är tyngst?";

      questionDiv.appendChild(question1);

      content.appendChild(questionDiv);

      content.appendChild(resultDiv);

      alternative1.innerHTML = "syre";

      content.appendChild(alternative1);

      alternative2.innerHTML = "väte";

      content.appendChild(alternative2);

      alternative3.innerHTML = "natrium";

      content.appendChild(alternative3);

      /**

           * Add eventlistener to a button with one of the alternative answers

           */

      alternative1.addEventListener("click", function() {
        result1.innerHTML = "Rätt :)";

        if (counterChoice < 1) {
          test1score += 5;

          resultDiv.appendChild(result1);

          content.appendChild(nextButton);
        }

        counterChoice += 1;
      });

      /**

           * Add eventlistener to a button with one of the alternative answers

           */

      alternative2.addEventListener("click", function() {
        result2.innerHTML = "Fel :(";

        if (counterChoice < 1) {
          resultDiv.appendChild(result2);

          content.appendChild(nextButton);
        }

        counterChoice += 1;
      });

      /**

           * Add eventlistener to a button with one of the alternative answers

           */

      alternative3.addEventListener("click", function() {
        result3.innerHTML = "Fel :(";

        if (counterChoice < 1) {
          resultDiv.appendChild(result3);

          content.appendChild(nextButton);
        }

        counterChoice += 1;
      });

      /**

           * removes the buttons and divs presenting alternatives, score and result

           */

      nextButton.addEventListener("click", function() {
        question1.remove();

        result1.remove();

        result2.remove();

        result3.remove();

        alternative1.remove();

        alternative2.remove();

        alternative3.remove();

        nextButton.remove();

        /**

               * remove eventlisteners

               */

        alternative1.removeEventListener("click", function() {
          result1.innerHTML = "Rätt :)";

          if (counterChoice < 1) {
            resultDiv.appendChild(result1);

            content.appendChild(nextButton);
          }

          counterChoice += 1;
        });

        alternative2.removeEventListener("click", function() {
          result2.innerHTML = "Fel :(";

          if (counterChoice < 1) {
            resultDiv.appendChild(result2);

            content.appendChild(nextButton);
          }

          counterChoice += 1;
        });

        alternative3.removeEventListener("click", function() {
          result3.innerHTML = "Fel :)";

          if (counterChoice < 1) {
            resultDiv.appendChild(result3);

            content.appendChild(nextButton);
          }

          counterChoice += 1;
        });

        test1.question4(); //starting a function that present next question
      });

      return;
    },

    /**

       * fourth question. The function declare variables and prints a question

       * with alternatives. It also present a button that leads to next question

       * wheen a answer is selected.

       */

    question4: function() {
      var content = document.getElementsByClassName("content")[0];

      var questionDiv = document.createElement("div");

      var question1 = document.createElement("div");

      var resultDiv = document.createElement("div");

      var alternative1 = document.createElement("BUTTON");

      var alternative2 = document.createElement("BUTTON");

      var alternative3 = document.createElement("BUTTON");

      var counterChoice = 0;

      var nextButton = document.createElement("BUTTON");

      var result1 = document.createElement("div");

      var result2 = document.createElement("div");

      var result3 = document.createElement("div");

      question1.className = "question2";

      questionDiv.className = "questionDiv";

      resultDiv.className = "resultDiv";

      alternative1.className = "alternative1";

      alternative2.className = "alternative2";

      alternative3.className = "alternative3";

      nextButton.className = "nextButton";

      nextButton.innerHTML = "Nästa Fråga-->";

      question1.innerHTML = "Vad stämmer inte in på ordet 'burma'?";

      questionDiv.appendChild(question1);

      content.appendChild(questionDiv);

      content.appendChild(resultDiv);

      alternative1.innerHTML = "Land";

      content.appendChild(alternative1);

      alternative2.innerHTML = "Hund";

      content.appendChild(alternative2);

      alternative3.innerHTML = "Katt";

      content.appendChild(alternative3);

      /**

           * Add eventlistener to a button with one of the alternative answers

           */

      alternative1.addEventListener("click", function() {
        result1.innerHTML = "Fel :(";

        if (counterChoice < 1) {
          resultDiv.appendChild(result1);

          content.appendChild(nextButton);
        }

        counterChoice += 1;
      });

      /**

           * Add eventlistener to a button with one of the alternative answers

           */

      alternative2.addEventListener("click", function() {
        result2.innerHTML = "Rätt :)";

        if (counterChoice < 1) {
          test1score += 5;

          resultDiv.appendChild(result2);

          content.appendChild(nextButton);
        }

        counterChoice += 1;
      });

      /**

           * Add eventlistener to a button with one of the alternative answers

           */

      alternative3.addEventListener("click", function() {
        result3.innerHTML = "Fel :(";

        if (counterChoice < 1) {
          resultDiv.appendChild(result3);

          content.appendChild(nextButton);
        }

        counterChoice += 1;
      });

      /**

           * removes the buttons and divs presenting alternatives, score and result

           */

      nextButton.addEventListener("click", function() {
        question1.remove();

        result1.remove();

        result2.remove();

        result3.remove();

        alternative1.remove();

        alternative2.remove();

        alternative3.remove();

        nextButton.remove();

        /**

               * remove eventlisteners

               */

        alternative1.removeEventListener("click", function() {
          result1.innerHTML = "Rätt :)";

          if (counterChoice < 1) {
            resultDiv.appendChild(result1);

            content.appendChild(nextButton);
          }

          counterChoice += 1;
        });

        alternative2.removeEventListener("click", function() {
          result2.innerHTML = "Fel :(";

          if (counterChoice < 1) {
            resultDiv.appendChild(result2);

            content.appendChild(nextButton);
          }

          counterChoice += 1;
        });

        alternative3.removeEventListener("click", function() {
          result3.innerHTML = "Fel :)";

          if (counterChoice < 1) {
            resultDiv.appendChild(result3);

            content.appendChild(nextButton);
          }

          counterChoice += 1;
        });

        test1.question5(); //starting a function that present next question
      });

      return;
    },

    /**

       * last question. The function declare variables and prints a question

       * with alternatives. It also present a button that leads to next question

       * wheen a answer is selected.

       */

    question5: function() {
      var content = document.getElementsByClassName("content")[0];

      var questionDiv = document.createElement("div");

      var question1 = document.createElement("div");

      var resultDiv = document.createElement("div");

      var alternative1 = document.createElement("BUTTON");

      var alternative2 = document.createElement("BUTTON");

      var alternative3 = document.createElement("BUTTON");

      var counterChoice = 0;

      var nextButton = document.createElement("BUTTON");

      var result1 = document.createElement("div");

      var result2 = document.createElement("div");

      var result3 = document.createElement("div");

      question1.className = "question2";

      questionDiv.className = "questionDiv";

      resultDiv.className = "resultDiv";

      alternative1.className = "alternative1";

      alternative2.className = "alternative2";

      alternative3.className = "alternative3";

      nextButton.className = "nextButton";

      nextButton.innerHTML = "Färdigt, se resultat-->";

      nextButton.style.height = "100px";

      question1.innerHTML = "vad är Anthozoa?";

      questionDiv.appendChild(question1);

      content.appendChild(questionDiv);

      content.appendChild(resultDiv);

      alternative1.innerHTML = "En parasit";

      content.appendChild(alternative1);

      alternative2.innerHTML = "En svamp";

      content.appendChild(alternative2);

      alternative3.innerHTML = "Ett koralldjur";

      content.appendChild(alternative3);

      /**

           * Add eventlistener to a button with one of the alternative answers

           */

      alternative1.addEventListener("click", function() {
        result1.innerHTML = "Fel :(";

        if (counterChoice < 1) {
          resultDiv.appendChild(result1);

          content.appendChild(nextButton);
        }

        counterChoice += 1;
      });

      /**

           * Add eventlistener to a button with one of the alternative answers

           */

      alternative2.addEventListener("click", function() {
        result2.innerHTML = "Fel :(";

        if (counterChoice < 1) {
          resultDiv.appendChild(result2);

          content.appendChild(nextButton);
        }

        counterChoice += 1;
      });

      /**

           * Add eventlistener to a button with one of the alternative answers

           */

      alternative3.addEventListener("click", function() {
        result3.innerHTML = "Rätt :)";

        if (counterChoice < 1) {
          test1score += 5;

          resultDiv.appendChild(result3);

          content.appendChild(nextButton);
        }

        counterChoice += 1;
      });

      /**

           * removes the buttons and divs presenting alternatives, score and result

           */

      nextButton.addEventListener("click", function() {
        question1.remove();

        result1.remove();

        result2.remove();

        result3.remove();

        alternative1.remove();

        alternative2.remove();

        alternative3.remove();

        nextButton.remove();

        /**

               * remove eventlisteners

               */

        alternative1.removeEventListener("click", function() {
          result1.innerHTML = "Fel :(";

          if (counterChoice < 1) {
            resultDiv.appendChild(result1);

            content.appendChild(nextButton);
          }

          counterChoice += 1;
        });

        alternative2.removeEventListener("click", function() {
          result2.innerHTML = "Fel :(";

          if (counterChoice < 1) {
            resultDiv.appendChild(result2);

            content.appendChild(nextButton);
          }

          counterChoice += 1;
        });

        alternative3.removeEventListener("click", function() {
          result3.innerHTML = "Rätt :)";

          if (counterChoice < 1) {
            resultDiv.appendChild(result3);

            content.appendChild(nextButton);
          }

          counterChoice += 1;
        });

        test1.test1score = test1score; //final score of test1

        test1.endTest(); //function that ends test and presents the

        //score and a button for starting test2
      });

      return;
    }
  };

  return test1;
})();
