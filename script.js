var istatus = document.querySelector("h5");
var addFriend =document.querySelector("#add")


addFriend.addEventListener("click",function(){
  istatus.innerHTML = "Friends"
  istatus.style.color="green"
})

var removeFriend = document.querySelector("#remove")

removeFriend.addEventListener("click",function(){
  istatus.innerHTML="stranger"
  istatus.style.color="red"
})