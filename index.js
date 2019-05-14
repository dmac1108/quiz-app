

$(function() {

$(".js-success").hide();
$(".js-failure").hide();
$(".js-continue").hide();
$(".js-submit").hide();



let questionNumber = 0;
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
     CorrectChoice: false
    },
    {Question: 'What book did the waiter, Robbie, tell Baby to read?',
     Options: [{
        name: 'Atlas Shrugged',
        correct: false
     },
     {
        name: 'The Fountainhead',
        correct: true
     },
     {
        name: 'Little Women',
        correct: false
     },
     {
        name: 'The War of the Worlds',
        correct: false
     }
     ],
     CorrectChoice: false
    },
    {Question: 'Who played Johnny?',
     Options: [{
        name: 'John Travolta',
        correct: false
     },
     {
        name: 'Kiefer Sutherland',
        correct: false
     },
     {
        name: 'Patrick Swayze',
        correct: true
     },
     {
        name: 'Harrison Ford',
        correct: false
     }
     ],
     CorrectChoice: false
    },
    {Question: 'What year was the film released?',
     Options: [{
        name: '1980',
        correct: false
     },
     {
        name: '1991',
        correct: false
     },
     {
        name: '1986',
        correct: false
     },
     {
        name: '1987',
        correct: true
     }
     ],
     CorrectChoice: false
    },
    {Question: 'In what movie did Patrick Swayze and Jennifer Grey work together before filming Dirty Dancing?',
     Options: [{
        name: 'Red Dawn',
        correct: true
     },
     {
        name: 'Ghostbusters',
        correct: false
     },
     {
        name: 'Road House',
        correct: false
     },
     {
        name: 'Ferris Bueller\'s Day Off',
        correct: false
     }
     ],
     CorrectChoice: false
    },
    {Question: 'What Union will Johnny join if he doesn’t keep his job at Kellerman’s?',
     Options: [{
        name: 'American Postal Workers Local 10',
        correct: false
     },
     {
        name: 'Carpenters Regional Council',
        correct: false
     },
     {
        name: 'Fire Fighters Local 45',
        correct: false
     },
     {
        name: 'The House Painters and Plasterers Local #179',
        correct: true
     }
     ],
     CorrectChoice: false
    },
    {Question: 'How did Johnny get into the car after locking the keys inside?',
     Options: [{
        name: 'Called AAA',
        correct: false
     },
     {
        name: 'Picked the lock',
        correct: false
     },
     {
        name: 'Kicked down a post and smashed the window with it',
        correct: true
     },
     {
        name: 'Threw a rock through the window',
        correct: false
     }
     ],
     CorrectChoice: false
    },
    {Question: 'What was Baby\'s Dad doing when she asked for money to give to Penny?',
     Options: [{
        name: 'Practicing Putting',
        correct: true
     },
     {
        name: 'Sitting in a hot tub',
        correct: false
     },
     {
        name: 'Eating dinner',
        correct: false
     },
     {
        name: 'Dancing',
        correct: false
     }
     ],
     CorrectChoice: false
    },
    {Question: 'What does Neil suggest for the final dance?',
     Options: [{
        name: 'Pachanga',
        correct: true
     },
     {
        name: 'Mambo',
        correct: false
     },
     {
        name: 'Waltz',
        correct: false
     },
     {
        name: 'Disco',
        correct: false
     }
     ],
     CorrectChoice: false
    },
    {Question: 'What does nobody put Baby in?',
     Options: [{
        name: 'Playpen',
        correct: false
     },
     {
        name: 'River',
        correct: false
     },
     {
        name: 'Pool',
        correct: false
     },
     {
        name: 'Corner',
        correct: true
     }
     ],
     CorrectChoice: false
    }

];

$(".js-start").click(function(){
console.log("Quiz started");
    $(".js-start-page").hide();
    questionNumber = 0;
    score = 0;
    $('.js-score').text(score);
    questionLoop();

});

function questionLoop(){
    console.log("In the question loop");
    questionNumber +=1;
    console.log(`The question number is ${questionNumber}`);
    $('.js-num-questions').text(questionNumber);
    let i = questionNumber-1;
    
        let question = STORE[i].Question;
        let questionOptions = STORE[i].Options;
        createQuestion(question);
        createOptions(questionOptions);
        
        $(".js-submit").show();
}



function createQuestion(question){
    console.log("create question function started");
    $(".js-question").append(question);
}

function createOptions(options){
    console.log("Crete question options function started");
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
    /*$(this).toggleClass("li-selected");*/
    $(this).toggleClass("li-selected").siblings().removeClass("li-selected");
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
    $(this).hide();
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
        $(".js-correct-choice").text(`The correct choice was: ${getCorrectChoice()}`);
        
    }
    $(".js-continue").show();

}

function getCorrectChoice(){
   let storeIndex = questionNumber - 1;
   console.log("entered the getcorrectchoice function");
   for (let i=0; i<STORE[storeIndex].Options.length; i++){

      console.log(STORE[storeIndex].Options[i].correct);
      if(STORE[storeIndex].Options[i].correct){
         let correctOption = STORE[storeIndex].Options[i].name;
         console.log(correctOption);
         return correctOption;
      }

   }

}

$(".js-continue").click(function(event){
    console.log("continue button clicked");
    $(".js-success").hide();
    $(".js-failure").hide();
    $(this).hide();
    
    if(questionNumber<10){questionLoop();}
    else{
       endQuiz();
    }
    
});

function endQuiz(){
  if(score>5){
   $(".js-end").append(`<p class="js-end">Your final score was ${score}. I've had the time of my life.</p>
   <button class="js-restart js-end">Restart Quiz</button>`);

  }
  else
  {
   $(".js-end").append(`<p class="js-end">Your final score was ${score}. This is not a tragedy. A tragedy is three men trapped in a mine, or police dogs used in Birmingham.</p>
   <button class="js-restart js-end">Restart Quiz</button>`);
  }
   
}

$(".js-end").on('click', '.js-restart', function(event){
   location.reload();
})

})