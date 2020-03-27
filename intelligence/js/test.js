window.Test = (function() {
  "use strict";

  /**

   * vairables used for counting score, holding information of active test

   * and the reset function. For example variable test2 holds the module Test2

   * used in reset function for restarting test 2 when reset is used.

   */

  var startButtonTest1 = document.getElementsByClassName("startButtonTest1")[0];

  var test1 = window.Test1;

  var test2 = window.Test2;

  var test3 = window.Test3;

  // var nextTest2 = document.getElementsByClassName("nextTest2")[0];

  // var nextTest3 = document.getElementsByClassName("nextTest3")[0];

  // var savedResultTest1 = 0;

  // var savedResultTest2 = 0;

  // var savedResultTest3 = 0;

  var activeTest;

  var reset;

  reset = {
    reset: function() {
      if (this.activeTest === 1) {
        test1.titleTest();

        test1.question1();
      } else if (this.activeTest === 2) {
        test2.titleTest2();
      } else if (this.activeTest === 3) {
        test3.titleTest3();
      }

      console.log("aktivt test är: " + reset.activeTest);
    },

    activeTest: activeTest
  };

  /**

   * Starts the test with test1. Three functions.

   * titleTest changes the content appearence and add text.

   * question1 is the first question in test1 and in this function other

   * functions are included that code for the following 4 questions in the test1.

   */

  startButtonTest1.addEventListener("click", function() {
    test1.removeStartButton();

    test1.titleTest();

    test1.question1();
  });

  return reset;
})();
