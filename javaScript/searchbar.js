var x = JSON.parse(localStorage.getItem("BestSellers"))||[];
console.log(x[1]);
function search(){
    var searchText = document.getElementById("searchinput").value;
    console.log(searchText);
    var filterData = BestSellers.filter(function(item){
        return item.name.includes(searchText);
    });
    console.log(filterData);
    _bestSell(filterData);
}