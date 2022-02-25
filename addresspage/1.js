document.querySelector("#form").addEventListener("submit", ganerateForm);
var addressdata = JSON.parse(localStorage.getItem(addressdata)) || [];
function ganerateForm(event) {
  event.preventDefault();
  var location = document.querySelector("#location").value;
  var addres = document.querySelector("#address").value;
  var landmark = document.querySelector("#landmark").value;
  var city = document.querySelector("#city").value;
  var mobileNo = document.querySelector("#mobileNo").value;
  var addresobj = {
    location: location,
    addres: addres,
    landmark: landmark,
    city: city,
    mobileNo: mobileNo,
  };

  addressdata.push(addresobj);
  localStorage.setItem("addressdata", JSON.stringify(addressdata));
  document.querySelector(".radioDiv>#address").style.color = "green";
}
