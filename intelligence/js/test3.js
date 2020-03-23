window.Test3 = (function () {
    'use strict';

    var test3score = 0;
    var test3;
    var test1 = window.Test1;

    test3 = {

        /**
         * Creates a new look at page and presents the test3
         */
        titleTest3: function() {
            var h3 = document.getElementsByTagName("h3")[0];
            var p = document.getElementsByTagName("P")[0];
            var content = document.getElementsByClassName("content")[0];
            var starttTest3 = document.createElement("BUTTON");
            var reset = window.Test;

            /**
             * tells the variable that test3 is running
             */
            reset.activeTest = 3;
            /**
             * resets the score when test starts or restarts
             */
            test3score = 0;
            content.innerHTML ="";
            content.appendChild(h3);
            content.appendChild(p);
            starttTest3.innerHTML = "Klicka här för att starta test 3";
            starttTest3.className = "starttTest3";
            h3.innerHTML = "Minnestest";
            p.innerHTML = "Gissa flaggor i rätt ordning";
            content.style.backgroundColor = "#f3eaf7";
            content.style.width = "800px";
            content.style.height = "600px";
            content.appendChild(starttTest3);
            starttTest3.addEventListener("click", test3.drawFlags);
            return;
        },

        showResultTest3: function() {
            var content = document.getElementsByClassName("content")[0];
            var divForList = document.getElementsByClassName("divForList")[0];
            var divForFlags1 = document.getElementsByClassName("divForFlags1")[0];
            var divForFlags2 = document.getElementsByClassName("divForFlags2")[0];
            var divForFlags3 = document.getElementsByClassName("divForFlags3")[0];
            var endPhrase = document.createElement("div");
            var finalResult = document.createElement("div");
            var intellegence;
            var scorePercent;
            var getTotalScore = document.createElement("BUTTON");
            var test2 = window.Test2;
            var reset = window.Test;

            divForList.remove();
            divForFlags1.remove();
            divForFlags2.remove();
            divForFlags3.remove();

            /**
             *  now reset function is out of order and all tests is over.
             */
            // reset.activeTest = 4;
            content.style.backgroundColor = "#fdff9e";
            content.style.width = "400px";
            content.style.height = "200px";
            content.innerHTML = "";
            scorePercent = ((test2.test2score + test3score + test1.test1score) / 60) * 100;
            /**
             *  calculates the intellegence.
             * if score is under 5% the intellegence is calculated to <70
             * if score is more than 95% the intellegence is calculated to >130
             * if score is between 5 and 95 % then intellegence is calculated to
             * somewhere between 70 and 130.
             */
            if (scorePercent < 5) {
                intellegence = "< 70";
            }
            if (scorePercent > 95) {
                intellegence = "> 130";
            } else {
                intellegence = (70 + ((scorePercent - 5) * 0.66));
            }
            endPhrase.innerHTML = "Nu är deltest 3 över och du fick " + test3score + " poäng.";
            finalResult.innerHTML = "Din sammanlagda poäng för testerna blev: " +
            (test2.test2score + test3score + test1.test1score) +
            "<br> Av totala möjliga poäng: 60" + "<br> Din intellegenskvot är beräknad till " +
            intellegence + "<br><br> ladda om sidan för att göra om hela testet...";
            getTotalScore.innerHTML = "Klicka här för att se din intellegens";
            finalResult.style.color = "black";
            endPhrase.style.color = "black";
            content.appendChild(endPhrase);
            content.appendChild(getTotalScore);
            getTotalScore.addEventListener("click", function() {
                content.innerHTML = "";
                content.appendChild(finalResult);
            });
        },

        /**
         *  draws all flags
         */
        drawFlags: function() {
            var guessFlagListArray = ["Sverige", "Danmark", "Holland", "Finland",
                "Holland", "Finland", "Holland", "Danmark", "Holland"];
            var guessedFlags = [];
            var content = document.getElementsByClassName("content")[0];
            var starttTest3 = document.getElementsByClassName("starttTest3")[0];
            var divForFlags1 = document.createElement("div");
            var divForFlags2 = document.createElement("div");
            var divForFlags3 = document.createElement("div");
            var flagNederländerna1 = document.createElement("div");
            var flagNederländerna2 = document.createElement("div");
            var flagNederländerna3 = document.createElement("div");
            var flagNederländerna4 = document.createElement("div");
            var flagDanmark1 = document.createElement("div");
            var flagDanmark2 = document.createElement("div");
            var flagFinland1 = document.createElement("div");
            var flagFinland2 = document.createElement("div");
            var guessingCount = 0;
            var flagSverige = document.createElement("div");
            var divForList = document.createElement("div");
            var sverige =
            '<div class="gulVertikal"></div><div class="gulHorisontell"></div>';
            var danmark =
            '<div class="rö"></div><div class="hvid"></div>';
            var finland =
            '<div class="vitt"></div><div class="blåe"></div>';
            var nederländerna =
            '<div class="röd"></div><div class="blå"></div>';

            divForList.className = "divForList";
            divForFlags1.className = "divForFlags1";
            divForFlags2.className = "divForFlags2";
            divForFlags3.className = "divForFlags3";
            flagNederländerna1.className = "Holland";
            flagNederländerna2.className = "Holland";
            flagNederländerna3.className = "Holland";
            flagNederländerna4.className = "Holland";
            flagDanmark1.className = "Danmark";
            flagDanmark2.className = "Danmark";
            flagFinland1.className = "Finland";
            flagFinland2.className = "Finland";
            flagSverige.className = "Sverige";

            flagNederländerna1.innerHTML = nederländerna;
            flagDanmark1.innerHTML = danmark;
            flagDanmark2.innerHTML = danmark;
            flagFinland1.innerHTML = finland;
            flagFinland2.innerHTML = finland;
            flagNederländerna2.innerHTML = nederländerna;
            flagSverige.innerHTML = sverige;
            flagNederländerna3.innerHTML = nederländerna;
            flagNederländerna4.innerHTML = nederländerna;

            starttTest3.remove();
            content.appendChild(divForList);
            content.appendChild(divForFlags1);
            content.appendChild(divForFlags2);
            content.appendChild(divForFlags3);
            divForFlags1.appendChild(flagNederländerna1);
            divForFlags1.appendChild(flagDanmark1);
            divForFlags1.appendChild(flagFinland1);
            divForFlags2.appendChild(flagNederländerna2);
            divForFlags2.appendChild(flagSverige);
            divForFlags2.appendChild(flagDanmark2);
            divForFlags3.appendChild(flagFinland2);
            divForFlags3.appendChild(flagNederländerna3);
            divForFlags3.appendChild(flagNederländerna4);

            var sverigeDölja = document.getElementsByClassName("Sverige")[0];
            var sverigeVertikal = document.getElementsByClassName("gulVertikal")[0];
            var sverigeHorisontell = document.getElementsByClassName("gulHorisontell")[0];
            var hollandDölja = document.getElementsByClassName("Holland");
            var hollandRöd = document.getElementsByClassName("röd");
            var hollandBlå = document.getElementsByClassName("blå");
            var finlandDölja = document.getElementsByClassName("Finland");
            var finlandBlåe = document.getElementsByClassName("blåe");
            var finlandVitt = document.getElementsByClassName("vitt");
            var danmarkDölja = document.getElementsByClassName("Danmark");
            var danmarkRö = document.getElementsByClassName("rö");
            var danmarkHvid = document.getElementsByClassName("hvid");

            /**
             *  A timer that hide all flags and shows a list of flags in a certain order.
             * The timer also adds eventlisteners to all flags.
             */
            setTimeout(function() {
                for (var p = 0; p < guessFlagListArray.length; p++) {
                    divForList.innerHTML += ((p + 1) + " --> " + guessFlagListArray[p] + "<br />");
                }
                sverigeDölja.classList.toggle("hide");
                sverigeVertikal.classList.toggle("hide");
                sverigeHorisontell.classList.toggle("hide");

                for (var i = 0; i < hollandDölja.length; i++) {
                    hollandDölja[i].classList.toggle("hide");
                    hollandBlå[i].classList.toggle("hide");
                    hollandRöd[i].classList.toggle("hide");
                }
                for (i = 0; i < finlandDölja.length; i++) {
                    finlandDölja[i].classList.toggle("hide");
                    finlandBlåe[i].classList.toggle("hide");
                    finlandVitt[i].classList.toggle("hide");
                }
                for (i = 0; i < danmarkDölja.length; i++) {
                    danmarkDölja[i].classList.toggle("hide");
                    danmarkRö[i].classList.toggle("hide");
                    danmarkHvid[i].classList.toggle("hide");
                }
                hollandDölja[0].addEventListener("click", function(event) {
                    event.target.classList.toggle("hide");
                    hollandBlå[0].classList.toggle("hide");
                    hollandRöd[0].classList.toggle("hide");
                    hollandDölja[0].style.pointerEvents = "none";
                    guessedFlags.push(event.target.className);
                    if (event.target.className === guessFlagListArray[guessingCount]) {
                        test3score += 3;
                    } else {
                        test3.showResultTest3();
                    }
                    guessingCount += 1;
                });
                danmarkDölja[0].addEventListener("click", function(event) {
                    event.target.classList.toggle("hide");
                    danmarkRö[0].classList.toggle("hide");
                    danmarkHvid[0].classList.toggle("hide");
                    danmarkDölja[0].style.pointerEvents = "none";
                    guessedFlags.push(event.target.className);
                    if (event.target.className === guessFlagListArray[guessingCount]) {
                        test3score += 3;
                    } else {
                        test3.showResultTest3();
                    }
                    guessingCount += 1;
                });
                finlandDölja[0].addEventListener("click", function(event) {
                    event.target.classList.toggle("hide");
                    finlandBlåe[0].classList.toggle("hide");
                    finlandVitt[0].classList.toggle("hide");
                    finlandDölja[0].style.pointerEvents = "none";
                    guessedFlags.push(event.target.className);
                    if (event.target.className === guessFlagListArray[guessingCount]) {
                        test3score += 3;
                    } else {
                        test3.showResultTest3();
                    }
                    guessingCount += 1;
                });
                hollandDölja[1].addEventListener("click", function(event) {
                    event.target.classList.toggle("hide");
                    hollandBlå[1].classList.toggle("hide");
                    hollandRöd[1].classList.toggle("hide");
                    hollandDölja[1].style.pointerEvents = "none";
                    guessedFlags.push(event.target.className);
                    if (event.target.className === guessFlagListArray[guessingCount]) {
                        test3score += 3;
                    } else {
                        test3.showResultTest3();
                    }
                    guessingCount += 1;
                });
                sverigeDölja.addEventListener("click", function(event) {
                    event.target.classList.toggle("hide");
                    sverigeVertikal.classList.toggle("hide");
                    sverigeHorisontell.classList.toggle("hide");
                    sverigeDölja.style.pointerEvents = "none";
                    guessedFlags.push(event.target.className);
                    if (event.target.className === guessFlagListArray[guessingCount]) {
                        test3score += 3;
                    } else {
                        test3.showResultTest3();
                    }
                    guessingCount += 1;
                });
                danmarkDölja[1].addEventListener("click", function(event) {
                    event.target.classList.toggle("hide");
                    danmarkRö[1].classList.toggle("hide");
                    danmarkHvid[1].classList.toggle("hide");
                    danmarkDölja[1].style.pointerEvents = "none";
                    guessedFlags.push(event.target.className);
                    if (event.target.className === guessFlagListArray[guessingCount]) {
                        test3score += 3;
                    } else {
                        test3.showResultTest3();
                    }
                    guessingCount += 1;
                });
                finlandDölja[1].addEventListener("click", function(event) {
                    event.target.classList.toggle("hide");
                    finlandBlåe[1].classList.toggle("hide");
                    finlandVitt[1].classList.toggle("hide");
                    finlandDölja[1].style.pointerEvents = "none";
                    guessedFlags.push(event.target.className);
                    if (event.target.className === guessFlagListArray[guessingCount]) {
                        test3score += 3;
                    } else {
                        test3.showResultTest3();
                    }
                    guessingCount += 1;
                });
                hollandDölja[2].addEventListener("click", function(event) {
                    event.target.classList.toggle("hide");
                    hollandBlå[2].classList.toggle("hide");
                    hollandRöd[2].classList.toggle("hide");
                    hollandDölja[2].style.pointerEvents = "none";
                    guessedFlags.push(event.target.className);
                    if (event.target.className === guessFlagListArray[guessingCount]) {
                        test3score += 3;
                    } else {
                        test3.showResultTest3();
                    }
                    guessingCount += 1;
                });
                hollandDölja[3].addEventListener("click", function(event) {
                    event.target.classList.toggle("hide");
                    hollandBlå[3].classList.toggle("hide");
                    hollandRöd[3].classList.toggle("hide");
                    hollandDölja[3].style.pointerEvents = "none";
                    guessedFlags.push(event.target.className);
                    if (event.target.className === guessFlagListArray[guessingCount]) {
                        test3score += 3;
                    } else {
                        test3.showResultTest3();
                    }
                    guessingCount += 1;
                });
            }, 3000);
        }
    };
    return test3;
})();
