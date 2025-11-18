# Memory Game

A lightweight browser-based memory matching game built with vanilla HTML, CSS, and JavaScript. Flip two cards at a time, find every pair of emojis, and enjoy a confetti celebration when you win.

## Features

- 4x4 grid of emoji cards randomized on every refresh.
- Smooth flip animations with match/preview states handled via CSS classes.
- Dark mode toggle to rest your eyes during longer play sessions.
- Optional cheat peek button that briefly reveals every card.
- Confetti animation powered by [`canvas-confetti`](https://www.npmjs.com/package/canvas-confetti) when all pairs are matched.

## Getting Started

```bash
git clone <repo-url>
cd guessgame
```

Open `memory-game.html` in any modern browser. Because everything is static, no build step or server is required. For live reload during development you can use any static file server or the Live Server extension in VS Code.

## Project Structure

- `memory-game.html` – root HTML file that links the stylesheet, script, and confetti CDN.
- `style.css` – layout, flip animation, and dark-mode styling.
- `script.js` – shuffles emojis, handles card logic, dark-mode switching, cheat peek, and celebration.

## Development Notes

- Emojis are stored in the `emojis` array (`script.js`) and duplicated to create pairs—replace them with any glyphs you like.
- Game sizing is tuned for a 4x4 grid; update `.game` in `style.css` if you change the number of cards.
- Confetti duration and particle settings live near the bottom of `script.js`.

Contributions, tweaks, and high-score bragging rights are welcome!
