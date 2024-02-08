'use strict'
const container = document.querySelector('.container');


let boxAmount = 1000;
let currentColor;

const colorBtns = ['red', 'black', 'green', 'pink'];


function buildColorBtns() {
  for(let i = 0; i< colorBtns.length; i++) {
    const btnContainer = document.querySelector('.btn-container');
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btnContainer.appendChild(btn);
    btn.innerHTML = colorBtns[i];

    const selectColor = colorBtns[i];
    
    btn.addEventListener('click', function() {
      currentColor = selectColor;
      console.log(currentColor)
    })
  };
};
buildColorBtns();


function createBoxes() {
  for(let i = 0; i < boxAmount; i++) {
    const box = document.createElement('div');
    box.className = 'box';
    container.appendChild(box); 
    
    box.addEventListener('mouseover', function() {
      box.style.backgroundColor = `${currentColor}` ;
        console.log('hover')
      });
    }
  };
createBoxes();


