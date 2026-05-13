# Memory Game

[Play the game](https://liena-grytsyna.github.io/guessgame/)

Simple browser memory matching game built with plain HTML, CSS, and JavaScript. Flip two cards at a time, find every pair, and clear the board.

## Features

- 4x4 grid of emoji cards shuffled on every load.
- CSS-based flip animation for open/match states.
- Theme toggle plus a short peek button.
- Lightweight confetti effect via [`canvas-confetti`](https://www.npmjs.com/package/canvas-confetti) when the board is complete.

## Project Structure

- `index.html` - markup that includes the stylesheet, script, and confetti CDN.
- `style.css` - layout, card styles, flip animation, and dark-mode tweaks.
- `script.js` - emoji shuffling, click handling, peek reveal, and confetti trigger.

## Development Notes

- Emoji pairs live in the `emojis` array within `script.js`; replace them with any characters you like.
- The `.game` grid in `style.css` assumes sixteen cards. Update the grid columns if you add more pairs.
- Confetti duration and particle counts are near the end of `script.js` for quick tuning.

