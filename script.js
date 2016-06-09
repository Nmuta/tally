$(document).ready(function(){
  var total = document.getElementById('total');
  var options = document.getElementsByName('go_bot');
  var priceArray = [];
  var button = $('button');

  $(button).on('click',function(event){
    event.preventDefault();
    for(var i=0;i<options.length;i++){
      var option = options[i].innerHTML;
      if(options[i].selected){
        var price = Number(option.slice(-7));
        priceArray.push(price);
      }
    }
    var tallied = findTotal(priceArray);
    $(total).append(tallied);
  })

  function findTotal(array){
    return array.reduce(function(a,b){
      return a+b;
    })
  }
})
