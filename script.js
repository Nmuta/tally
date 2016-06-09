var button = document.getElementById("button")
var toys = document.getElementsByTagName("option")
var newTotal = document.createElement("p")


button.addEventListener("click", function(){
  newTotal.innerHTML = " "
  document.getElementById("total").appendChild(newTotal)

  var total = 0
  for (var i = 0; i < toys.length; i++) {
    if (i === 0 || i === 5) {
    } else if (toys[i].selected) {
      total += Number(toys[i].value.split(" ")[3])
    }
  }
  newTotal.innerHTML = "$" + total
  document.getElementById("total").appendChild(newTotal)
})
