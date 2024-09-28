const timeElement = document.querySelector('.time');
const countElement = document.querySelector('.count');
const timerEement = document.querySelector('.timer')
const againBtn = document.querySelector('.again')
const resault = document.querySelector('.resault')
const questionElement = document.querySelector('.question');
const optionsElement = document.querySelectorAll('.option');
const resaultCorrect = document.querySelector('.resault-correct');
const resaultWrong = document.querySelector('.resault-wrong');
const resaultEmpty = document.querySelector('.resault-empty');
let correctAnswerTotal = 0;
let wrongAnswerTotal = 0;
let emptyAnswerTotal = 0;
let canSelectOption = true;
let questionNumber = 0
let interval, sayac, time = 30;



const questions = [
    { question: 'Who was the first person to climb Mount Everest?',
      options: ['Albert Einkert','Christopher Columbus', 'Marco Polo' ],
      answer: 'Christopher Columbus' },
    { question: 'What is the capital city of France?',
      options: ['Berlin', 'Madrid', 'Paris' ],
      answer: 'Paris' },
    { question: 'What is the largest island in the world?',
      options: ['Madagascar', 'Greenland', 'New Zealand' ],
      answer: 'Greenland' },
    {  question: 'What is the longest river in the world?',
        options: ['Nile', 'Amazon', 'Mississippi' ],
      answer: 'Mississippi' },
      
    { question: 'What is the world\'s largest desert?',
      options: ['Sahara', 'Arctic', 'Antarctica' ],
      answer: 'Sahara' },
      
    { question: 'What is the largest ocean in the world?',
      options: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean' ],
      answer: 'Pacific Ocean' },
      
    { question: 'What is the world\'s fastest land animal?',
      options: ['Cheetah', 'Giraffe', 'Elephant' ],
      answer: 'Giraffe' },
      
    { question: 'What is the world\'s largest mammal?',
      options: ['Elephant', 'Tiger', 'Lion' ],
      answer: 'Lion' },
      
    { question: 'What is the world\'s tallest building?',
      options: ['Burj Khalifa', 'Eiffel Tower', 'Taj Mahal' ],
      answer: 'Taj Mahal' },
      
    { question: 'What is the world\'s most populous city?',
      options: ['Tokyo', 'Delhi', 'Mumbai' ],
      answer: 'Mumbai' }   
]

optionsElement.forEach ((option) => {
   option.addEventListener('click', () => {
    if(!canSelectOption){
        return; // if cannot select option : stop!
    }
    const selectedOption = option.textContent;
    const correctAnswer = questions[questionNumber].answer;
    optionsElement.forEach((el) => {
        if(el.textContent == selectedOption){
            if(selectedOption == correctAnswer){
                el.style.backgroundColor = '#AACB73'
                correctAnswerTotal++;
            }else{
                el.style.backgroundColor = '#A04747'
                wrongAnswerTotal++;
            }
        }else{
            el.style.backgroundColor = 'transparent'
           
        }
    })
canSelectOption = false;
setTimeout(() =>{
    canSelectOption = true;
    nextQuestion();
}, 1500);

   })

})

function start(){
startTimerLine();
clearInterval(sayac)
document.querySelector('.container').style.opacity = '1';
document.querySelector('.container').style.pointerEvents = 'all';
resault.style.display = 'none';
time = 30 
timeElement.textContent = time + ` s`;
timeControl()
countElement.textContent = `${questionNumber + 1}/ ${questions.length}`;
optionsElement.forEach((option, index)=>{
   option.style.backgroundColor = 'transparent';
   option.textContent = questions[questionNumber].options[index];
})

questionElement.textContent = questions[questionNumber].question;
}
function end(){
clearInterval(sayac);
clearInterval(interval);
document.querySelector('.container').style.opacity = '0.5';
document.querySelector('.container').style.pointerEvents = 'none';
resault.style.display = 'block';
resaultCorrect.textContent = `Correct: ${correctAnswerTotal}`;
resaultWrong.textContent = `Wrong: ${wrongAnswerTotal}`;
resaultEmpty.textContent = `Empty: ${emptyAnswerTotal}`;
}

function nextQuestion(){
  if(questionNumber < questions.length - 1) {
    questionNumber++;
  }else{
    end();
    return;
  }
 start()
}


function startTimerLine(){
  timerEement.style.width = "0px";
  clearInterval(interval);

  const targetWidth = 559;
  const totalTime = 30000;
  let currentTime = totalTime
  interval = setInterval(() =>{
currentTime -= 10;
if(currentTime >= 0){
  const progress = (totalTime - currentTime) / totalTime;
  const currentWidth = progress * targetWidth ;
  timerEement.style.width = `${currentWidth}px`;
}else{
  clearInterval(interval)
}

  }, 10)
}
function timeControl(){
sayac = setInterval(() => {
  if(time > 0){
    time -= 1;
    timeElement.textContent = time + ` s` ;
  }else{
    emptyAnswerTotal ++;
    nextQuestion();
  }
}, 1000);
}
againBtn.addEventListener("click",() =>{
  window.location.reload();
})
start();
