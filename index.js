// Assigning the intial values to display
document.getElementById("home-score").innerText=0
document.getElementById("guest-score").innerText=0

// Getting the scores from the docuemnt
let homeScore=document.getElementById("home-score")
let guestScore=document.getElementById("guest-score")

// Intial counts
let homeCount =0;
let guestCount=0;

function addone(){
    homeCount = homeCount+1;
    homeScore.innerText = homeCount   
}
function addtwo(){
    homeCount = homeCount+2;
    homeScore.innerText = homeCount   
}
function addthree(){
    homeCount = homeCount+3;
    homeScore.innerText = homeCount   
}

function addoneg(){
    guestCount = guestCount+1;
    guestScore.innerText = guestCount   
}
function addtwog(){
    guestCount = guestCount+2;
    guestScore.innerText = guestCount   
}
function addthreeg(){
    guestCount = guestCount+3;
    guestScore.innerText = guestCount   
}
