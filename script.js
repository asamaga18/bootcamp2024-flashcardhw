const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;  

// Start with this function to simply display the card
function displayCard() {
    
    cardInfo = document.getElementById("card-content");

    if (showingTerm){
        cardInfo.innerText = flashcards[currentIndex].term;
    }
    else{
        cardInfo.innerText = flashcards[currentIndex].definition;
    }
    
}

function flipCard(){
    if (showingTerm){
        showingTerm = false;
        console.log("switch to false");
    }
    else{
        showingTerm = true;
        console.log("switch to true");
    }

    displayCard();
}

function switchCard(direction){
    currentIndex = currentIndex + direction;
    if (currentIndex === flashcards.length){
        currentIndex = 0;
    }
    if (currentIndex === -1){
        currentIndex = flashcards.length - 1;
    }
    displayCard()

}

function addCard(){
    let newterm = document.getElementById("new-term").value;
    let newDef = document.getElementById("new-definition").value;
    console.log("adding");
    if (newterm === null || newDef === null){
        console.log("null fields");
        return;
    }
    flashcards.push({term : newterm, definition : newDef});

    document.getElementById("new-term").value = "";
    document.getElementById("new-definition").value = "";
}

// The rest of the code you will write is apart of event listeners
card = document.getElementById("flashcard")
card.addEventListener("click", ()=>flipCard());
document.getElementById("prev-btn").addEventListener("click", ()=>switchCard(-1));
document.getElementById("next-btn").addEventListener("click", ()=>switchCard(1));
document.getElementById("add-card-btn").addEventListener("click", ()=>addCard());

// This line will display the card when the page is refreshed
window.onload = displayCard;
displayCard();