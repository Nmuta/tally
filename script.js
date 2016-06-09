$('[name="button"]').click(() => {
  $('#total').html($('.selectable').val().map((val) => {
    return parseFloat(val.replace(/[^\d.-]/g, ''))
  }).reduce((p, c) => { return p + c }))
})
