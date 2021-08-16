const base = document.querySelector('.side-1');
const height = document.querySelector('.side-2');
const button = document.querySelector('.button');
const output = document.querySelector('.output');

output.style.display = 'none';


button.addEventListener('click',function(){
    output.style.display = 'flex';
    const a = base.value;
    const b = height.value;
    
    calculateAreaOfTriangle(a,b);

    
})

function calculateAreaOfTriangle(a,b){
 let area = 0.5*(a)*(b);
 output.innerText = `The Area of the triangle is ${area} units.`;
}