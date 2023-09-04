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
        'a': '1994',
        'b': '1995',
        'c': '1996',
        'd': '1997',
        'correct': 'a'
    },
    {
        'que': 'CSS stands for',
        'a': 'Computation Social Science',
        'b': 'Customized Style Support',
        'c': 'Cascading Stye Sheet',
        'd': 'none of the above',
        'correct': 'c'
    }
]

let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
const queBox = document.getElementById("queBox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () => {
    if(index === total){
        return endQuiz()
    }
    reset();
    const data = questions[index]
    queBox.innerText = `${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if(ans == data.correct){
        right++;
    } else {
        wrong++
    }
    index++;
    loadQuestion()
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
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

const endQuiz= () => {
    document.getElementById("container").innerHTML = `
    <div style="text-align:center">
        <h3>Thanks for participating!</h3>
        <h1>Your score is ${right} / ${total}.</h1>
    </div>
    `
}

loadQuestion()