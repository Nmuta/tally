
var button = document.getElementsByName('button')[0];
  button.addEventListener('click', function() {
var price = document.getElementsByName('toys')[0];
var total = [];
for (var i = 0; i < price.length; i++) {
  if (price.options[i].selected) {
    total.push(price.options[i].value)
  console.log(total);
   var rel = total[0].split(": ");
   console.log(rel[1]);
  }
}
var sel = rel.reduce(function(a,b) {
  return Number(a) + Number(b);
},0)
var h4 = document.createElement('h4')
h4.innerHTML = " $ " + sel.toFixed(2);
document.getElementById('total').appendChild(h4);
})

// for (var i = 0; i < total.length; i++) {
//   if (total[i].selected) {
//     arr.push(Number([i].value.split)(": ")[1]));
//   }
// }


//$(".selectable").val();
