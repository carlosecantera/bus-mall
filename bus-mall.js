'use strict';


alert('I am alive');

function renderChart(){
const ctx = document.getElementById('productChart').getContext('2d');
//Change array looks like product labels array (for loop) all images at i.clicks
const data = [];
const Colors = ['red', 'purple', 'blue', 'red', 'purple', 'blue', 'red', 'purple', 'blue', 'red', 'purple', 'blue', 'red', 'purple', 'blue', 'red', 'purple', 'blue', 'red', 'purple'];
const productLabels = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblgum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass']

for (let i = 0; i < Productimages.allImages.length; i++){
  data.push(Productimages.allImages[i].clicks)
}

for (let i = 0; i < Productimages.allImages.length; i++){
  productLabels.push(Productimages.allImages[i].name)
}
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: productLabels,
    datasets: [{
      label: '# of Votes',
      data: data,
      backgroundColor: Colors
    }]
  },
  options:{
    scales:{
      yAxes:[{
        ticks: {
          beginAtZero:true
        }
      }]
    }
  }
});
}

// var ctx = document.getElementById('productChart').getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
  //                 'rgba(255, 99, 132, 1)',
  //                 'rgba(54, 162, 235, 1)',
  //                 'rgba(255, 206, 86, 1)',
  //                 'rgba(75, 192, 192, 1)',
  //                 'rgba(153, 102, 255, 1)',
  //                 'rgba(255, 159, 64, 1)'
  //             ],

  const productList = document.getElementById('productList');
  const votesin = document.getElementById('votesin');
  
  function productVote(name){
    this.name =name;
  
    Product.list.push(this);
  }
  
  Product.list = [];
  
  
  productList.addEventListener('vote', handleClick);
  
  function handleClick(event) {
    event.preventDefault();
    console.log(event.target);
  }
  
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
  this.timesShown = 0;

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


function handleClick(event) {
  console.log(event.target);
  const clickedTarget = event.target;
  const id = clickTarget.id;

  if (totalClicks < 25){
    if (id === 'leftImage' || id === 'rightImage' || id === 'middleImage') {
      //If the player has voted less 25 times incriment vote counter and add times shown incriment for each image leftimage.timesshown ++
      if (id === 'leftImage') {
        leftImage.clicks++;
      }
      if (id === 'rightImage') {
          rightImage.clicks++;
        }
        if (id === 'middleImage') {
            middleImage.clicks++
          }
          if (totalClicks === 25){
          allProducts.removeEventListener('click', handleClick);

        }  
  //If the player has voted 25 times turn off the listner render result and render chart  
      }
  }
}


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
new Productimages('pet-sweep', './images/pet-sweep.jpeg');
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
renderChart();
handleClick();
