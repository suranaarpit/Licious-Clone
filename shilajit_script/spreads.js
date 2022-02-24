var spreadsdata=JSON.parse(localStorage.getItem("spreadsdata"))||[];
console.log("spreadsdata",spreadsdata);
    _spread(spreadsdata);





//map
    function  _spread(spreadsdata){



        spreadsdata.map(function(e,index,array){
    var main= document.createElement("div");
    main.setAttribute("class","main");
    var img=document.createElement("img");
    
    img.setAttribute("src",e.imgUrl);
    img.setAttribute("class","image");
    var name=document.createElement("h4");
    name.innerText=e.name;
    var des=document.createElement("p");
    des.setAttribute("class","des");
    des.innerText=e.des;
    var wgt=document.createElement("div");
    wgt.setAttribute("class","wgt");
    var net_tag=document.createElement("h6");
    net_tag.innerText=e.net_tag;

    var net=document.createElement("h6");
        net.innerText=e.net;
        var n_gm=document.createElement("h6");
        n_gm.innerText=e.unit;

    var gross_tag=document.createElement("h6");
    gross_tag.innerText=e.gross_tag;
    var gross=document.createElement("h6");
    gross.innerText=e.gross;
    var g_gm=document.createElement("h6");
    g_gm.innerText=e.unit;

    var hold=document.createElement("div");
    hold.setAttribute("class","hold");
    var pri=document.createElement("div");
    pri.setAttribute("class","pri");
    var price_tag=document.createElement("h5");
    price_tag.innerText=e.price_tag;
    var cuurency=document.createElement("h5");
    cuurency.innerText=e.cuurency;
    var price=document.createElement("h5");
    price.innerText=e.price;
    var strikePrice=document.createElement("strike");
    strikePrice.innerText=e.strikePrice;


    var btndiv=document.createElement("div");
    btndiv.setAttribute("class","btndiv");
   var  addCart=document.createElement("button");
   addCart.setAttribute("class","addcartbtn");
   addCart.innerText="Add to Cart";


    wgt.append(net_tag,net,n_gm,gross_tag,gross,g_gm);
    
    btndiv.append(addCart)
    pri.append(price_tag,cuurency,price,strikePrice,addCart);
     
    
    main.append(img,name,des,wgt,pri);
    document.querySelector("#container").append(main);
})

    }