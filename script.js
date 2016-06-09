$(document).ready(function(){
  var click=document.getElementsByTagName('button')[0];
  var opt=document.getElementsByTagName("option");
  var tot=document.getElementById('total')
  console.log(opt);
  var arr =[]
  click.addEventListener("click", function(){
    for (var i = 0; i < opt.length; i++) {
      if(opt[i].selected){
        arr.push(Number(((opt[i].value).split(": "))[1]));
      };
    }
    console.log(arr);
    var x = arr.reduce(function(prev,curr){
        return prev+curr
      })
    console.log(x);
    var thing = document.createElement("div")
    thing.innerHTML= "$"+x.toFixed(2)
    tot.appendChild(thing)
  });
  })
