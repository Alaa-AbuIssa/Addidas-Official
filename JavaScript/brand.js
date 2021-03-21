alert ("Hello There");

var favouriteBrands = prompt("what's your favourite Brands?");


while (favouriteBrands !== 'adidas' && favouriteBrands !== 'puma') {
   favouriteBrands = prompt('please only write adidas OR puma');
    
}

if(favouriteBrands=='adidas'||favouriteBrands=='puma' )
{
    alert ('Welcome to your small home');
    //document.write('<h3> Welcome to your small Home <h3>') ;
}

else{
    alert('See You in there WebPage');
}


var NumberOfProducts = prompt('How many Products do you want?');

var Products = '';
var result = '';

if (favouriteBrands == 'puma') {
    Products = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsZ2UshyejhPa_d8Z3JfjhGw8MQncFBf_5Rw&usqp=CAU"/> ';

} else if (favouriteBrands == 'adidas') {
    Products = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTeijVDvWFr3IvvW2R_STi7Dz0PkXgDPYWQQ&usqp=CAU"/> ';
    
}

console.log(Products);

for (var i = 0; i < NumberOfProducts; i++) {
    result += Products;
}

console.log(result);

document.write(result);


