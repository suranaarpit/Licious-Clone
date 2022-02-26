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

    if(m.length == 10){

        alert("123456 is the OTP to access your Licious account. Do not share this with anyone. Thank you for using Licious. - Licious")
    }
    else if(m.length>10){
        alert("Please!! Enter a Valid Mobile 📱 Number")
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
      localStorage.setItem("confirm", "1")
      
        // otp="";
    }
}


document.querySelector("#confirmLogin").addEventListener("click",function(event){
    getOtp();
})
function logoutFun(){
    // if(a!){
        var login = document.querySelector("#login")
        login.style.display = "block";
        // document.querySelector("#loginside").classList.remove("loginactive")
        // var cLogin = document.querySelector("#closelogin")
        // cLogin.style.display = "none";
      var logout = document.querySelector("#logouttext")
      logout.style.display = "none"
      localStorage.setItem("confirm", "0")
    // }
    
}
var a = JSON.parse(localStorage.getItem("confirm"))
if(a=="1"){
    var login = document.querySelector("#login")
        login.style.display = "none";
        var logout = document.querySelector("#logouttext")
      logout.style.display = "block"
}
else{
    
    var login = document.querySelector("#login")
        login.style.display = "block";
        var logout = document.querySelector("#logouttext")
      logout.style.display = "none";
}