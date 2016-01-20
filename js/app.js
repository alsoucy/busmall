'use strict'
//global var
var prod = ['babysweep', 'bag', 'boots','chair','cthulhu', 'dragon', 'pen','scissors', 'shark','unicorn', 'usb', 'water-can', 'wine-glass' ];
var allProd = [];
var totalClicks = 0;
var pageItems = [];

//constructor function
 function Product (prodName, prodPath) {
   this.prodName = prodName;
   this.prodPath = prodPath;
   this.clicks = 0;
   this.timesDisplayed = 0;
   this.percentClicked = 0;
 //   this.findPercentClicked = function() {
 //   this.percentClicked = (this.timesClicked / this.timesDisplayed).toFixed(2) * 100;
 // }
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
  return Math.floor(Math.random()*allProd.length);
}
var productOne = 0;
var productTwo = 0;
var productThree = 0;
var img1 = document.getElementById('image1');
var img2 = document.getElementById('image2');
var img3 = document.getElementById('image3');
random();

//select 3 random images
function random() {
var productOne = randomNum();
// console.log("productOne = " + productOne);
img1.src = allProd[productOne].prodPath;
pageItems.push.allProd[productOne];
allProd[productOne].timesDisplayed +=1

var productTwo = randomNum();
// console.log("productTwo = " + productTwo);
  // while (productOne === productTwo || productOne === productThree ){
  //   var productTwo = randomNum();
  // };
  img2.src = allProd[productTwo].prodPath;
  pageItems.push.allProd[productTwo];
  allProd[productTwo].timesDisplayed +=1

  var productThree = randomNum();
  // console.log("productThree = " + productThree);
    // while (productOne === productThree || productTwo === productThree){
    //   productThree = randomNum();
    // };
  img3.src = allProd[productThree].prodPath;
  pageItems.push.allProd[productThree];
  allProd[productThree].timesDisplayed +=1
}
// random();

//eventhandler
function handleChangeImage() {
  totalClicks +=1;
  console.log("prod one outside 'if' is: " + allProd[productOne]);
  if(event.target.id === "image1"){
    console.log("prod one is: " + allProd[productOne]);
    allProd[productOne].clicks +=1;
    console.log("productOne clicks = " + allProd[productOne].clicks);
  }
  console.log("totalClicks = " + totalClicks);
  random();
}

image1.addEventListener('click', handleChangeImage);
image2.addEventListener('click', handleChangeImage);
image3.addEventListener('click', handleChangeImage);
