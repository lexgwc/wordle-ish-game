# wordle-ish-game

**Wordle-ish:** 

- “Wordle-ish” is a word guessing game for players who enjoy testing their vocabulary and deduction skills. Each player has six attempts to guess a five-letter word, with feedback provided for each guess in the form of colored tiles, indicating when guessed letters are in the word or occupy the correct position. The aim is to guess the word in the fewest attempts possible. At the end of the game, players can see their success in guessing the word, and they will have the option to play a new word.
- I chose to create this game for my first project because I enjoy playing Wordle through the New York Times and was excited about the prospect of building something I enjoy using. The game has enough functionality to provide a challenge for a beginner developer while also being a feasible first project.

- **Technologies Used**:
    - **JavaScript**: For game logic and dynamic content manipulation.
    - **HTML**: Structuring the game's interface.
    - **CSS**: Styling and responsive design.

- **Getting Started**:
    - Find the deployed game link here: https://wordle-ish-game.vercel.app/
    - Instructions:
        - On loading, the game will render and a guessing board and keyboard will be displayed.
        - The object of the game is to guess a 5-letter “target word” in as few guesses as possible.
        - The player should use the keyboard to type a 5-letter word that does not contain duplicate letters, which will then appear in the first row of the guessing board.
        - Once the player clicks “submit”, the word’s letters will change color on both the guessing board and the keyboard. Gray tiles indicate that the corresponding letters are not contained in the target word. Yellow tiles indicate that the corresponding letters are contained in the target word, but they are currently not in the correct position. Green tiles indicate that the corresponding letters are in the target word and in the correct position.
        - Based on the feedback from the colored tiles, the player should then continue to enter guesses and get feedback until the target word has been guessed.
        - The player has six chances to guess the target word. If they guess the word within 6 guesses, they will win. If not, they will lose and the target word will be revealed.
- **WireFrames/ Screenshots**: https://imgur.com/8GV38oK
- **Timeline**:
    
    
    | Date | MVP Item | Met Goal (Y/N) | Notes |
    | --- | --- | --- | --- |
    | 3/18 | Basic game layout | Y | Initial layout setup. |
    | 3/19 | Game logic implementation | Y | Worked on 1) target word generation, 2) tracking key status, 3) updating key and square colors based on key status, 4) updating board squares with letters upon letter clicks. |
    | 3/20 | Finalize functionality | N | Out sick |
    | 3/21 | Finalize functionality
    Sound effects | Y | Implemented backspace and reset functionality.
    Added keypress sounds, and sound for correct guess.
    Added confetti. |
    | 3/22 | Styling and responsive design | Y | Focused on mobile-first design. |
    | 3/23 | Deployment | Y | Game is live! |
- **Attributions**:
    - Click sound: https://elements.envato.com/quest-game-ui-simple-click-1-mouse-6NFY5BK
    - Bling sound on win: https://elements.envato.com/coin-bling-F6MRYCR
    - Favicon: https://imgur.com/gallery/cJauV
- **Next Steps/planned future enhancements**:
    - In the future, I plan to make the following updates to the game:
        - The game currently only works when players enter guesses that do not contain duplicate letters. In the future, players will be able to enter words that contain duplicate letters and the feedback functionality will work for each letter.
        - The game currently allows players to enter any 5 letters for their guesses, regardless of whether the letters form a real word. In the future,  players will only be able to enter real words.
        - The game is currently made for a single player. In the future, players will be able to challenge friends to see who can guess a given word the fastest.