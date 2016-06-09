var button = document.getElementById('btn')
var selectBox = document.getElementsByClassName('selectable')[0]
var container = document.getElementById('total')


button.addEventListener('click', function(){
  var arr = []
  for (var i = 0; i < selectBox.length; i++) {
    if(selectBox[i].selected){
      arr.push(Number(selectBox[i].value.split(': ')[1]))
      }

    }
  var summed = arr.reduce(function(prev,curr){
    return (prev+curr);
  }).toFixed(2);


var newNode = document.createElement('div')
 container.innerHTML= "";
 newNode.innerHTML = summed;
 container.appendChild(newNode)
})
