// # Pseudocode

// ________________________________________________________________________________________________________________
// Define the required variables used to track the state of the game


//     1. Use an array of arrays named `board` to represent the state of the squares on the board (i.e. whether they’re empty or contain letters)

let board = []

//     2. Use an array of objects named `keysStatus` to represent the state of the keys on the keyboard (i.e. whether they’ve been guessed correctly, incorrectly, or not guessed)

class LetterObj {
    constructor(letter, status) {
        this.letter=letter
        this.status=status
    }
}

let keysStatus = []

function generateKeysStatus() {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    for(let i=0;i<alphabet.length; i++) {
        const letter = alphabet[i]
        const status = 'Not Guessed'
        const letterObj= new LetterObj(letter,status)
        keysStatus.push(letterObj)
    }
    return keysStatus
}

console.log(keysStatus)


//     3. Use a variable named `guessNum` to track which turn it is (and therefore which line the guess letters will go in)

let guessNum
//     4. Use an array named wordOptions to store 5-letter words
const wordOptions = [
    "amble", "baker", "candy", "dance", "frost", "grape",
    "lemon", "magic", "noble", "ocean", "piano", "tiger", "vocal", "water", "zebra", "angry", "black", "clean", "dream", "early", "fancy", "great", "lucky", "nasty", "olive", "proud", "quick", "rusty", "shiny", "tidy", "ugly", "white", "young", "zebra", "abide", "bring", "drink", "enjoy", "fight", "gather", "hover", "joust", "knit", "laugh", "mourn", "print", "query", "relax", "surge", "travel", "upend", "value", "whirl", "chase", "expand", "flirt", "gather", "organ", "relax", "savor", "whisk", "yearn","longword","hi","cloak", "glory", "knife", "mirth", "roast", "vixen", "blush", "smart", "crane", "blink", "unzip", "quark", "nudge", "chart", "yacht", "plumb", "lemon", "flint", "grind"
]

function filterWords(wordOptions) {
    return wordOptions.filter(word => word.length === 5)
}

let filteredWordOptions=filterWords(wordOptions)
console.log(filteredWordOptions)
//     5. Use a variable named targetWord to store the word the player is supposed to guess, from the wordOptions list of 5-letter words

let targetWord 
//     6. Use a variable named `correctlyGuessed`  to represent if the player has guessed the correct word yet
let correctlyGuessed
//     7. Use a variable named `gameOver` to represent if the game has ended  
let gameOver

// ________________________________________________________________________________________________________________
// Store cached element references


//     1. Create **variable** messageEl to represent the element that shows the game status
let messageEl = document.getElementById('gameStatus')
console.log(messageEl.innerText)
//     2. Create **variable** letterEls to represent the lettered keys on keyboard
let letterEls=document.getElementsByClassName('keyBtn letter')

console.log(letterEls)

//GET RID OF THIS LATER
let alphabetArr=[]
for (let i = 0; i < letterEls.length; i++) {
    alphabetArr.push(letterEls[i].innerText)
}
console.log(alphabetArr);
// GET RID UP TO HERE

//     3. Create **variable** squareEls to represent the squares on the board
let squareEls = document.getElementsByClassName('squareEl')
console.log(squareEls)

//     4. Create **variable** submitBtn to represent the enter button on keyboard
let submitBtn=document.getElementById('submitBtn')
console.log(submitBtn)
//     5. Create **variable** deleteEl to represent the backspace key on keyboard
let deleteBtn=document.getElementById('deleteBtn')
console.log(deleteBtn)

//     6. Create **variable** resetBtn to represent the Play Again button on the keyboard

let resetBtn=document.getElementById('resetBtn')
console.log(resetBtn)

// ________________________________________________________________________________________________________________

// 3. Upon loading, the game state should be initialized,

window.onload = init()

// and a function should be
// called to render this game state
//     1. Create init() function and inside it, initialize variables:
//         1. board array should contain all nulls
//         2. keys array should contain letters A-Z
//         3. turn variable should equal 1
//         4. correctlyGuessed variable should be set to false
//         5. gameOver variable should be set to false
function init() {
    board = [
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
    ]
    generateKeysStatus()
    console.log(keysStatus)
    guessNum=2 // SET THIS BACK TO 1 LATER!!!!!!!!!
    correctlyGuessed=false
    gameOver=false
    function generateTargetWord() {
        let index = Math.floor(Math.random()*filteredWordOptions.length)
        targetWord=filteredWordOptions[index]
        return targetWord
    }
    generateTargetWord()
    console.log("Target word is: " + targetWord)
    console.log("Target word length is " + targetWord.length)
    if (targetWord.length!==5) {
        generateTargetWord()
    }
    //render() // --------->UNHIDE LATER~!!!!!
}
console.log(board)

console.log(keysStatus)


