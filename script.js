document.getElementsByName("button")[0].addEventListener("click",function() {doPrices()});

function doPrices() {
  var values=getSelections()
  var result=0
  el=document.getElementById("total")
  if (values.length === 0) {
    result = 0
  } else {
    result = values.reduce(function(total, next) {
    return Number(total) + Number(next);
    })
  }
  el.innerHTML = `The sum is ${result.toFixed(2)}`
}
function getSelections() {
  var prices = document.getElementsByName("toys")[0]
  var values = []
  for (var i = 0; i < prices.options.length; i++) {
    if (prices.options[i].selected) {
      var tempArray = prices.options[i].value.split(" ")
      values.push(Number(tempArray[tempArray.length - 1]))
    }
  }
  return values
}
