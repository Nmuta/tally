//category headings
var menu = document.getElementById('menu');
var button = document.getElementById('buttoni');


button.addEventListener("click", function(){
  var arr = [];
  for(var i = 0; i < menu.options.length; i++){
    if(menu.options[i].selected === true){
      arr.push(Number(menu.options[i].selected.value.split(": ")[1]))
  }
  
})}


console.log(menu.options[1].value);

var button = document.getElementById('buttoni');
var selectBox = document.getElementsByClassName('selectable')[0];
var totalBox = document.getElementById("total");

button.addEventListener("click", function(){
  var arr = [];
  for(var i = 0; i < selectBox.length; i++){
    if(selectBox[i].selected){
      arr.push(Number(selectBox[i].value.split(": ")[1]));
    }
  }
  var total = arr.reduce(function(prev, curr){
    return prev + curr;
  }).toFixed(2);
  totalBox.innerHTML = total;
})
