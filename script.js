var submit = document.getElementById("sum");
var selector = document.getElementsByClassName("selectable")[0];
var options = selector.options;
var answer = document.getElementById("total")

submit.addEventListener("click", function(){
  var selArr = selections(options);
  var prices = getPrice(selArr);
  var totalOfSelections = sumSelections(prices);
  console.log(totalOfSelections);
  answer.innerHTML = "$" + totalOfSelections.toFixed(2);
  })
