const timeElement = document.querySelector('.time');
const countElement = document.querySelector('.count');
const timerEement = document.querySelector('.timer')
const againBtn = document.querySelector('.again')
const resault = document.querySelector('.resault')
const questionElement = document.querySelector('.question');
const optionsElement = document.querySelectorAll('.option');
let correctAnswerTotal = 0;
let wrongAnswerTotal = 0;
let emptyAnswerTotal = 0;
let canSelectOption = true;
let questionNumber = 0



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
            }else{
                el.style.backgroundColor = '#A04747'
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
resault.style.display = 'none';