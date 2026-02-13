// Base Mini App: старт гри після підключення гаманця (якщо потрібно) або одразу
function startGame() {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
  if (typeof miniapp !== "undefined" && miniapp.actions && miniapp.actions.ready) {
    miniapp.actions.ready();
  }
}
window.pendingStartGame = startGame;

window.requestAnimationFrame(function () {
  if (window.requireWalletConnect === true) {
    return; // чекаємо на клік "Підключити" у wallet_connect.js
  }
  if (window.requireWalletConnect === false) {
    startGame();
    return;
  }
  var t = setInterval(function () {
    if (window.requireWalletConnect === false) {
      clearInterval(t);
      startGame();
    } else if (window.requireWalletConnect === true) {
      clearInterval(t);
    }
  }, 50);
});
