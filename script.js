// # Pseudocode

// ________________________________________________________________________________________________________________
// Define the required variables used to track the state of the game


//     1. Use an array of arrays named `board` to represent the state of the squares on the board (i.e. whether they’re empty or contain letters)

let board
//     2. Use an array of objects named `keysStatus` to represent the state of the keys on the keyboard (i.e. whether they’ve been guessed correctly, incorrectly, or not guessed)

class LetterObj {
    constructor(letter, status) {
        this.letter=letter
        this.status=status
    }
}

let keysStatus = []

function generateKeysStatus() {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for(let i=0;i<alphabet.length; i++) {
        const letter = alphabet[i]
        const status = 'Not Guessed'
        const letterObj= new LetterObj(letter,status)
        keysStatus.push(letterObj)
    }
    return keysStatus
}

generateKeysStatus()
console.log(keysStatus)

//         1. e.g.:
            
//             ```jsx
//             keysStatus = [
//             		{Letter: A
//             	Status: Not Guessed
//             	}
//             		{Letter: B
//             	Status: Guessed - Incorrect Placement
//             	}
//             		{Letter: C
//             	Status: Guessed - Correct Placement
//             	}
//             		{Letter: D
//             	Status: Guessed - Incorrect 
//             	}
//             ]
//             ```
            
//     3. Use a variable named `turn` to track which turn it is (and therefore which line the guess letters will go in)

let turn
//     4. Use an array named wordOptions to store 5-letter words
const wordOptions = [
    "apple",
    "baker",
    "candy",
    "daisy",
    "eagle",
    "frost",
    "grape",
    "happy",
    "jelly",
    "kitty",
    "lemon",
    "magic",
    "noble",
    "ocean",
    "piano",
    "queen",
    "roses",
    "sunny",
    "tiger",
    "umbra",
    "vocal",
    "water",
    "zebra",
    "dance",
    "laugh",
    "dream",
    "learn",
    "music",
    "shine",
    "spark",
    "trust",
    "brave",
    "clean",
    "calm",
    "deep",
    "fast",
    "loud",
    "rich",
    "true",
    "warm",
    "wise",
    "wild",
    "kind",
    "bold",
    "cool",
    "dear",
    "fair",
    "fine",
    "free",
    "full",
    "good",
    "hard",
    "high",
    "huge",
    "last",
    "live",
    "long",
    "open",
    "real",
    "rich",
    "safe",
    "shut",
    "soft",
    "tall",
    "wild",
    "dark",
    "firm",
    "flat",
    "full",
    "kind",
    "late",
    "loud",
    "mild",
    "neat",
    "rich",
    "sane",
    "slow",
    "vast",
    "wild"
]

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
//     2. Create **variable** keyEls to represent the lettered keys on keyboard
let keyEls=document.getElementsByClassName('keyBtn')

//GET RID OF THIS LATER
let alphabetArr=[]
for (let i = 0; i < keyEls.length; i++) {
    alphabetArr.push(keyEls[i].innerText)
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

// 3. Upon loading, the game state should be initialized, and a function should be
// called to render this game state
//     1. Create init() function and inside it, initialize variables:
//         1. board array should contain all nulls
//         2. keys array should contain letters A-Z
//         3. turn variable should equal 1
//         4. correctlyGuessed variable should be set to false
//         5. gameOver variable should be set to false
//     2. Create render() function and call at end of init(). Set aside for now
//     3. Choose targetWord from wordOptions —>
//         1. let index = mathrandom number out of 100
//         2. use that number to choose index of wordOptions e.g. wordOptions[index]
// 4. Create Render function 
//     1. Inside render function:
        
//         ```jsx
//         function render() {
//         updateBoard()
//         updateKeysColor()
//         updateSquaresColor()
//         updateMessage()
//         }
//         ```
        
//     2. Create `updateBoard` function. **(this should change the color of squareEls based on keysStatus)**
//         1. Create UpdateBoard function *—— do I need this?*
//         2. **Update colors of keys on keyboard -** Create an updateKeysColor function that changes color of keyEls based on keysStatus 
//             - In `updateBoard` function, loop over `board` and for each element:
//             - if keysStatus[name]=keyEls.innerText
//                 - if this.keyStatus[status]= Not Guessed, keyEls.style.color = white
//                 - else if this.keyStatus[status]= Guessed - Incorrect Placement, keyEls.style.color = Yellow
//                 - else if this.keyStatus[status]= Guessed - Correct Placement, keyEls.style.color = Green
//                 - else if this.keyStatus[status]= Guessed - Incorrect, keyEls.style.color = Gray
//         3. **Update colors of squares on board -** Create an updateSquaresColor function that changes color of squareEls based on keysStatus 
//             - if keysStatus[name]=squareEls.innerText
//                 - if this.keyStatus[status]= Not Guessed, keyEls.style.color = white
//                 - else if this.keyStatus[status]= Guessed - Incorrect Placement, keyEls.style.color = Yellow
//                 - else if this.keyStatus[status]= Guessed - Correct Placement, keyEls.style.color = Green
//                 - else if this.keyStatus[status]= Guessed - Incorrect, keyEls.style.color = Gray
//     3. Create `updateMessage` function
//         1. If isGameOver=true
//             1. If correctlyGuessed= true (ensure this is scoped to be accessible), update messageEl to “You won! Game Over!”, else if gameOver = true update messageEl to ““Unfortunately you did not guess the correct word. Play again?”
//             2. else if gameOver = false update messageEl to “Guess again”
//     4. Call both the `updateBoard` and the `updateMessage`  and updateKeysColor and updateSquaresColor functions inside of `render` function. 
// 5. Create turnsPlayed function to increase turn by 1 every time submit button is clicked.
// 6. The state of the game should be rendered to the user
// 7. Define the required constants
// 8. Handle a player clicking the keyEls with a `handleClick` function
//     1. **Update the values in the board array** with the same letter contained in the click target element’s (key’s) innerText
//         1. **THIS NEEDS WORK**
//     2. Create a function that **updates the squareEls innerText with values from board array** (on the line of the current Turn) 
//         1. **THIS NEEDS WORK**
//     3. Create a function that **updates the keysStatus** based on whether clicked key’s (target element’s) innerText is:
//         1. Contained in targetWord and correctly placed
//         2. Contained in targetWord and incorrectly placed
//         3. Not contained in targetWord
// 9. Handle a player clicking the submitBtn with handleSubmit function:
//     1. Call render function
//     2. Call turnsplayed() function
//     3. Create and call isGameOver function
//
