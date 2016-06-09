
$(document).ready(function() {
    $('button').click(function() {

        var options = document.getElementById('selectable')
        var total = 0
        for (var i=0; i<options.length; i++){
            if (options.options[i].selected) {
                total += Number(options.options[i].innerHTML.split(':')[1]);
            }
        }

        $('#total').append('$' + total.toFixed(2))

    })





})
