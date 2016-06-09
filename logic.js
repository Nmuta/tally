function selections(arr){
  var bin = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].selected) {
      bin.push(arr[i].value);
    }
  }
  return bin;
}

function getPrice(arr) {
  var bin = [];
  arr.forEach(function(item, i) {
    var splitArr = arr[i].split(": ");
    var cost = splitArr[1];
    bin.push(cost);
  })
  return bin;
}

function sumSelections(selections){
  var total = 0;
  for (var i = 0; i < selections.length; i++) {
      total += Number(selections[i]);
  }
  return total;
}
