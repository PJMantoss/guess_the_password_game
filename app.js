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
            let randomWords = getRandomValues(words, wordCount)
        }
})