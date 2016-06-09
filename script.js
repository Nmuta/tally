$(document).ready(function(){
  $('button').on('click', function(){
    var $items = $(".selectable").val().map(a=>{
                 var splits = a.split(" : "); return splits[1]}).
                 reduce((a,b)=>+a + +b)

   $(".displayBox").html(`$${$items.toFixed(2)}`)

  })
})
