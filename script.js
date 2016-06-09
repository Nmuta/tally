$(document).ready(function(){
      $('button').click(function(){
          var x = selected(arr);
          $("#total").append(`<p>${x}</p>`)
      })
})
var arr = document.getElementsByClassName("selectable")[0];

function selected(arr){
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    if(arr[i].selected){
      var arr2 = arr[i].innerHTML.split(":");
      result += Number(arr2[1]);
    }
  }
  return `$${result.toFixed(2)}`;
}
