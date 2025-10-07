// Helper function: replaces content inside #out
function render (html) {
  document.getElementById('out').innerHTML = html
}

/* -------------------------------
   Demo 1: Click (counter)
-------------------------------- */
let clickCount = 0
document.getElementById('btnClick').addEventListener('click', () => {
   clickCount++
   render(`<p>Button Clicked ${clickCount} Time(s) </p>`)
})


/* --------------------------------------
   Demo 2: Double-click (toggle highlight)
--------------------------------------- */
const dblClickCard = document.getElementById('dblCard')
dblClickCard.addEventListener('dblclick', () => {
   dblClickCard.classList.toggle('activated')

   const state = dblClickCard.classList.contains('activated') ? 'ON' : 'OFF'
   render(`<p>Doubleclick is ${state}.</p>`)
})

/* --------------------------------
   Demo 3: Keypress (show key/code)
--------------------------------- */
const kbKey = document.getElementById('kbKey')
const kbCode = document.getElementById('kbCode')

document.addEventListener('keydown', e => {
   kbKey.textContent = e.key === '' ? ('space') : e.key
   kbCode.textContent = e.code
})

/* ----------------------------------------
   Demo 4: Show Time (12-hour format + day)
----------------------------------------- */


/* -------------------------
   Utility: Clear output
-------------------------- */
document.getElementById('btnClear').addEventListener('click', () => {
   clickCount = 0
  render('<span class="text-secondary">Output cleared.</span>')
})

/* =================================================
   🔥 Event Listeners Challenge (Pick ONE to complete)


   Option B — Scroll Progress Bar
   - Add a small Bootstrap progress bar element at the very top of the page
   - Select the inner bar element
   - Write a function that calculates % scrolled
     (current scroll position ÷ total scrollable height)
   - Update the width of the bar with that percentage
   - Run this function when the page loads and on every scroll event

================================================== */
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
