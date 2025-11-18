# Memory Game

Simple browser memory matching game built with plain HTML, CSS, and JavaScript. Flip two cards at a time, find their pairs, and clear the board.

## Features

- 4x4 grid of emoji cards shuffled on every load.
- CSS-based flip animation for open/match states.
- Dark mode toggle plus a short cheat peek button.
- Lightweight confetti effect via [`canvas-confetti`](https://www.npmjs.com/package/canvas-confetti) when the board is complete.

## Getting Started

```bash
git clone https://github.com/liena-grytsyna/guessgame.git
cd guessgame
```

Open `index.html` in any modern browser. Everything is static, so no build or server is required (although any static file server works if you prefer one).

## Project Structure

- `index.html` - markup that includes the stylesheet, script, and confetti CDN.
- `style.css` - layout, card styles, flip animation, and dark-mode tweaks.
- `script.js` - emoji shuffling, click handling, cheat reveal, and confetti trigger.

## Development Notes

- Emoji pairs live in the `emojis` array within `script.js`; replace them with any characters you like.
- `.game` dimensions in `style.css` assume sixteen cards. Adjust width/height if you add more.
- Confetti duration and particle counts are near the end of `script.js` for quick tuning.

Feel free to adapt or extend the game for your needs.
