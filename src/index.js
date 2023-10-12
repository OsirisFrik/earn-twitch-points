function earnPoints() {
  if (localStorage.getItem('debug-timeouts')) console.log('log earn', (new Date()).toString())
  
  /**
   * @type { HTMLButtonElement }
   */
  const btn = document.querySelector('button.[aria-label="Claim Bonus"]')

  if (btn) btn.click()
  if (btn && localStorage.getItem('log-earn')) console.log('clicked', (new Date()).toString())
  if (!btn && localStorage.getItem('log-earn')) console.log('btn not found', (new Date()).toString())

  setTimeout(earnPoints, 1 * 60 * 1000)
}

setTimeout(earnPoints, 3000)
