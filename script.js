$('[name="button"]').click(function(){
    var selected = $("select option:selected");
    var store = [];
    selected.forEach(function(){store.push(Number(selected[i].outerHTML.replace(/\D/g,''))/100);})
    var total = (store.reduce(function(a,b){return a+b})).toFixed(2);
    $("<p>" + total + "</p>").appendTo("#total")
});
