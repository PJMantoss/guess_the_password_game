document.addEventListener('DOMContentLoaded', function(){
    let wordCount = 10,
        guessCount = 4, 
        password = '';

        let start = document.getElementById('start');
        start.addEventListener('click', function(){
            toggleClasses(document.getElementById('start-screen'), 'hide', 'show');
            toggleClasses(document.getElementById('game-screen'), 'hide', 'show');
            startGame();
        });

        let toggleClasses = element => {
            for (let i=1; i<arguments.length; i++){
                element.classList.toggle(arguments[i]);
            }
        }

        let startGame = () => {
            let wordList = document.getElementById('word-list');
            let randomWords = getRandomValues(words, wordCount);
            randomWords.forEach(word => {
                let li = document.createElement('li');
                li.innerText = word;
                wordList.appendChild(li);
            });

            password = getRandomValues(randomWords, 1)[0];
            setGuessCount(guessCount);

            wordList.addEventListener('click', updateGame);
        }

        let getRandomValues = (array, valNum) => {
            return shuffle(array).slice(0, valNum);
        }

        let shuffle = array => {
            let arrayCopy = array.slice();

            for (let i = arrayCopy.length - 1; i > 0; i--){
                let j = Math.floor(Math.random() * (i + 1));

                let temp = arrayCopy[i];
                arrayCopy[i] = arrayCopy[j];
                arrayCopy[j] = temp;
            }
            return arrayCopy;
        }

        let setGuessCount = newCount => {
            guessCount = newCount;
            document.getElementById('guesses-remaining').innerText = 
            'Guesses remaining: ' + guessCount + '.';
        }

        let updateGame = e => {
            if (e.target.tagName === 'LI' && !e.target.classList.contains('disabled')){
                let guess = e.target.innerText;
                let similarityScore = compareWords(guess, password);
                e.target.classList.add('disabled');
                e.target.innerText = guess + '=> Matching Letters ' + similarityScore;
                setGuessCount(guessCount - 1)
            }

            if (similarityScore === password.length){
                toggleClasses(document.getElementById('winner'), 'hide', 'show');
                this.removeEventListener('click', updateGame);
            } else if (guessCount === 0){
                toggleClasses(document.getElementById('loser'), 'hide', 'show');
                this.removeEventListener('click', updateGame);
            }
        }

        let compareWords = (word1, word2) => {
            if (word1.length !== word2.length){
                throw "Words must have the same length!";
            }

            let count = 0;
            for (let i=0; i<word1.length; i++){
                if (word1[i] === word2[i]) count++;
            }

            return count;
        }
});