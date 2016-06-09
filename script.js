var toys = document.getElementsByName("toys");
var button = document.getElementsByName("button")[0];
var sum = [];
var divv = document.getElementById("total");

$(button).on("click", function(){
  for (var x in toys){
    for (var y in toys[x].options){
      if (toys[x][y].selected && toys[x]){
        var val = toys[x][y].innerHTML;
        var number = Number(val.substring(val.indexOf(":")+1, val.length));
        sum.push(number);
        var total = sum.reduce(function(prev,curr){
          return prev+curr;
        });
        var result = document.createElement("h5");
        result.innerHTML = total;
        divv.appendChild(result)
      }
    }
  }
});
