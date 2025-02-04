document.addEventListener("DOMContentLoaded", () => {
    const gameBoard = document.getElementById("game-board");
    const movesElement = document.getElementById("moves");
    const timerElement = document.getElementById("timer");
    const restartButton = document.getElementById("restart");

    const symbols = ["🍎", "🍌", "🍇", "🍉", "🍒", "🍓", "🥭", "🍍"];
    let cards = [...symbols, ...symbols]; // Duplicate symbols for matching pairs

    let flippedCards = [];
    let matchedPairs = 0;
    let moves = 0;
    let timer;
    let timeElapsed = 0;

    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    function startGame() {
        gameBoard.innerHTML = "";
        moves = 0;
        timeElapsed = 0;
        matchedPairs = 0;
        movesElement.textContent = moves;
        timerElement.textContent = timeElapsed;
        cards = shuffle(cards);
        flippedCards = [];

        cards.forEach((symbol) => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.dataset.symbol = symbol;
            card.addEventListener("click", flipCard);
            gameBoard.appendChild(card);
        });

        clearInterval(timer);
        timer = setInterval(() => {
            timeElapsed++;
            timerElement.textContent = timeElapsed;
        }, 1000);
    }

    function flipCard() {
        if (flippedCards.length < 2 && !this.classList.contains("flipped")) {
            this.textContent = this.dataset.symbol;
            this.classList.add("flipped");
            flippedCards.push(this);
        }

        if (flippedCards.length === 2) {
            moves++;
            movesElement.textContent = moves;
            checkMatch();
        }
    }

    function checkMatch() {
        const [card1, card2] = flippedCards;

        if (card1.dataset.symbol === card2.dataset.symbol) {
            card1.classList.add("matched");
            card2.classList.add("matched");
            matchedPairs++;
            flippedCards = [];

            if (matchedPairs === symbols.length) {
                clearInterval(timer);
                setTimeout(() => alert(`Congratulations! You completed the game in ${moves} moves and ${timeElapsed} seconds!`), 500);
            }
        } else {
            setTimeout(() => {
                card1.classList.remove("flipped");
                card2.classList.remove("flipped");
                card1.textContent = "";
                card2.textContent = "";
                flippedCards = [];
            }, 1000);
        }
    }

    restartButton.addEventListener("click", startGame);

    startGame();
});