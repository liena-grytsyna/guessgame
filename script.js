const emojis = ["😇", "😇", "🤓", "🤓", "😎", "😎", "🤩", "🤩", "🥳", "🥳", "🥶", "🥶", "😳", "😳", "🤯", "🤯"];
const gameContainer = document.querySelector('.game');
const bodyElement = document.querySelector('.body');
const containerElement = document.querySelector('.container');
const themeToggleButton = document.querySelector('.toggle-theme');
const peekButton = document.querySelector('.peek-button');
const resetButton = document.querySelector('.reset');

let firstCard = null;
let secondCard = null;
let isProcessing = false;

const shuffle = items => {
    const shuffledItems = [...items];

    for (let currentIndex = shuffledItems.length - 1; currentIndex > 0; currentIndex -= 1) {
        const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
        const currentItem = shuffledItems[currentIndex];

        shuffledItems[currentIndex] = shuffledItems[randomIndex];
        shuffledItems[randomIndex] = currentItem;
    }

    return shuffledItems;
};

const resetSelection = () => {
    firstCard = null;
    secondCard = null;
    isProcessing = false;
};

const launchConfetti = () => {
    if (typeof confetti !== 'function') {
        return;
    }

    const end = Date.now() + 2000;

    const frame = () => {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });

        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    };

    frame();
};

const isGameComplete = () => document.querySelectorAll('.boxMatch').length === emojis.length;

const handleCardClick = cardElement => {
    if (isProcessing || cardElement.classList.contains('boxOpen') || cardElement.classList.contains('boxMatch')) {
        return;
    }

    cardElement.classList.add('boxOpen');

    if (!firstCard) {
        firstCard = cardElement;
        return;
    }

    secondCard = cardElement;
    isProcessing = true;

    setTimeout(() => {
        if (firstCard.dataset.emoji === secondCard.dataset.emoji) {
            firstCard.classList.add('boxMatch');
            secondCard.classList.add('boxMatch');
        } else {
            firstCard.classList.remove('boxOpen');
            secondCard.classList.remove('boxOpen');
        }

        resetSelection();

        if (isGameComplete()) {
            launchConfetti();
        }
    }, 1000);
};

shuffle(emojis).forEach(emoji => {
    const cardElement = document.createElement('button');
    cardElement.className = 'item';
    cardElement.type = 'button';
    cardElement.dataset.emoji = emoji;
    cardElement.setAttribute('aria-label', 'Hidden memory card');
    cardElement.addEventListener('click', () => handleCardClick(cardElement));

    gameContainer.appendChild(cardElement);
});

themeToggleButton.addEventListener('click', () => {
    bodyElement.classList.toggle('dark-mode');
    containerElement.classList.toggle('dark-mode');
    document.querySelectorAll('.item').forEach(item => item.classList.toggle('dark-mode'));
    themeToggleButton.textContent = bodyElement.classList.contains('dark-mode') ? '☀️' : '🌙';
});

peekButton.addEventListener('click', () => {
    const cards = document.querySelectorAll('.item');

    cards.forEach(card => card.classList.add('boxOpen'));

    setTimeout(() => {
        cards.forEach(card => {
            if (!card.classList.contains('boxMatch')) {
                card.classList.remove('boxOpen');
            }
        });
    }, 2000);
});

resetButton.addEventListener('click', () => {
    window.location.reload();
});
