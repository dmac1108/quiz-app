

$(function() {
  

const STORE = [
    {Question: 'Where was Dirty Dancing filmed?',
     Options: [{
        name: 'Mountain Lake Lodge, Pembroke, Virginia',
        correct: true
     },
     {
        name: 'Grand Hotel, Mackinac, MI',
        correct: false
     },
     {
        name: 'Greystone Inn, Lake Toxaway, NC',
        correct: false
     },
     {
        name: 'Grandview Lodge, Nisswa, MN',
        correct: false
     },
     ]}

];

$(".js-start").click(function(){
console.log("Quiz started");
    questionLoop();
});

function questionLoop(){
    console.log("In the question loop");
    createQuestion();
    renderQuestion();
}

function renderQuestion(){
    console.log("Render Question Function Started");

}

function createQuestion(question){
    console.log("create question function started");
}

})