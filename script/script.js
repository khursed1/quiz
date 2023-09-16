const quiz = [
    {
        question: "What is the primary purpose of a data structure?",
        a: "To store data in memory",
        b: "To perform mathematical operations",
        c: "To create user interfaces",
        d: "To compile code",
        ans: "ans1"
    },
    {
        question: "Which data structure follows the Last-In-First-Out (LIFO) principle?",
        a: "Queue",
        b: "Stack",
        c: "Linked List",
        d: "Tree",
        ans: "ans2"
    },
    {
        question: "In which data structure is data stored in a hierarchical structure with a root node?",
        a: "Queue",
        b: "Stack",
        c: "Linked List",
        d: "Tree",
        ans: "ans4"
    },
    {
        question: "Which data structure is best suited for implementing a dictionary or phone book?",
        a: "Array",
        b: "Hash Table",
        c: "Stack",
        d: "Queue",
        ans: "ans2"
    },
    {
        question: "What is the time complexity of searching for an element in a balanced binary search tree?",
        a: "O(1)",
        b: "O(log n)",
        c: "O(n)",
        d: "O(n log n)",
        ans: "ans2"
    },
    {
        question: "Which data structure uses a First-In-First-Out (FIFO) order for data retrieval?",
        a: "Queue",
        b: "Stack",
        c: "Linked List",
        d: "Tree",
        ans: "ans1"
    },
    {
        question: "In a doubly linked list, how many pointers does each node have?",
        a: "None",
        b: "One",
        c: "Two",
        d: "Three",
        ans: "ans3"
    },
    {
        question: "What is the primary advantage of using a hash table for data storage?",
        a: "Constant time complexity for all operations",
        b: "Low memory consumption",
        c: "Simple implementation",
        d: "No need for sorting",
        ans: "ans1"
    },
    {
        question: "Which sorting algorithm has the worst-case time complexity of O(n^2)?",
        a: "Quick Sort",
        b: "Merge Sort",
        c: "Insertion Sort",
        d: "Bubble Sort",
        ans: "ans4"
    },
    {
        question: "In which data structure is data stored in a linear fashion and can be accessed randomly using an index?",
        a: "Queue",
        b: "Stack",
        c: "Linked List",
        d: "Array",
        ans: "ans4"
    }
];
let score=0;
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const ans = document.querySelectorAll('.answer');
const showScore=document.querySelector('#showScore');
const ind=document.querySelector('#ind');
const ss=document.querySelector('#ss');
let questionCount = 0;
const quizLoader = () => {
    const questionList = quiz[questionCount];
    question.innerText = `${questionCount + 1} ) ${questionList.question}`;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
quizLoader();
const getChecketAnswer = () => {
    let answer;
    ans.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
            
        }

    })
    return answer;

}
submit.addEventListener('click', () => {
    const checkedAnswer = getChecketAnswer();
    console.log(checkedAnswer);
    if (checkedAnswer==quiz[questionCount].ans){
        score++;
    };
    if (questionCount<quiz.length-1){
        questionCount++;
        quizLoader();
    }
    else{
        ss.innerHTML=`<h3>You scored ${score}/${quiz.length} ✌</h3>
        <button class="btn" onclick="location.reload()">Replay</button>`
        showScore.classList.remove('scoreArea');
        ind.remove();
    }
});
