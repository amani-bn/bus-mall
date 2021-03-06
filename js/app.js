'use strict';
// at the begining define global arrays and variables 
var maxattempts = 25;
var userVote = 0;
var leftImgElment = document.getElementById('left');
var centerImgElment = document.getElementById('center');
var rightImgElment = document.getElementById('right');
var leftIndex;
var centerIndex;
var rightIndex;

var uservotes = [];
var userShown = [];
var arrayIndex = [];
var images = document.getElementById('images-div');
productImg.prototype.totalimg = [];
var finalResult = document.getElementById('showResult');
var showResultButton = document.getElementById('showResultBut');
var maxRoundForm = document.getElementById('max-rounds');
var ctx = document.getElementById('myChart').getContext('2d');

function productImg(name, source) {        // create the constructor
    this.name = name;
    this.source = source;
    this.vote = 0;
    this.shown = 0;
    productImg.prototype.totalimg.push(this);
    arrayIndex.push(name);

}

new productImg('bag.jpg', 'img/bag.jpg');          // here create objects 
new productImg('banana.jpg', 'img/banana.jpg');
new productImg('bathroom.jpg', 'img/bathroom.jpg');
new productImg('boots.jpg', 'img/boots.jpg');
new productImg('breakfast.jpg', 'img/breakfast.jpg');
new productImg('bubblegum.jpg', 'img/bubblegum.jpg');
new productImg('chair.jpg', 'img/chair.jpg');
new productImg('cthulhu.jpg', 'img/cthulhu.jpg');
new productImg('dog-duck.jpg', 'img/dog-duck.jpg');
new productImg('dragon.jpg', 'img/dragon.jpg');
new productImg('pen.jpg', 'img/pen.jpg');
new productImg('pet-sweep.jpg', 'img/pet-sweep.jpg');
new productImg('scissors.jpg', 'img/scissors.jpg');
new productImg('shark.jpg', 'img/shark.jpg');
new productImg('sweep.png', 'img/sweep.png');
new productImg('tauntaun.jpg', 'img/tauntaun.jpg');
new productImg('unicorn.jpg', 'img/unicorn.jpg');
new productImg('usb.gif', 'img/usb.gif');
new productImg('water-can.jpg', 'img/water-can.jpg');
new productImg('wine-glass.jpg', 'img/wine-glass.jpg');



function createRandom() { // function to create random 
    return Math.floor(Math.random() * (productImg.prototype.totalimg.length));
}

render();      // calling render function

images.addEventListener('click', userClick);      // add event listner on click when user click on img
showResultButton.addEventListener('click', showResult);      // add event listner to show result
maxRoundForm.addEventListener('submit', determineMaxRound);  // add event listner to submit when user determine number ofround


function userClick(event) {
    if (userVote < maxattempts) {

        if (event.target.id === 'left') {
            productImg.prototype.totalimg[leftIndex].vote++;
            userVote++;
            render();
        }
        else if (event.target.id === 'center') {
            userVote++;
            productImg.prototype.totalimg[centerIndex].vote++;
            render();
        }
        else if (event.target.id === 'right') {
            userVote++;
            productImg.prototype.totalimg[rightIndex].vote++;
            render();
        }

    }
    else {
        var productResult;
        for (var i = 0; i < productImg.prototype.totalimg.length; i++) {
            productResult = document.createElement('li');
            productResult.textContent = productImg.prototype.totalimg[i].name + 'had' + productImg.prototype.totalimg[i].vote + 'votes,and was seen ' + productImg.prototype.totalimg[i].shown + ' times .';
            showResult.appendChild(productResult);

        }

        images.removeEventListener('click', userClick);
        showResultButton.removeAttribute(button.disabled = false);


    }
saveData();

}

function render() {       
    var lastLeftIndex = leftIndex;
    var lastCenterIndex = centerIndex;
    var lastRightIndex = rightIndex;

    leftIndex = createRandom();
    do {
        centerIndex = createRandom();
        rightIndex = createRandom();
    }
    while (leftIndex === centerIndex || leftIndex === rightIndex ||  centerIndex === rightIndex) 

     do{
        leftIndex = createRandom();
        centerIndex = createRandom();
        rightIndex = createRandom();
     }
    while (leftIndex === centerIndex || leftIndex === rightIndex || centerIndex === rightIndex || leftIndex === lastLeftIndex || leftIndex === lastCenterIndex || leftIndex === lastRightIndex || centerIndex === lastLeftIndex || centerIndex === lastCenterIndex || centerIndex === lastRightIndex || rightIndex === lastLeftIndex || rightIndex === lastCenterIndex || rightIndex === lastRightIndex )


        leftImgElment.src = productImg.prototype.totalimg[leftIndex].source;
        productImg.prototype.totalimg[leftIndex].shown++;
        centerImgElment.src = productImg.prototype.totalimg[centerIndex].source;
        productImg.prototype.totalimg[centerIndex].shown++;
        rightImgElment.src = productImg.prototype.totalimg[rightIndex].source;
        productImg.prototype.totalimg[rightIndex].shown++;
    

}


function showResult() {          // function to show result on a list 
    getData();
    for (var i = 0; i < productImg.prototype.totalimg.length; i++) {
            uservotes.push(productImg.prototype.totalimg[i].vote);
            userShown.push(productImg.prototype.totalimg[i].shown);
         }


    var productResult;
    for (var i = 0; i < productImg.prototype.totalimg.length; i++) {
        productResult = document.createElement('li');
        productResult.textContent = productImg.prototype.totalimg[i].name + ' < had >' + productImg.prototype.totalimg[i].vote + ' votes!!!! , and was seen ' + productImg.prototype.totalimg[i].shown + '  times .' + ' The percentage of salecting product = ' + (productImg.prototype.totalimg[i].vote * 100 / productImg.prototype.totalimg[i].shown + '%');
        finalResult.appendChild(productResult);

    }
    renderChart();      // call renderchart function
}

function determineMaxRound(event) {     // function to make user determine number of round
    event.preventDefault();
    maxattempts = event.target.numberOfRound.value;
}

function renderChart() {       // function to render chart after show result

    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: arrayIndex,
            datasets: [{
                label: 'Voted  Product ',
                backgroundColor: 'rgb(229, 192, 199)',
                borderColor: 'rgb(255, 99, 132)',
                data: uservotes,
            },
            {
                label: ' Showed Product ',
                backgroundColor: 'rgb(176, 166, 174)',
                borderColor: 'rgb(176, 166, 174)',
                data: userShown,
            }
            



            ]
        },
        options: {}
    });

    
}
var setDatafromjs = [];
function saveData(){            // function to set data in  local storage
          setDatafromjs=JSON.stringify(productImg.prototype.totalimg);
          localStorage.setItem('totalImg',setDatafromjs);

}
function getData(){              // function to get data from local storage
    var imgfromls = localStorage.getItem('totalImg');
    var imgjs = JSON.parse(imgfromls);

    if (imgjs !== null){
        productImg.prototype.totalimg = imgjs;
         setDatafromjs = imgjs;

    }
}
