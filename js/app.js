'use strict'
//global var
var prod = ['babysweep', 'bag', 'boots','chair','cthulhu', 'dragon', 'pen','scissors', 'shark','unicorn', 'usb', 'water-can', 'wine-glass' ];
var allProd = [];
//constructor function
 function Product (prodName, prodPath) {
   this.prodName = prodName;
   this.prodFile = prodPath;
   this.clicks = 0;
//when new products instantiated push to allProd array
   allProd.push(this);
 };
//instances of product
 var babysweep = new Product('babysweep', 'images/babysweep.png');
 var bag = new Product('bag', 'images/bag.jpg');
 var banana = new Product('banana', 'images/banana.jpg');
 var boots = new Product('boots', 'images/boots.jpg');
 var chair = new Product('chair', 'images/chair.jpg');
 var cthulhu = new Product('cthulhu', 'images/cthulhu');
 var dragon = new Product('dragon','images/dragon');
 var pen = new Product('pen', 'images/pen.jpg');
 var scissors = new Product('scissors', 'images/scissors.jpg');
 var shark = new Product('shark', 'images/shark.jpg');
 var unicorn = new Product('unicorn', 'images/unicorn.jpg');
 var usb = new Product('usb', 'images/usb.gif');
 var watercan = new Product('watercan', 'images/watercan');
 var wineglass = new Product('wineclass', 'images/wineglass.jpg');

//create random number 1-15
var randomNum = function() {
  return Math.ceil(Math.random()*allProd.length);
};
//variables for random # holder
var productOne = randomNum();
var productTwo = randomNum();
var productThree = randomNum();

//functions for
var img1 = document.getElementById('image1');
img1.setAttribute('src', allProd[productOne].prodPath);

var img2 = document.getElementById('image2');
img2.setAttribute('src', allProd[productTwo].prodPath);

var img3 = document.getElementById('image3');
img3.setAttribute('src', allProd[productThree].prodPath);
