'use strict';

alert('I am alive');

const results = document.getElementById('products-click');
const leftImageElem = document.getElementById('leftImage');
const middleImageElem = document.getElementById('middleImage');
const rightImageElem = document.getElementById('rightImage');
const leftproductPElem = document.getElementById('left_product_p');
const middleproductPElem =document.getElementById('middle_product_p');
const rightproductPElem = document.getElementById('right_product_p');

let totalVotes = 0;

let leftImage = null;
let middleImage = null;
let rightImage = null;

const Productimages = function(name, imagePath) {
  this.name = name;
  this.imagePath = imagePath;
  this.votes = 0;
  this.timesVoted = 0;

  Productimages.allImages.push(this);
}

Productimages.allImages = [];

function productSelector(){
  const leftIndex = Math.floor(Math.random() * Productimages.allImages.length);
  console.log(leftIndex);
  let middleIndex = Math.floor(Math.random() * Productimages.allImages.length);
  console.log(middleIndex);
  let rightIndex = Math.floor(Math.random() * Productimages.allImages.length)
  while (middleIndex === undefined || middleIndex === leftIndex || middleIndex === rightIndex) {
    middleIndex = Math.floor(Math.random() * Productimages.allImages.length);
  }
  while (rightIndex === undefined || rightIndex === leftIndex || rightIndex === middleIndex) {
    rightIndex = Math.floor(Math.random() * Productimages.allImages.length);
    
  }
  
  leftImage = Productimages.allImages[leftIndex]
  middleImage = Productimages.allImages[middleIndex];
  rightImage = Productimages.allImages[rightIndex];
  console.log(rightIndex);
  console.log(leftImage);
  console.log (middleImage);
  console.log (rightImage);
}

console.log('leftImage' ,);

function renderProductImages() {
  leftImageElem.src = leftImage.imagePath;
  middleImageElem.src = middleImage.imagePath;
  rightImageElem.src = rightImage.imagePath;
  leftproductPElem.textContent = leftImage.name;
  middleproductPElem.textContent = middleImage.name;
  rightproductPElem.textContent = rightImage.name;
}

// function handleClick(event) {
//   console.log(event.target);
//   const clickTarget = event.target;
//   const id = clickTarget.id;
//   if (id === 'leftImageElem' || id === 'rightImageElem' || id === 'middleImageElem') {
//     if (id === 'leftImageElem') {
//       leftImage.clicks++;
//     }
//       if {
//         rightImage.clicks++;
//       }
//       if {
//           middleImage.clicks++
//         }

    
//   }
// }

new Productimages('bag','./images/bag.jpeg');
new Productimages('banana','./images/banana.jpeg');
new Productimages('bathroom','./images/bathroom.jpeg');
new Productimages('boots','./images/boots.jpeg');
new Productimages('breakfast', './images/breakfast.jpeg');
new Productimages('bubblegum', './images/bubblegum.jpeg');
new Productimages('chair', './images/chair.jpeg');
new Productimages('cthulhu', './images/cthulhu.jpeg');
new Productimages('dog-duck', './images/dog-duck.jpeg');
new Productimages('dragon', './images/dragon.jpeg');
new Productimages('pen', './images/pen.jpeg');
new Productimages('pet-sweep', './images/pet-sweep.png');
new Productimages('scissors', './images/scissors.jpeg');
new Productimages('shark', './images/shark.jpeg');
new Productimages('sweep', './images/sweep.png');
new Productimages('tauntaun', './images/tauntaun.jpeg');
new Productimages('unicorn', './images/unicorn.jpeg');
new Productimages('usb', './images/usb.gif');
new Productimages('water-can', './images/water-can.jpeg');
new Productimages('wine-glass', './images/wine-glass.jpeg');

allProducts.addEventListener('click', handleClick)

productSelector();
renderProductImages();
