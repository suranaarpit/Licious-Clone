var x = JSON.parse(localStorage.getItem("allData"))||[];
var z;

function showItems(x){  
 document.querySelector("#searchResult").innerHTML=""

   x.map(function(e,index,array){
       var primediv=document.createElement("div");
       primediv.setAttribute("class","searchprime");
       var img=document.createElement("img");
       img.setAttribute("src",e.imgUrl);
       img.setAttribute("class","searchimg");
       var searchname=document.createElement("h3");
       var searchname=document.createElement("h3");
       searchname.innerText=e.name;
       primediv.append(img,searchname);
       document.querySelector("#searchResult").append(primediv)
      
       // searchResult
   })
   
  
}
function search(){
   var fillerText=document.getElementById("searchinput").value.toUpperCase();
   console.log(fillerText)
   var fillerData = x.filter(function(e,index){
     return e.name.toUpperCase().includes(fillerText);
   });
     console.log(fillerData)
   showItems(fillerData);
 }
 showItems(fillerData)   

