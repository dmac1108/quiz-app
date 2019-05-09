

$(function() {
$(".js-success").hide();
$(".js-failure").hide();

let questionNumber = 1;
let score = 0;

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
     }
     ],
     CorrectChoice: true
    }

];

$(".js-start").click(function(){
console.log("Quiz started");
    questionLoop();
});

function questionLoop(){
    console.log("In the question loop");
    //might want to change this to a while loop, so you can increment 
    //i when needed

    for (let i=0; i<STORE.length; i++){
        let question = STORE[i].Question;
        let questionOptions = STORE[i].Options;
        createQuestion(question);
        createOptions(questionOptions);
        renderQuestion();
    }
    
}

function renderQuestion(){
    console.log("Render Question Function Started");
    
}

function createQuestion(question){
    console.log("create question function started");
    //console.log(question);
    $(".js-question").append(question);
}

function createOptions(options){
    console.log("Crete question options function started");
    //console.log(options);
    let listItems = "";
    for (let i=0; i<options.length; i++){
        let optionName = options[i].name;
        //get the list item and add it to the string
        let listItem = createOptionListItem(optionName);
        listItems = listItems.concat(listItem); 
    }
    $(".js-options").append(listItems);
}

function createOptionListItem(option){
    console.log("Create the option list item function started");
    let optionListItem = `<li class="js-optionitem">${option}</li>`;
    return optionListItem;
}

$(".js-options").on('click', 'li', function(event){
    console.log("list option selected");
    let optionName = $(this).text();
    checkSelectedOption(optionName);
    //console.log(optionName);
});

function checkSelectedOption(selectedOption){
    console.log(`get selected option function started for ${selectedOption}`);
    let storeIndex = questionNumber - 1;
    let correct = true;
    for (let i=0; i<STORE[storeIndex].Options.length; i++){
        if(STORE[storeIndex].Options[i].name === selectedOption){
            correct = STORE[storeIndex].Options[i].correct;
            STORE[storeIndex].CorrectChoice = correct;
        }
    }
    console.log(STORE[storeIndex].CorrectChoice);
}

$(".js-submit").click(function(event){
    event.preventDefault();
    console.log("Submit button clicked");
    $(".js-question").empty();
    $(".js-optionitem").remove();
    showResult();
    
});

function showResult(){
    console.log("in the append image function");
    let storeIndex = questionNumber - 1;
    if(STORE[storeIndex].CorrectChoice){
        console.log("show success image");
        $(".js-success").show();
        score +=1; 
        $('.js-score').text(score);
    }
    else{
        console.log("show failure image");
        $(".js-failure").show();
    }
}

function updateScore(){
    console.log("update score function started");
}

})