board = [   //---->REMOVE ALL OF THIS LATER
    ['b','l','a','c','k'],
    ['w', 'h','i',null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
]

//updateKeysStatus() //---->REMOVE ALL OF THIS LATER

keysStatus.forEach(obj => console.log(obj))

// [X]    2. Create render() function and call at end of init(). Set aside for now

// [X] 4. Create Render function 

function render() {
    updateKeysStatus()
    updateKeysColor()
    updateSquaresColor()
    updateMessage()
}
        

// [X] 2. Create `updateKeysColor` function. **(this should change the color of squareEls based on keysStatus)**

//CAN WE ACHIEVE BOTH KEYS AND SQUARES UPDATE IN ONE FUNCTION?
function updateKeysColor() {
    for (let i = 0; i < letterEls.length; i++) {
        let currentLetter=letterEls[i].innerText
        console.log(currentLetter)
        let keyStatusObj = keysStatus.find(obj => obj.letter.toUpperCase() === currentLetter.toUpperCase());
        if (keyStatusObj) {
            // If a matching key status object is found
            switch(keyStatusObj.status) {
                case "Correctly Placed":
                    letterEls[i].style.backgroundColor = "green";
                    break;
                case "Incorrectly Placed":
                    letterEls[i].style.backgroundColor = "yellow";
                    break;
                case "Incorrect":
                    letterEls[i].style.backgroundColor = "red";
                    break;
                default:
                    letterEls[i].style.color = "black"; // Default color or any other color for 'Not Guessed'
            }
        }
    }
}

updateKeysColor() //-----> REMOVE LATER

// [ ] 3. **Update colors of squares on board -** Create an updateSquaresColor function that changes color of squareEls based on keysStatus 

function updateSquaresColor() {
    for (let i = 0; i < squareEls.length; i++) {
        let currentSquare=squareEls[i].innerText
        console.log(currentSquare)
        let keyStatusObj = keysStatus.find(obj => obj.letter.toUpperCase() === currentSquare.toUpperCase());
        if (keyStatusObj) {
            // If a matching key status object is found
            switch(keyStatusObj.status) {
                case "Correctly Placed":
                    squareEls[i].style.backgroundColor = "green";
                    break;
                case "Incorrectly Placed":
                    squareEls[i].style.backgroundColor = "yellow";
                    break;
                case "Incorrect":
                    squareEls[i].style.backgroundColor = "red";
                    break;
                default:
                    squareEls[i].style.color = "black"; // Default color or any other color for 'Not Guessed'
            }
        }
    }
}

updateSquaresColor() // -----> REMOVE LATER


// [ ] 4. Create `updateMessage` function
function updateMessage() {} //----- TO CODE
// If isGameOver=true
// If correctlyGuessed= true (ensure this is scoped to be accessible), update messageEl to “You won! Game Over!”, else if gameOver = true update messageEl to ““Unfortunately you did not guess the correct word. Play again?”
// else if gameOver = false update messageEl to “Guess again”
// Call both the `updateBoard` and the `updateMessage`  and updateKeysColor and updateSquaresColor functions inside of `render` function. 
// Create turnsPlayed function to increase turn by 1 every time submit button is clicked.
// Handle a player clicking the letterEls with a `handleClick` function

function turnsPlayed() {
    guessNum+= 1
    return guessNum
}

  // [x] Attach an event listener to the keyboard. On the `'click'` event, it should call the handleClick` function.

  for (let i = 0; i < letterEls.length; i++) {
    letterEls[i].addEventListener('click', handleClick);
}


// [ ] Create handleClick function that handles player clicking on keyboard

function handleClick(event) {
    console.log(event.target.innerText + " was clicked!")
    updateBoardArr(event)
    console.log(board)
    // updateBoard() 
}

// [P1] 1. **Update the values in the board array** with the same letter contained in the click target element’s (key’s) innerText

function updateBoardArr(event) {
    board.forEach(function(turn,turnIndex) {
    if(turnIndex === guessNum - 1) {
        let firstNullIndex=turn.findIndex(guessLetter => guessLetter===null)
        turn[firstNullIndex]=event.target.innerText.toLowerCase()
        }
        return turn
    })
return board
}

// For each turn in board loop, On click of button, find first null value in guessNum-1 turn and update it with the innerText of the eventtarget


// [ ] 2. Create a function that **updates the squareEls innerText with values from board array** (on the line of the current Turn) 

function updateSqText() {}

// [ ] 3. Create a function that **updates the keysStatus** based on whether clicked key’s (target element’s) innerText is: Contained in targetWord and correctly placed, Contained in targetWord and incorrectly placed, Not contained in targetWord

function updateKeysStatus() {
    board.forEach(function(turn, turnIndex) {
        console.log(turn)
        if (turnIndex > guessNum - 1) {
            return;
        } 
        turn.forEach(function(guessLetter, letterIndex) {
            console.log(guessLetter);
            const letterObject = keysStatus.find(obj => obj.letter === guessLetter);
            console.log('Letter object:', letterObject);
            const correctIndices = []
            targetWord.split('').forEach((letter, index) => {
                console.log(letter)
                if (letter === guessLetter) { 
                    correctIndices.push(index);
                }
            });
            if (correctIndices.length === 0) {
                letterObject.status = "Incorrect";
            } else if (correctIndices.includes(letterIndex)) {
                letterObject.status = "Correctly Placed";
            } else {
                letterObject.status = "Incorrectly Placed";
            }
        });
    });
}


// [X] 9. Handle a player clicking the submitBtn with handleSubmit function:
        // 1. Call render function
        // 2. Call turnsPlayed() function

submitBtn.addEventListener('click',handleSubmit)

function handleSubmit() {
    render()
    turnsPlayed()
    isGameOver()
}


// [ ] Create isGameOver function
        //1. create checkForCorrectGuess function:
        //  if One of the arrays in board joined as a string = targetWord, set correctlyGuessed = true. Else false
        // Set gameOver=true IF either (OR)
         // correctlyGuessed=true
         // turn = 6