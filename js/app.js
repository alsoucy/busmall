'use strict'
//global var
// var prod = ['babysweep', 'bag', 'boots','chair','cthulhu', 'dragon', 'pen','scissors', 'shark','unicorn', 'usb', 'water-can', 'wine-glass' ];
var allProd = [];
//constructor function
 function Product (prodName, prodPath) {
   this.prodName = prodName;
   this.prodPath = prodPath;
   this.clicks = 0;
//when new products instantiated push to allProd array
   allProd.push(this);
 };
//instances of product
 var babysweep = new Product('babysweep', 'images/babysweepsmall.png');
 var bag = new Product('bag', 'images/bag.jpg');
 var banana = new Product('banana', 'images/banana.jpg');
 var boots = new Product('boots', 'images/boots.jpg');
 var chair = new Product('chair', 'images/chair.jpg');
 var cthulhu = new Product('cthulhu', 'images/cthulhu.jpg');
 var dragon = new Product('dragon','images/dragon.jpg');
 var pen = new Product('pen', 'images/pen.jpg');
 var scissors = new Product('scissors', 'images/scissors.jpg');
 var shark = new Product('shark', 'images/shark.jpg');
 var unicorn = new Product('unicorn', 'images/unicorn.jpg');
 var usb = new Product('usb', 'images/usb.gif');
 var watercan = new Product('watercan', 'images/watercan.jpg');
 var wineglass = new Product('wineglass', 'images/wineglass.jpg');

//create random number 1-15
var randomNum = function() {
  return Math.ceil(Math.random()*allProd.length);
};
//variables for random # holder
var img1 = document.getElementById('image1');
var img2 = document.getElementById('image2');
var img3 = document.getElementById('image3');

//select 3 random images - - NOT WORKING
function random() {
var productOne = randomNum();
img1.src = allProd[productOne].prodPath;

var productTwo = randomNum();
  while (productOne === productTwo || productOne === productThree ){
    var productTwo = randomNum();
  };
  img2.src = allProd[productTwo].prodPath;

  var productThree = randomNum();
    while (productOne === productThree || productTwo === productThree){
      productThree = randomNum();
    };
  img3.src = allProd[productThree].prodPath;
}


random();


function handleChangeImage() {
  random();
}

image1.addEventListener('click', handleChangeImage);
image2.addEventListener('click', handleChangeImage);
image3.addEventListener('click', handleChangeImage);
