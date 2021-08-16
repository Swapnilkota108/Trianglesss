const base = document.querySelector('.base');
const height = document.querySelector('.height');
const button = document.querySelector('.button');
const output = document.querySelector('.output');

output.style.display = 'none';
button.addEventListener('click',function(){
    output.style.display = 'flex';
    let bse = base.value;
    let hgt = height.value;
    
    (calculateHypotenuse(bse,hgt))
    
});




function calculateHypotenuse(base,height){
let square = base*base + height*height;
let hypotenuseValue = Math.sqrt(square);
output.innerText = `The value of hypotenuse (c) is ${hypotenuseValue}`;
}