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

function resetKeysStatus() {
    keysStatus.forEach(letterObj => letterObj.status="Not Guessed")
}


//     3. Use a variable named `guessNum` to track which turn it is (and therefore which line the guess letters will go in)

let guessNum
//     4. Use an array named wordOptions to store 5-letter words
const wordOptions = [
    "amble", "abide", "acrid", "acute", "agile", "agony","album", "aloft","ample","baton","bough","cargo","carol","chard","comet","cleft", "lemon", "magic", "noble", "ocean", "piano", "tiger", "vocal", "early", "fancy", "great", "lucky", "nasty", "olive", "proud", "quick", "rusty", "shiny", "tidy", "ugly", "white", "young", "zebra", "abide", "bring", "drink", "enjoy", "fight", "gather", "hover", "joust", "knit", "laugh", "mourn", "print", "query", "relax", "surge", "travel", "upend", "value", "whirl", "chase", "expand", "flirt", "gather", "organ", "relax", "savor", "whisk", "yearn","longword","hi","cloak", "glory", "knife", "mirth", "roast", "vixen", "blush", "smart", "crane", "blink", "unzip", "quark", "nudge", "chart", "yacht", "plumb", "lemon", "flint", "wrung","waltz","valet","whisk","topaz","yacht","triad","thyme","staid","snarl","ramen","quirk","quart"
]

function filterWords(wordOptions) {
    return wordOptions.filter(word => word.length === 5)
}

let filteredWordOptions=filterWords(wordOptions)

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

//     2. Create **variable** letterEls to represent the lettered keys on keyboard
let letterEls=document.getElementsByClassName('keyBtn letter')

const sound = document.getElementById('clickSound')

const blingSound = document.getElementById('blingSound')

//     3. Create **variable** squareEls to represent the squares on the board
let squareEls = document.getElementsByClassName('squareEl')


//     4. Create **variable** submitBtn to represent the enter button on keyboard
let submitBtn=document.getElementById('submitBtn')

//     5. Create **variable** deleteEl to represent the backspace key on keyboard
let deleteBtn=document.getElementById('deleteBtn')


//     6. Create **variable** resetBtn to represent the Play Again button on the keyboard

let resetBtn=document.getElementById('resetBtn')


resetBtn.addEventListener('click',handleReset)

function handleReset() {
init()
resetKeysStatus()
for (let i = 0; i < squareEls.length; i++) {
    squareEls[i].style.color = "rgba(58, 62, 75)"
    squareEls[i].innerText = ""
    squareEls[i].style.backgroundColor = "rgb(251, 252, 255)"
}
for (let i = 0; i < letterEls.length; i++) {
    letterEls[i].style.backgroundColor = "rgb(221,225,236)"
    letterEls[i].style.color = "rgba(58, 62, 75)"
}
messageEl.innerText=""
}
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
    guessNum=1
    correctlyGuessed=false
    gameOver=false
    function generateTargetWord() {
        let index = Math.floor(Math.random()*filteredWordOptions.length)
        targetWord=filteredWordOptions[index]
        return targetWord
    }
    generateTargetWord()
    console.log("Target word is: " + targetWord)
    if (targetWord.length!==5) {
        generateTargetWord()
    }
}


// [X]    2. Create render() function and call at end of init(). Set aside for now

// [X] 4. Create Render function 

function render() {
    updateKeysStatus()
    updateKeysColor()
    updateSquaresColor()
}
        

// [X] 2. Create `updateKeysColor` function. **(this should change the color of squareEls based on keysStatus)**

function updateKeysColor() {
    for (let i = 0; i < letterEls.length; i++) {
        let currentLetter=letterEls[i].innerText
        let keyStatusObj = keysStatus.find(obj => obj.letter.toUpperCase() === currentLetter.toUpperCase());
        if (keyStatusObj) {
            switch(keyStatusObj.status) {
                case "Correctly Placed":
                    letterEls[i].style.backgroundColor = "rgb(135,182,94)";
                    letterEls[i].style.color = "white";
                    break;
                case "Incorrectly Placed":
                    letterEls[i].style.backgroundColor = "rgb(235,196,84)";
                    letterEls[i].style.color = "white";
                    break;
                case "Incorrect":
                    letterEls[i].style.backgroundColor = "rgb(166,174,194)";
                    letterEls[i].style.color = "white";
                    break;
                default:
                    letterEls[i].style.color = "black"
            }
        }
    }
}

// [X] 3. **Update colors of squares on board -** Create an updateSquaresColor function that changes color of squareEls based on keysStatus 

function updateSquaresColor() {
    for (let i = 0; i < squareEls.length; i++) {
        let currentSquare=squareEls[i].innerText
        let keyStatusObj = keysStatus.find(obj => obj.letter.toUpperCase() === currentSquare.toUpperCase());
        if (keyStatusObj) {
            // If a matching key status object is found
            switch(keyStatusObj.status) {
                case "Correctly Placed":
                    squareEls[i].style.backgroundColor = "rgb(135,182,94)";
                    squareEls[i].style.color = "white";
                    break;
                case "Incorrectly Placed":
                    squareEls[i].style.backgroundColor = "rgb(235,196,84)";
                    squareEls[i].style.color = "white";
                    break;
                case "Incorrect":
                    squareEls[i].style.backgroundColor = "rgb(166,174,194)";
                    squareEls[i].style.color = "white";
                    break;
                default:
                    squareEls[i].style.color = "black"; // Default color or any other color for 'Not Guessed'
            }
        }
    }
}


