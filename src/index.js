function earnPoints() {
  /**
   * @type { HTMLButtonElement }
   */
  const btn = document.querySelector('button.tw-button.tw-button--success.tw-interactive')

  if (btn) btn.click()

  setTimeout(earnPoints, 1 * 60 * 1000);
}

setTimeout(earnPoints, 3000);
