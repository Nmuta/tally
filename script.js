document.getElementsByName("button")[0].addEventListener("click",function() {doPrices(document.getElementsByName("toys")[0].options)});

function doPrices(arrayChoices) {
  var values = []
  for (var i = 0; i < arrayChoices.length; i++) {
    if (arrayChoices[i].selected) {
      values.push(Number(arrayChoices[i].value.split(" ")[arrayChoices[i].value.split(" ").length-1]))
    }
  }
  var result = values.length > 0 ? values.reduce(function(sum,next){return Number(sum)+Number(next)}) : 0
  document.getElementById("total").innerHTML = `The sum is ${result.toFixed(2)}`
}
