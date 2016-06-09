var submt = document.getElementById('submit');
var selector = document.getElementsByClassName('selectable')[0];
var msg = document.getElementById('total');


submt.addEventListener("click",callback);
function callback(){

  var bucket = [];
  for (var i = 0; i < selector.length; i++) {
    if(selector[i].selected){
      bucket.push(Number(selector[i].value.split(": ")[1]))
      console.log("number: ",Number(selector[i].value.split(": ")[1]));
  }

  }
var total = bucket.reduce(function(prev,curr){
  return prev + curr;
}).toFixed(2);
var totaled = document.createElement("h3");
msg.innerHTML = ""
totaled.innerHTML = "$"+total;
msg.appendChild(totaled)
}

// var request = new XMLHttpRequest;
// request.onreadystatechange = function(){
//   if(request.readyState == 4 && request.status < 400);
//   var userInput = JSON.parse(request.responseText)
//   var enter = userInput.results
// }
// request.open("GET","url");
// request.send();
