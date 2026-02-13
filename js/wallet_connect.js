/**
 * Base Mini App: екран підключення гаманця перед грою.
 * Документація: https://docs.base.org/mini-apps/core-concepts/base-account
 */
(function () {
  var overlay = document.getElementById("wallet-connect-overlay");
  var btn = document.getElementById("wallet-connect-btn");
  var errEl = document.getElementById("wallet-connect-error");
  if (!overlay || !btn) return;

  function showError(msg) {
    if (errEl) {
      errEl.textContent = msg || "";
      errEl.classList.toggle("visible", !!msg);
    }
  }

  function setLoading(loading) {
    btn.disabled = loading;
    btn.textContent = loading ? "Підключення…" : "Підключити Base гаманець";
  }

  async function connectWallet() {
    if (typeof miniapp === "undefined" || !miniapp.wallet || !miniapp.wallet.getEthereumProvider) {
      showError("Відкрийте гру в Base App для підключення гаманця.");
      return;
    }
    setLoading(true);
    showError("");
    try {
      var provider = await miniapp.wallet.getEthereumProvider();
      if (!provider) {
        showError("Гаманець недоступний у цьому клієнті.");
        setLoading(false);
        return;
      }
      // Простий виклик підключення: eth_requestAccounts (стандартний connect)
      var accounts = await provider.request({ method: "eth_requestAccounts" });
      if (accounts && accounts.length > 0) {
        window.walletConnected = true;
        overlay.classList.remove("visible");
        if (typeof window.pendingStartGame === "function") {
          window.pendingStartGame();
        }
      } else {
        showError("Гаманець не підключено.");
      }
    } catch (e) {
      console.error("Wallet connect error:", e);
      showError(e && e.message ? e.message : "Не вдалося підключити гаманець.");
    }
    setLoading(false);
  }

  async function init() {
    var inMiniApp = false;
    if (typeof miniapp !== "undefined" && miniapp.isInMiniApp) {
      try {
        inMiniApp = await miniapp.isInMiniApp();
      } catch (e) {}
    }
    if (!inMiniApp) {
      window.requireWalletConnect = false;
      overlay.classList.remove("visible");
      return;
    }
    window.requireWalletConnect = true;
    overlay.classList.add("visible");
    btn.addEventListener("click", connectWallet);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
