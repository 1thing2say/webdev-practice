const footer = document.querySelector(".gridTest-item-4");
const staticText = "footer";
let isClockMode = false;
let clockInterval;

// The fading function from earlier
function changeFooterTextSmoothly(newText) {
    footer.classList.add('gridTest-item-4-after');
    setTimeout(() => {
        footer.textContent = newText;
        footer.classList.remove('gridTest-item-4-after');
    }, 300);
}

function toggleFooterMode() {
    isClockMode = !isClockMode;

    if (isClockMode) {
        // Switch to clock mode: fade in the first time
        changeFooterTextSmoothly(new Date().toLocaleTimeString());
        
        // Then start a timer to update it every second WITHOUT fading 
        // (so it doesn't blink annoyingly every single second)
        clockInterval = setInterval(() => {
            footer.textContent = new Date().toLocaleTimeString();
        }, 1000);
    } else {
        // Switch to static text mode: stop the clock
        clearInterval(clockInterval);
        
        // Fade back to the static text
        changeFooterTextSmoothly(staticText);
    }
}

// Start the cycle: toggle every 10 seconds (10,000 milliseconds)
setInterval(toggleFooterMode, 10000);

// Initialize the first state so it's not blank
footer.textContent = staticText;
