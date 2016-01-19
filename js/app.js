'use strict'

var prod = ['babysweep', 'bag', 'boots','chair','cthulhu', 'dragon', 'pen','scissors', 'shark','unicorn', 'usb', 'water-can', 'wine-glass' ];

 function Product (prodName, prodFile) {
   this.prodName = prodName;
   this.prodFile = prodFile;
  //  this.clicks = clicks;
 };

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

var random = function() {
  return Math.ceil(Math.random()*15);
};

var img1 = document.getElementById('image1');
