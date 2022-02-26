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



var cardArr=JSON.parse(localStorage.getItem("cardArr"))||[];
 console.log(cardArr)

 function display(e){
    document.querySelector("#addproduct").innerHTML=""
      cardArr.map(function (e,index) {
    var div1=document.createElement("div");
    var no=document.createElement("h3");
     no.innerText=index+1
    
     no.setAttribute("id", "no");
      
    var pa=document.createElement("h3");
     pa.innerText=e.name;
     pa.setAttribute("id", "name");

     var div2 = document.createElement("div");
      div2.setAttribute("class", "pricep");
      
     var div3 = document.createElement("div");
    var gram=document.createElement("button");
      gram.innerText=e.gross + e.unit;
      gram.setAttribute("id", "gram");

      var price=document.createElement("p");
       price.innerText=e.cuurency+e.price;
       price.setAttribute("id", "price");
      
     var div4 = document.createElement("div");
      div4.setAttribute("id", "div4")
      div4.append(no,pa)
      var btu1= document.createElement("button");
        btu1.setAttribute("id", "btu1");
        btu1.addEventListener("click", function(){
            dicre(index)
        } )
       
      btu1.innerText="-"
      var quant=document.createElement("p");
      quant.innerText= e.quant;
      quant.setAttribute("id", "qunty");
       var btu2= document.createElement("button");
       btu2.addEventListener("click", function(){
        increse(index)
    } )
       btu2.innerText= "+"
       btu2.setAttribute("id", "btu2");
       
    //    div3.append(gram,price);
    //    div4.append(btu1,qunty,btu2);
    var element = document.createElement('hr');
        document.body.appendChild(element);
       div2.append(gram,price,btu1,quant,btu2)
       div1.append(div4,div2,element)
       document.querySelector("#addproduct").append(div1);
       console.log(e)
        
  });
 }
 
 function  increse(index){
  if( cardArr[index].quant !=0){
    cardArr[index].quant++
 
localStorage.setItem("cardArr", JSON.stringify(cardArr));
document.getElementById("stotal").innerText=total
addE()
addto()
 }
else if(cardArr[index].quant==0){
  cardArr[index].quant++
  localStorage.setItem("cardArr", JSON.stringify(cardArr));
    document.getElementById("stotal").innerText=total
    addE()
   addto()
  
 }
display(cardArr)
}
  function addto(){
  var total=cardArr.reduce(function(acc,e ,index){
 return acc+(e.price*e.quant)
 display(cardArr)

   },0);
   document.getElementById("stotal").innerText=total
   addE()
display(cardArr)
  }
     function dicre(index){
      if(cardArr[index].quant !=0){
        cardArr[index].quant--
        localStorage.setItem("cardArr", JSON.stringify(cardArr));
        document.getElementById("stotal").innerText=total
        addE()
        subto()
      }
      else if(cardArr[index].quant==0){
        cardArr[index].quant++
        localStorage.setItem("cardArr", JSON.stringify(cardArr));
      
      document.getElementById("stotal").innerText=total
      addE()
      subto()
       }
        }
        display(cardArr) 

     function subto(){
        var total=cardArr.reduce(function(acc,e ,index){
       return acc+(e.price*e.quant)
       display(cardArr)
      
         },0);
         document.getElementById("stotal").innerText=total
         addE()
      display(cardArr)
        }
        var c=0;
       function addE(){
           
           if(c==0){
            document.getElementById("total").innerText= +(document.getElementById("stotal").innerHTML)+39
       }
        else if (+(total)>10) {
            document.getElementById("total").innerText=+(document.getElementById("stotal").innerHTML)
            c++
        }
         else if(+(total)<10){
             c=0;
             
            document.getElementById("total").innerText=+(document.getElementById("stotal").innerHTML)
         }
        }
        subto()
  addto()
  display(cardArr)  