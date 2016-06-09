$(document).ready(function(){

  var button = document.getElementsByName('button');
  var bots = document.getElementsByName('go_bot');

  var sum = 0;

  $(button).on('click', function(){

    // JAVASCRIPT
    //
    // var totalArray = [];
    //
    // for (indexPos in bots){
    //
    //   if (bots[indexPos].selected === true) {
    //     var str = (bots[indexPos].value);
    //     var temp = str.split(" : ")
    //     totalArray.push(Number(temp[1]))
    //   }
    // }
    //
    // var sum = totalArray.reduce(function(prev,curr){
    //   return (prev+curr)
    // })
    //
    // $('#total').html(sum.toFixed(2))
    // var temp = []

    // JQUERY
    var temp = $('.selectable').val();
    var array = [];
    for (index in temp) {
      var array = [];
      array.push(temp[index].split(" : "));
      sum += Number(array[0][1])
    }
    $("#total").html(sum.toFixed(2));

  })




})
