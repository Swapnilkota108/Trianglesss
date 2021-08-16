const angle1 = document.querySelector('.angle-1');
const angle2 = document.querySelector('.angle-2');
const angle3 = document.querySelector('.angle-3');
const output = document.querySelector('.output');
const button = document.querySelector('.button');

output.style.display = 'none';

button.addEventListener('click',function(){
output.style.display = 'flex';
let ang1 = angle1.value;
let ang2 = angle2.value;
let ang3 = angle3.value;
if(sumOfAngles(Number(ang1),Number(ang2),Number(ang3))===180){
    output.innerText = 'Yay, the angles form a triangle!'
} else {
    output.innerText = 'Oops, the angles does not form a triangle'

}
})


function sumOfAngles(ang1,ang2,ang3){
  let sum = ang1 + ang2 + ang3;
  return sum;
}