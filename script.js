var toys = document.getElementsByTagName("option");
var button = document.getElementById('button');
var totalBox = document.getElementById('total')
var total = document.createElement('p');

button.addEventListener('click', function(){
    total.innerHTML = "";
    var counter = 0;
    for (var i = 0; i < toys.length; i++) {
      if(i===0 || i===5 ){
      }
      else if (toys[i].selected){
        counter += Number(toys[i].value.split(" ")[3]);
        console.log(counter)
      }
    }
    total.innerHTML = "$" + counter;
    totalBox.appendChild(total)

})
