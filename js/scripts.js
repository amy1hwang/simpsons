var add = function(number1, number2, number3) {
  return number1 + number2 + number3;
};

$(document).ready(function() {
  $("form#simpsons").submit(function(event) {
  var activity = parseInt($("select#activity").val());
  var student = parseInt($("select#student").val());
  var word = parseInt($("select#word").val());
  var result = add(activity, student, word);

  var name = function(activity, student, word) {
    if (result >= 3 && result < 5) {
      return "are Homer!";
    } else if (result >= 5 && result < 8 ) {
      return "are Marge";
    } else if (result >= 8 && result < 10 ) {
      return "are Bart";
    } else if (result >= 10 && result < 12 ) {
      return "are Lisa";
    } else if (result >= 100) {
      return "didn't answer all the questions."
    };
  };
  $(".output").text(name(activity, student, word));
  $(".answer").show();
   event.preventDefault();
 });
});
