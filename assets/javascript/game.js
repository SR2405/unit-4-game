$("#image1").addClass("crystal1");
$("#image2").addClass("crystal2");
$("#image3").addClass("crystal3");
$("#image4").addClass("crystal4");

$(".randomNumber").addClass("randomNumber");
$(".hidden").addClass("ScoreUpdateText");
$(".wins").addClass("wins");
$(".losses").addClass("losses");
$(".currentScore").addClass("currentScore")

wins = 0;
losses = 0;
var randomNumber ;
var currentScore  ;
var crystals = 0;

crystals = 0;
currentScore = 0;

function StartAndreset(){
    currentScore = 0;

    $(".hidden").html("");


randomNumber = Math.floor(Math.random() * 101) + 19;
$(".randomNumber").html("Your Number is: " + randomNumber);
console.log("randomNumber");


crystal1 = Math.floor(Math.random() * 11) + 1;
crystal2 = Math.floor(Math.random() * 12) + 1;
crystal3 = Math.floor(Math.random() * 12) + 1;
crystal4 = Math.floor(Math.random() * 12) + 1;

}

StartAndreset();

        $(".crystal1").click(function (){
                
            currentScore += crystal1;
            console.log(currentScore);

        $(".currentScore").html( currentScore);
            //generate random number  19-120
            //push the value to random gen number
        
        // assign random value for the 4 crystals 1-12 - buttons

        // $(".currentScore").html(crystal1+currentScore);

            Win();
            Lost();
       
        });

//repeat for all crystals
        $(".crystal2").on('click', function (){
        
        // crystal2 = Math.floor(Math.random() * 12) + 1;

        $(".currentScore").html(crystal2+currentScore);

        currentScore += crystal2;
        console.log(currentScore);

    $(".currentScore").html( currentScore);

        console.log("crystal2");

        Win();
        Lost();
        
        });

        $(".crystal3").on('click', function (){
       
        // crystal3 = Math.floor(Math.random() * 12) + 1;
        $(".currentScore").html(crystal3+currentScore);

        currentScore += crystal3;
        console.log(currentScore);

    $(".currentScore").html( currentScore);   
    
    Win();
    Lost();
        });

        $(".crystal4").on('click', function (){
       
            // crystal4 = Math.floor(Math.random() * 12) + 1;
            currentScore += crystal4;
            console.log(currentScore);

        $(".currentScore").html( currentScore);
        
        Win();
        Lost();
            
        });
    


//set score Win-Loss to zero at the beginning
//Set "your tot score" to zero everytime
//on click of any crystals activate the game
//a click on each crystal will give a different number
//add the output of the click to the "your tot score"
    //push the sum 
//if score matches the "random generated number" user wins


// add 1 to wins
    //restart the game
function Win(){
    if (randomNumber === currentScore){
        $(".hidden").html("Congrats - YOU WON!");

        wins++;
        $(".wins").html(wins);
        currentScore = 0;
        $(".currentScore").html(0);

        StartAndreset();

    }
} 
    
    
// if score is > than "random generated number" > use loses
    //add 1 to Losses
    //restart the game

    function Lost(){
        if (randomNumber < currentScore){
            $(".hidden").html("Sorry - YOU LOST!");
            $(".currentScore").html(0);

            losses++;
            $(".losses").html(losses);
            $(".currentScore").html(0);
            StartAndreset();



console.log(Lost);        }
    } 