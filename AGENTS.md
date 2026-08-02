# AGENTS instructions for darkyun

This repository contains a small browser-based idle game written in plain HTML, CSS, and ES modules.

## Project overview
- The game entry point is [index.html](index.html), which loads [src/index.js](src/index.js).
- [src/index.js](src/index.js) creates the canvas layers, loads the background image, and starts the animation loop with requestAnimationFrame.
- [src/Game.js](src/Game.js) is the main game orchestrator. It creates the resources, circles, and buttons used by the runtime.

## Key files
- [src/index.js](src/index.js): bootstrapping, canvas setup, resize handling, and the main game loop.
- [src/Game.js](src/Game.js): central game state, resource instances, selected build state, and draw/update coordination.
- [src/Buttons.js](src/Buttons.js): build buttons added to the left UI panel.
- [src/Input.js](src/Input.js): click handling for placing builds on the game circles.
- [src/Builds.js](src/Builds.js): build definitions, circle logic, and wave visuals.
- [src/Resource.js](src/Resource.js): resource state, production, and rendering.
- [src/Data.js](src/Data.js): placeholder persistence data structure.
- [README.md](README.md): minimal project description.

## Development workflow
- Run the site locally from the repository root with a static server so the browser can load the ES modules correctly.
- The workspace already includes a VS Code task named "Start Darkyun local server".
- A typical local run is:
  - `npx --yes http-server . -p 5500 -c-1`
  - Then open `http://localhost:5500/`.

## Conventions to preserve
- Keep the game logic in the existing module structure instead of introducing a framework.
- Prefer small, focused edits inside the current ES module files.
- Be aware that the current codebase has some circular import patterns between [src/index.js](src/index.js), [src/Game.js](src/Game.js), [src/Buttons.js](src/Buttons.js), and [src/Builds.js](src/Builds.js). Preserve the existing dependency flow unless a refactor is explicitly requested.
- When changing visuals or layout, keep the canvas sizing logic in [src/index.js](src/index.js) and the draw/update flow in [src/Game.js](src/Game.js).
