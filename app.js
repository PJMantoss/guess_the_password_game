document.addEventListener('DOMContentLoaded', function(){
    let wordCount = 10,
        guessCount = 4, 
        password = '';

        let start = document.getElementById('start');
        start.addEventListener('click', function(){
            toggleClasses();
            toggleClasses();
            startGame();
        })
})