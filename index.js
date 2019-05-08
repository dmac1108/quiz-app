

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
    const listItems = [];
    for (let i=0; i<options.length; i++){
        let optionName = options[i].name;
        //get the list item and add it to the list item array
        let listItem = createOptionListItem(optionName);
        listItems.push(listItem);
        
    }
    console.log(listItems.toString());
    $(".js-options").append(listItems.toString());
}

function createOptionListItem(option){
    console.log("Create the option list item function started");
    let optionListItem = `<li>${option}<li>`;
    return optionListItem;
}

})