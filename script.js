$('button').on('click',function(){
  $('#total').html('');
  var $selected = $('.selectable').val().map(function(value){
      var splitVal = value.split(' : ');
      return splitVal[1];
    }).reduce(function(a,b){
        return +a + +b;
    })
    $('#total').append($selected);
});
