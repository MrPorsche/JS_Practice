const questions = [
    {
        'que': 'Which of these following is a markup language?',
        'a': 'JavaScript',
        'b': 'PHP',
        'c': 'Python',
        'd': 'HTML',
        'correct': 'd'
    },
    {
        'que': 'When was JavaScript introduced?',
        'a': '1995',
        'b': '1996',
        'c': '1997',
        'd': 'none of the above',
        'correct': 'a'
    },
    {
        'que': 'CSS stands for',
        'a': 'Cascading Stye Sheet',
        'b': 'Customized Style Support',
        'c': 'Computation Social Science',
        'd': 'HTML',
        'correct': 'd'
    }
]

let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
const queBox = document.getElementById("queBox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () => {
    reset();
    const data = questions[index]
    console.log(data);
    queBox.innerText = `${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if(ans === data.correct){
        right++;
    } else {
        wrong++
    }
    index++;
    loadQuestion()
    return;
}

function getAnswer() {
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                return input.value;
            }
        }
    );
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const preQuestion = () => {
    index--;
    loadQuestion()
}

const nextQuestion = () => {
    index++;
    loadQuestion()
}

loadQuestion()