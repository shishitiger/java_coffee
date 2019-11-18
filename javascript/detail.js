var size_factor=1;
var flavor_factor=1;

function change_factor(type, factor){
	if(type == "size"){
		size_factor=factor;
	} else{
		flavor_factor=factor;
	}
	calculate_price();
}

function calculate_price(){
	var price = basic_price * size_factor * flavor_factor;
	price=Math.round(price * 100) / 100;
	document.getElementById("td_unit_price").innerHTML = "$" + price;
	document.getElementById("unit_price").value = price;
}