// [TO DO] 4. Create `updateMessage` function
function updateMessage() {
    if(gameOver===true) {
        if(correctlyGuessed===true) {
            messageEl.innerText="Nicely done! Click reset to play again."}
        else {messageEl.innerText="The word was " + targetWord + ". Click reset to play again."}
    }
} 

// If isGameOver=true
// If correctlyGuessed= true (ensure this is scoped to be accessible), update messageEl to “You won! Game Over!”, else if gameOver = true update messageEl to ““Unfortunately you did not guess the correct word. Play again?”
// else if gameOver = false update messageEl to “Guess again”
// Call both the `updateBoard` and the `updateMessage`  and updateKeysColor and updateSquaresColor functions inside of `render` function. 
// [X] Create turnsPlayed function to increase turn by 1 every time submit button is clicked.

function turnsPlayed() {
    guessNum+= 1
    return guessNum
}

  // [x] Attach an event listener to the keyboard. On the `'click'` event, it should call the handleClick` function.

  for (let i = 0; i < letterEls.length; i++) {
    letterEls[i].addEventListener('click', handleClick);
}

// [X] Create handleClick function that handles player clicking on keyboard

function handleClick(event) {
    sound.play()
    updateBoard(event) 
    updateBoardArr(event)
}

// [X] Update the values in the board array** with the same letter contained in the click target element’s (key’s) innerText

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
// [X] Create a function that **updates the squareEls innerText with values from board array** (on the line of the current Turn) 
function updateBoard(event) {
    let index = guessNum - 1
    let includedIds = [];
    if (guessNum === 1) {
        includedIds = [0, 1, 2, 3, 4];
    } else if (guessNum === 2) {
        includedIds = [5, 6, 7, 8, 9];
    } else if (guessNum === 3) {
        includedIds = [10, 11, 12, 13, 14];
    } else if (guessNum === 4) {
        includedIds = [15, 16, 17, 18, 19];
    } else if (guessNum === 5) {
        includedIds = [20, 21, 22, 23, 24];
    } else if (guessNum === 6) {
        includedIds = [25, 26, 27, 28, 29];
    }
    let firstNullIndex = board[index].findIndex(guessLetter => guessLetter === null)
    if (firstNullIndex !== -1) {
        let squareId = "sq" + includedIds[firstNullIndex];
        document.getElementById(squareId).innerText = event.target.innerText;
    }
}



// [X] 3. Create a function that **updates the keysStatus** based on whether clicked key’s (target element’s) innerText is: Contained in targetWord and correctly placed, Contained in targetWord and incorrectly placed, Not contained in targetWord

function updateKeysStatus() {
    board.forEach(function(turn, turnIndex) {
        if (turnIndex > guessNum - 1) {
            return;
        } 
        turn.forEach(function(guessLetter, letterIndex) {
            const letterObject = keysStatus.find(obj => obj.letter === guessLetter);
            if (letterObject) {
            const correctIndices = []
            targetWord.split('').forEach((letter, index) => {
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
        }
        });
    });
}


// [X] 9. Handle a player clicking the submitBtn with handleSubmit function:
        // 1. Call render function
        // 2. Call turnsPlayed() function

submitBtn.addEventListener('click',handleSubmit)

function handleSubmit() {
    blingSound.play()
    render()
    turnsPlayed()
    isCorrectlyGuessed()
    isGameOver()
    updateMessage()
}

function isCorrectlyGuessed() {
    let numCorrectLetters = keysStatus.filter(obj => obj['status'] === 'Correctly Placed').length
    if (numCorrectLetters === 5) {
        correctlyGuessed = true
    }
    return correctlyGuessed
}
// [X] Create isGameOver function

function isGameOver() {
    let maxTurns=6
    if (correctlyGuessed === true || guessNum > maxTurns) {
        gameOver = true
        // confetti()
    }
}


/*
function confetti() {
    if(gameOver===true) {
        const confettiCount = 1000;
        const confettiWrapper = document.getElementById('confetti-wrapper');
      
        for (let i = 0; i < confettiCount; i++) {
          const confetti = document.createElement('div');
          confetti.classList.add('confetti');
          confetti.style.backgroundColor = ['#ff0', '#f00', '#0f0', '#00f'][Math.floor(Math.random() * 4)];
          confetti.style.left = `${Math.random() * 100}%`;
          confetti.style.top = `-${Math.random() * 20}%`;
          confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
      
          animateConfetti(confetti);
          confettiWrapper.appendChild(confetti);
        }
      }
      
      function animateConfetti(confetti) {
        const confettiWrapper = document.getElementById('confetti-wrapper');
        const maxX = confettiWrapper.offsetWidth;
        const maxY = confettiWrapper.offsetHeight;
      
        let x = Math.random() * maxX; // Start at a random x position
        let y = 0; // Start at the top of the wrapper
        const initialX = Math.random() * 20 - 10; // Horizontal drift
        let initialY = Math.random() * 5 + 2; // Initial vertical speed
        const gravity = 0.005; // Gravity effect
      
        const color = ['#ff0', '#f00', '#0f0', '#00f'][Math.floor(Math.random() * 4)];
        confetti.style.backgroundColor = color;
      
        const updateConfetti = () => {
          x += initialX;
          y += initialY;
          initialY += gravity; // Simulate gravity
      
          // Apply the transformation
          confetti.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      
          // Check if the confetti piece is still within the visible area
          if (y < maxY) {
            requestAnimationFrame(updateConfetti);
          } else {
            confetti.remove(); // Cleanup confetti that's off the screen
          }
        };
      
        // Kick off the animation
        requestAnimationFrame(updateConfetti);
      }    
    }

    */
