var loginBtn = document.querySelector("#login")
loginBtn.addEventListener("click", loginOpen)
function loginOpen(){
    var cLogin = document.querySelector("#closelogin")
    var loginArea = document.querySelector("#loginside")
    loginArea.classList.add("loginactive")
    // var cLogin = document.querySelector("#clogin")
    cLogin.style.display = "block"

}
var cLogin = document.querySelector("#closelogin")
cLogin.addEventListener("click", loginClose)
function loginClose(){
  
    var loginArea = document.querySelector("#loginside")
    loginArea.classList.remove("loginactive")
    cLogin.style.display = "none"
}


function getMobile(){
    var m = document.querySelector("#mobile").value;
    console.log(m.length);
    // for(var i = 0; i<=10; i++){
    //     if(m[i]==10){
    //         alert("1234")
    //     }
    // }

    if(m.length ==10){

        alert("Your OTP is 123456")
    }
    else if(m.length>10){
        alert("Enter a valid mobile number")
    }

}

var x;
function getOtp(event){
    
    var otp = document.querySelector("#onetimepass").value;
    console.log(typeof(otp))
    // x=otp;
    if(otp=="123456" ){
        console.log("hi user")
        var login = document.querySelector("#login")
        login.style.display = "none";
        document.querySelector("#loginside").classList.remove("loginactive")
        var cLogin = document.querySelector("#closelogin")
        cLogin.style.display = "none";
      var logout = document.querySelector("#logouttext")
      logout.style.display = "block"
      document.querySelector("#mobile").value = "";
      document.querySelector("#onetimepass").value = "";
      localStorage.setItem("confirm", JSON.stringify("1"))
      
        // otp="";
    }
}
document.querySelector("#confirmLogin").addEventListener("click",function(event){
    getOtp();
})
function logoutFun(){
    var a = JSON.parse(localStorage.getItem("confirm"))
    if(a!=null){
        var login = document.querySelector("#login")
        login.style.display = "block";
        // document.querySelector("#loginside").classList.remove("loginactive")
        // var cLogin = document.querySelector("#closelogin")
        // cLogin.style.display = "none";
      var logout = document.querySelector("#logouttext")
      logout.style.display = "none"
    }
    
}

// document.querySelector("#confirmLogin").addEventListener("click",loginDone)
// function loginDone(event){
//     event.preventDefault();

//     if(Number(x)==12345){
//         console.log("hi user")
//     }
// }