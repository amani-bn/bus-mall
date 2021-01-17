'use strict';
var maxattempts=25;
var userVote=0;
var leftImgElment=document.getElementById('left');
var centerImgElment=document.getElementById('center');
var rightImgElment=document.getElementById('right');
var leftIndex;
var centerIndex;
var rightIndex;
var totalimg=[];
var resultlist = document.getElementById('resultList');

function productImg(name,source){
    this.name= name;
    this.source= source;
    this.vote=0;
    totalimg.push(this);

}

new productImg('bag.jpg','img/bag.jpg');
new productImg('banana.jpg','img/banana.jpg');
new productImg('bathroom.jpg','img/bathroom.jpg');
new productImg('boots.jpg','img/boots.jpg');
new productImg('breakfast.jpg','img/breakfast.jpg');
new productImg('bubblegum.jpg','img/bubblegum.jpg');
new productImg('chair.jpg','img/chair.jpg');
new productImg('cthulhu.jpg','img/cthulhu.jpg');
new productImg('dog-duck.jpg','img/dog-duck.jpg');
new productImg('dragon.jpg','img/dragon.jpg');
new productImg('pen.jpg','img/pen.jpg');
new productImg('pet-sweep.jpg','img/pet-sweep.jpg');
new productImg('scissors.jpg','img/scissors.jpg');
new productImg('shark.jpg','img/shark.jpg');
new productImg('sweep.png','img/sweep.png');
new productImg('tauntaun.jpg','img/tauntaun.jpg');
new productImg('unicorn.jpg','img/unicorn.jpg');
new productImg('usb.gif','img/usb.gif');
new productImg('water-can.jpg','img/water-can.jpg');
new productImg('wine-glass.jpg','img/wine-glass.jpg');

render();
leftImgElment.addEventListener('click',userClick);
centerImgElment.addEventListener('click',userClick);
rightImgElment.addEventListener('click',userClick);

function userClick(event){
userVote++;
if (userVote<= maxattempts){

    if (event.target.id === 'left'){
        totalimg[leftIndex].vote++;
    }
    else {
     if (event.target.id === 'center'){
        totalimg[centerIndex].vote++;
    }
     else  {
      totalimg[rightIndex].vote++;
     }
}
render();
}
else {
var productResult;
for(var i=0;i<totalimg.length;i++){
    productResult = document.createElement('li');
    productResult.textContent = totalimg[i].name + totalimg[i].vote;
    resultlist.appendChild(productResult);

}
rightImgElment.removeEventListener('click',userClick);
centerImgElment.removeEventListener('click',userClick);
leftImgElment.removeEventListener('click',userClick);

}

function render(){
    leftIndex = Math.floor(Math.random()*totalimg.length);
    do{
        rightIndex = Math.floor(Math.random()*totalimg.length);

    }
while (leftIndex === rightIndex || leftIndex === centerIndex);
leftImgElment.src = productImg .prototype.totalimg[leftImgElment].source;
rightImgElment.src = productImg.prototype.totalimg[rightImgElment].source;
centerImgElment.src= productImg.prototype.totalimg[centerImgElment].source;

}

}










