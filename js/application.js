// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
  // Base Mini App: signal app is ready so host can hide splash screen
  if (typeof miniapp !== "undefined" && miniapp.actions && miniapp.actions.ready) {
    miniapp.actions.ready();
  }
});
