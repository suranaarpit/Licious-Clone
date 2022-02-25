var cartBtn = document.querySelector("#carttext")
cartBtn.addEventListener("click", cartOpen)
function cartOpen(){
var cartArea =  document.querySelector("#cartside")
cartArea.classList.add("cartactive")
var closeBtn = document.querySelector("#closecart")
closeBtn.style.display = "block"
// document.body.style.overflow = "hidden"
}
var closeBtn = document.querySelector("#closecart")
closeBtn.addEventListener("click", cartClose)
function cartClose(){
var cartArea =  document.querySelector("#cartside")
cartArea.classList.remove("cartactive")
closeBtn.style.display = "none"
}