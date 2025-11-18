const emojis = ["😇", "😇", "🤓", "🤓", "😎", "😎", "🤩", "🤩", "🥳", "🥳", "🥶", "🥶", "😳", "😳", "🤯", "🤯"];
const shuffledEmojis = emojis.sort(() => Math.random() - 0.5);

let firstCard = null;
let secondCard = null;
let isProcessing = false;

const gameContainer = document.querySelector('.game');

shuffledEmojis.forEach(emoji => {
    const cardElement = document.createElement('div');
    cardElement.className = 'item';
    cardElement.dataset.emoji = emoji;

    cardElement.onclick = function () {
        if (isProcessing || cardElement.classList.contains('boxOpen') || cardElement.classList.contains('boxMatch')) {
            return;
        }

        cardElement.classList.add('boxOpen');

        if (!firstCard) {
            firstCard = cardElement;
        } else {
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

                firstCard = null;
                secondCard = null;
                isProcessing = false;

                if (document.querySelectorAll('.boxMatch').length === emojis.length) {
                    // Конфетти при победе
                    const duration = 2 * 1000; // 2 секунды
                    const end = Date.now() + duration;

                    // Возвращаем много конфетти
                    (function frame() {
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
                        confetti({
                            particleCount: 5,
                            angle: 180,
                            spread: 55,
                            origin: { x: 0 }
                        });

                        if (Date.now() < end) {
                            requestAnimationFrame(frame);
                        }
                    })();
                }
            }, 1000);
        }
    };

    gameContainer.appendChild(cardElement);
});

/* Dark mode toggle */
document.addEventListener('DOMContentLoaded', () => {
    const bodyElement = document.querySelector('.body');
    const themeToggleBtn = document.querySelector('.toggle-theme');
    const cheatButton = document.querySelector('.cheat-button');

    themeToggleBtn.addEventListener('click', () => {
        bodyElement.classList.toggle('dark-mode');
        document.querySelector('.container').classList.toggle('dark-mode');
        document.querySelectorAll('.item').forEach(item => item.classList.toggle('dark-mode'));
    });

    // Читерная кнопка
    cheatButton.addEventListener('click', () => {
        const cards = document.querySelectorAll('.item');
        cards.forEach(card => card.classList.add('boxOpen'));
        
        setTimeout(() => {
            cards.forEach(card => {
                if (!card.classList.contains('boxMatch')) {
                    card.classList.remove('boxOpen');
                }
            });
        }, 2000); // Карточки будут видны 2 секунды
    });
});
