window.Test2 = (function () {
    'use strict';


    var test2;
    var test2score = 0;

    test2 = {

        /**
         * variable that holds the score of test 2
         */
        test2score: test2score,

        titleTest2: function() {
            var h3 = document.getElementsByTagName("h3")[0];
            var p = document.getElementsByTagName("P")[0];
            var content = document.getElementsByClassName("content")[0];
            var scoreDiv = document.createElement("DIV");
            var generateFizzBuzz = test2.generateFizzBuzz();
            var correctFizzBuzzLast;
            var alternativesArray = [generateFizzBuzz[1], "Fizz", "Buzz", "Fizz Buzz"];
            var alternative1 = document.createElement("div");
            var alternative2 = document.createElement("div");
            var alternative3 = document.createElement("div");
            var alternative4 = document.createElement("div");
            var beginFizzBuzz = document.createElement("BUTTON");
            var nextTest3 = document.createElement("DIV");
            var three = generateFizzBuzz[1] % 3;
            var five = generateFizzBuzz[1] % 5;
            var result = document.createElement("div");
            var test2scoreDiv = document.createElement("div");
            var counter = 0;
            /**
             * Each time the function starts over
             * (when reset function is used) the score resets
             */
            var test2score = 0;
            var test3 = window.Test3;
            var reset = window.Test;

            /**
             * Eventlistener added to Div that leads to next test with a click
             */
            nextTest3.addEventListener("click", function() {
                test3.titleTest3();
            });

            /**
             *  Tells the variable what test is active by user
             */
            reset.activeTest = 2;
            /**
             *  resets score each time function starts the test
             */
            test2score = 0;
            content.innerHTML = "";
            content.appendChild(h3);
            content.appendChild(p);
            content.appendChild(scoreDiv);
            beginFizzBuzz.innerHTML = "Klicka för att starta FizzBuzz";
            result.className = "resultTest2";
            test2scoreDiv.className = "test2score";
            alternative1.className = "alt1Test2 pointer width100";
            alternative2.className = "alt2Test2 pointer width100";
            alternative3.className = "alt3Test2 pointer width100";
            alternative4.className = "alt4Test2 pointer width100";
            nextTest3.className = "pointer width250";
            /**
             * calculates if a number is FizzBuzz, Buzz or Fizz
             */
            if (three === 0 && five === 0) {
                correctFizzBuzzLast = "FizzBuzz";
            } else if (five === 0) {
                correctFizzBuzzLast = "Buzz";
            } else if (three === 0) {
                correctFizzBuzzLast = "Fizz";
            } else {
                correctFizzBuzzLast = generateFizzBuzz[1];
            }
            console.log(correctFizzBuzzLast);
            console.log(typeof(correctFizzBuzzLast));
            /**
             * compares the correctFizzBuzzLast and the answer (alternative 1-4) selected by user
             */
            alternative1.addEventListener("click", function(event) {
                if (counter < 1) {
                    if (Number(event.target.innerHTML) === correctFizzBuzzLast) {
                        result.innerHTML = "RÄTT";
                        test2score += 8;
                        test2scoreDiv.innerHTML = "Du fick " + test2score + " poäng";
                    } else {
                        result.innerHTML = "FEL";
                        test2scoreDiv.innerHTML = "Du fick " + test2score + " poäng";
                    }
                    console.log(typeof(event.target));
                    console.log(event.target.innerHTML);
                    test2scoreDiv.style.left = "110px";
                    result.style.left = "110px";
                    content.appendChild(result);
                    content.appendChild(test2scoreDiv);
                    nextTest3.innerHTML = "Klicka här för att komma till deltest 3";
                    content.appendChild(nextTest3);
                    counter = 1;
                    test2.test2score = test2score;
                }
            });
            alternative2.addEventListener("click", function(event) {
                if (counter < 1) {
                    if (event.target.innerHTML === correctFizzBuzzLast) {
                        result.innerHTML = "RÄTT";
                        test2score += 8;
                        test2scoreDiv.innerHTML = "Du fick " + test2score + " poäng";
                    } else {
                        result.innerHTML = "FEL";
                        test2scoreDiv.innerHTML = "Du fick " + test2score + " poäng";
                    }
                    test2scoreDiv.style.left = "110px";
                    result.style.left = "110px";
                    content.appendChild(result);
                    content.appendChild(test2scoreDiv);
                    nextTest3.innerHTML = "Klicka här för att komma till deltest 3";
                    content.appendChild(nextTest3);
                    counter = 1;
                    test2.test2score = test2score;
                }
            });
            alternative3.addEventListener("click", function(event) {
                if (counter < 1) {
                    if (event.target.innerHTML === correctFizzBuzzLast) {
                        result.innerHTML = "RÄTT";
                        test2score += 8;
                        test2scoreDiv.innerHTML = "Du fick " + test2score + " poäng";
                    } else {
                        result.innerHTML = "FEL";
                        test2scoreDiv.innerHTML = "Du fick " + test2score + " poäng";
                    }
                    test2scoreDiv.style.left = "110px";
                    result.style.left = "110px";
                    content.appendChild(result);
                    content.appendChild(test2scoreDiv);
                    nextTest3.innerHTML = "Klicka här för att komma till deltest 3";
                    content.appendChild(nextTest3);
                    counter = 1;
                    test2.test2score = test2score;
                }
            });
            alternative4.addEventListener("click", function(event) {
                if (counter < 1) {
                    if (event.target.innerHTML === correctFizzBuzzLast) {
                        result.innerHTML = "RÄTT";
                        test2score += 8;
                        test2scoreDiv.innerHTML = "Du fick " + test2score + " poäng";
                    } else {
                        result.innerHTML = "FEL";
                        test2scoreDiv.innerHTML = "Du fick " + test2score + " poäng";
                    }
                    test2scoreDiv.style.left = "110px";
                    result.style.left = "110px";
                    content.appendChild(result);
                    content.appendChild(test2scoreDiv);
                    nextTest3.innerHTML = "Klicka här för att komma till deltest 3";
                    content.appendChild(nextTest3);
                    counter = 1;
                    test2.test2score = test2score;
                }
            });

            /**
             * replaces the last number/Fizz/Buzz/FizzBuzz with "?"
             */
            generateFizzBuzz[0].splice(4, 1, " ?");

            scoreDiv.style.color = "#f9c570";
            h3.innerHTML = "Och nu lite FizzBuzz...";
            p.innerHTML = "Man ska gissa på nästa nummer som kommer i serien.\n" +
                            "Antingen så gissar man det aktuella numret. Eller så säger man\n" +
                                "'Fizz' om nummer är jämnt delbart med 3. Är nummer jämnt\n" +
                                    " delbart med 5 så är det 'Buzz' som gäller. Om\n" +
                                        "nummer kan delas jämnt med både\n" +
                                        "3 och 5 så är det en 'FizzBuzz'.";
            content.appendChild(beginFizzBuzz);
            content.style.backgroundColor = "#f9c570";
            content.style.height = "400px";

            /**
             * Presents the FizzBuzz sequence and alternatives
             */
            beginFizzBuzz.addEventListener("click", function() {
                beginFizzBuzz.remove();
                h3.innerHTML = "Gissa på nästa i sekvensen, fyra alternativ nedan:";
                p.innerHTML = generateFizzBuzz[0];
                alternative1.innerHTML = alternativesArray[0];
                alternative2.innerHTML = alternativesArray[1];
                alternative3.innerHTML = alternativesArray[2];
                alternative4.innerHTML = alternativesArray[3];
                alternative1.style.margin = "10px";
                alternative2.style.margin = "10px";
                alternative3.style.margin = "10px";
                alternative4.style.margin = "10px";
                content.appendChild(alternative1);
                content.appendChild(alternative2);
                content.appendChild(alternative3);
                content.appendChild(alternative4);
            });
        },

        /**
         * function that generate a FizzBuzz sequence
         */
        fizzBuzz: function(start, stop) {
            var resultFizzBuzz = "";

            if (start > stop || start === stop) {
                resultFizzBuzz = "error";
            } else {
                for (var i = start; i < (stop + 1); i++) {
                    var three = i % 3;
                    var five = i % 5;

                    if (resultFizzBuzz.length > 0) {
                        if (three === 0 && five === 0) {
                            resultFizzBuzz += ",Fizz Buzz";
                        } else if (five === 0) {
                            resultFizzBuzz += ",Buzz";
                        } else if (three === 0) {
                            resultFizzBuzz += ",Fizz";
                        } else {
                            resultFizzBuzz += ("," + i);
                        }
                    }
                    if (resultFizzBuzz.length === 0) {
                        if (three === 0 && five === 0) {
                            resultFizzBuzz += "Fizz Buzz";
                        } else if (five === 0) {
                            resultFizzBuzz += "Buzz";
                        } else if (three === 0) {
                            resultFizzBuzz += "Fizz";
                        } else {
                            resultFizzBuzz += i;
                        }
                    }
                }
            }
            return resultFizzBuzz;
        },

        /**
         * function that uses FizzBuzz function to create a FizzBuzz sequence
         * and randomly selects with number to start with
         */
        generateFizzBuzz: function() {
            var activeSequence = "";
            var activeSequenceArray;
            var fizzBuzzArray;
            var counter = 0;
            let i = Math.floor(Math.random() * 94);

            fizzBuzzArray = this.fizzBuzz(1, 100).split(",");
            // console.log(activeSequence);
            for (; counter < 5; i++) {
                if (counter > 0) {
                    activeSequence += (", " + fizzBuzzArray[i]);
                    counter += 1;
                } else {
                    activeSequence += fizzBuzzArray[i];
                    counter += 1;
                }
            }
            activeSequenceArray = activeSequence.split(",");
            return [activeSequenceArray, i];
        },
    };
    return test2;
})();
