$('[name="button"]').click(function(){
  $('#total').html($('.selectable').val().map((val) => {
    return parseFloat(val.replace(/[^\d.-]/g, ''))
  }).reduce((prev, curv) => {
    return prev + curv
  }))
})
