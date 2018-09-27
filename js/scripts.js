

$(document).ready(function() {
  $("form").submit(function(event) {

    var countTo = parseInt($("input#countTo").val());
    var countBy = parseInt($("input#countBy").val());

    var arraySize = (countTo/countBy);
        console.log("This is array size not rounded: " + arraySize);
    arraySize = Math.floor(arraySize);

    var outputArray = [];
    for (var i = 0; i < arraySize; i++) {
      outputArray[i] = countBy * (i+1);
      console.log(outputArray);
    };
    $("span#output").text(outputArray);
    event.preventDefault();
  });
});
