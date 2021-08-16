const submitButton = document.querySelector('#button');
 const output = document.querySelector('.output');
const input = document.querySelectorAll('.input');
const form = document.querySelector('.form');

const answers = ['90°','right-angled','Concurrent','Midsegment','Centroid'];

 output.style.display = 'none';

function calculateScore(){
    output.style.display = 'flex';
    let score = 0;
    let index = 0;
    const formResults = new FormData(form);
for(let value of formResults.values()){
    if(value===answers[index]){
    score = score + 1;
    }
    index = index + 1;
}

output.innerText = `Score : ${score}`;

}


submitButton.addEventListener('click',calculateScore)

