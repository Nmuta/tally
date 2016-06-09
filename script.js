var button = document.getElementById('button');
var total = document.getElementById('total');
var select = document.getElementsByClassName('selectable')[0];

button.addEventListener('click', function() {
  var arr = [];
  for (var i = 0; i < select.length; i++) {
    if(select[i].selected){
      //below gives an array of all selected numbers
      arr.push(Number(select[i].value.split(': ')[1]));
    }
  }
  var grandTotal = arr.reduce(function(prev, curr) {
    return prev + curr;
  }).toFixed(2);
  var totaled = document.createElement('div');
  //below clears the div each time
  total.innerHTML = '';
  //below is the var grandTotal function reduced to a total
  totaled.innerHTML = '$'+grandTotal;
  total.appendChild(totaled);
})


//Below is an example in jQuery slacked from Murphy for my future reference:
// $('[name="button"]').click(function(){
//   $('#total').html($('.selectable').val().map((val) => {
//     return parseFloat(val.replace(/[^\d.-]/g, ''))
//   }).reduce((prev, curv) => {
//     return prev + curv
//   }))
// })
