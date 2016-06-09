var selectBox = document.getElementsByClassName('selectable')[0];
var button = document.getElementsByTagName('button')[0];
var totalBox = document.getElementById('total');

button.addEventListener("click", function() {
  var newArr = []
  for (var i = 0; i < selectBox.length; i++) {
    if (selectBox[i].selected) {
    newArr.push(Number(selectBox[i].value.split(": ")[1]));
    }
  }
  
  var sum = newArr.reduce(function(sum, curr) {
    return (sum + curr);
  }).toFixed(2);

  var total = document.createElement('div');
  total.innerHTML = "$" + sum;
  totalBox.innerHTML = "";
  totalBox.appendChild(total);
})
