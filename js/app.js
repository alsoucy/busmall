'use strict';
//global var

var prod = ['babysweep', 'bag', 'banana', 'boots', 'chair', 'cthulhu', 'dragon', 'pen', 'scissors', 'shark', 'unicorn', 'usb', 'watercan', 'wineglass'];
var allProd = [];
var totalClicks = 0;
var pageItems = [];

//constructor function
function Product(prodName, prodPath) {
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
}
//instances of product
var babysweep = new Product('babysweep', 'images/babysweepsmall.png');
var bag = new Product('bag', 'images/bag.jpg');
var banana = new Product('banana', 'images/banana.jpg');
var boots = new Product('boots', 'images/boots.jpg');
var chair = new Product('chair', 'images/chair.jpg');
var cthulhu = new Product('cthulhu', 'images/cthulhu.jpg');
var dragon = new Product('dragon', 'images/dragon.jpg');
var pen = new Product('pen', 'images/pen.jpg');
var scissors = new Product('scissors', 'images/scissors.jpg');
var shark = new Product('shark', 'images/shark.jpg');
var unicorn = new Product('unicorn', 'images/unicorn.jpg');
var usb = new Product('usb', 'images/usb.gif');
var watercan = new Product('watercan', 'images/watercan.jpg');
var wineglass = new Product('wineglass', 'images/wineglass.jpg');

//create random number 1-15
var randomNum = function() {
  return Math.floor(Math.random() * allProd.length);
};
var productOne = 0;
var productTwo = 0;
var productThree = 0;
var img1 = document.getElementById('image1');
var img2 = document.getElementById('image2');
var img3 = document.getElementById('image3');
random();

//select 3 random images
function random() {
  pageItems = [];
  var productOne = randomNum();
        // console.log("productOne = " + productOne);
  img1.src = allProd[productOne].prodPath;
  allProd[productOne].timesDisplayed += 1;
  pageItems.push(allProd[productOne]);

  var productTwo = randomNum();
        // console.log("productTwo = " + productTwo);
  while (productOne === productTwo) {
    var productTwo = randomNum();
  }
  img2.src = allProd[productTwo].prodPath;
  allProd[productTwo].timesDisplayed += 1;
  pageItems.push(allProd[productTwo]);

  var productThree = randomNum();
        // console.log("productThree = " + productThree);
  while (productOne === productThree || productTwo === productThree) {
    productThree = randomNum();
  }
  img3.src = allProd[productThree].prodPath;
  allProd[productThree].timesDisplayed += 1;
  pageItems.push(allProd[productThree]);
}

//eventhandler
var button = document.getElementById('resultButton');

function handleChangeImage() {
  totalClicks += 1;
  if (event.target.id === 'image1') {
        // console.log("prod one is: " + pageItems[0]);
    pageItems[0].clicks += 1;
        // console.log("productOne clicks = " + pageItems[0].clicks + " out of " + pageItems[0].timesDisplayed + " views" );
        // console.log("productOne name = " + pageItems[0].prodName);
  } else if (event.target.id === 'image2') {
    pageItems[1].clicks += 1;
  } else {
    pageItems[2].clicks += 1;
  }
      console.log("totalClicks = " + totalClicks);
  random();                   //run random again to bring up 3 new random products

  if (totalClicks === 3) {
    resultButton.removeAttribute('hidden');
  }
}

var allClicks = [];
var alltimesDisplayed = [];

function handleResultButtonChart() {
  for (var i = 0; i < allProd.length; i++) {
    allClicks[i] = allProd[i].clicks;
    alltimesDisplayed[i] = allProd[i].timesDisplayed;
    localStorage.setItem('barpersistClick', JSON.stringify(allClicks));
    localStorage.setItem('barpersisrDisplay', JSON.stringify(alltimesDisplayed));

  }
  var data = {
      labels: ['babysweep', 'bag', 'banana','boots','chair','cthulhu', 'dragon', 'pen','scissors', 'shark','unicorn', 'usb', 'water-can', 'wine-glass'],
      datasets: [
          {
              label: "Clicks per Item",
              fillColor: "rgba(1,22,165,0.5)",
              strokeColor: "rgba(1,22,165,0.8)",
              data: allClicks
          },
          {
              label: "Displays per Item",
              fillColor: "rgba(74,168,222,0.5)",
              strokeColor: "rgba(74,168,222,0.8)",
              data: alltimesDisplayed
          }
      ]
  };
  var context = document.getElementById('barchart').getContext('2d');
  var myBarChart = new Chart(context).Bar(data);
}

resultButton.addEventListener('click', handleResultButtonChart);
image1.addEventListener('click', handleChangeImage);
image2.addEventListener('click', handleChangeImage);
image3.addEventListener('click', handleChangeImage);
//clear LS button
var clearLS = document.getElementById('clearLSbutton');
var handleLSClear = function() {
  console.log('cleariing Local Storage');
  localStorage.clear();
};
clearLS.addEventListener('click', handleLSClear);
//add chart data to local storage
