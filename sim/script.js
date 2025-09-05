// --- Function for Toggle Switches ---
function setupSwitch(switchId) {
    const theSwitch = document.getElementById(switchId);
    theSwitch.addEventListener('click', () => {
        theSwitch.classList.toggle('on');
        console.log(switchId + " is now " + (theSwitch.classList.contains('on') ? "ON" : "OFF"));
    });
}

// --- Function for Rotary Knobs ---
function setupRotaryKnob(knobId) {
    const knob = document.getElementById(knobId);
    let isDragging = false;
    let startY = 0;
    // Set the initial angle to 0
    let currentAngle = 0;
    let startAngle = 0;

    knob.style.transform = `rotate(${currentAngle}deg)`;

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const deltaY = e.clientY - startY;
        let newAngle = startAngle + deltaY / 2;

        // Clamp the angle between -120 and 0 degrees
        newAngle = Math.max(-120, Math.min(0, newAngle));

        currentAngle = newAngle;
        knob.style.transform = `rotate(${currentAngle}deg)`;
    };

    const handleMouseUp = () => {
        isDragging = false;
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
        console.log(`Knob set to angle: ${Math.round(currentAngle)}`);
    };

    knob.addEventListener('mousedown', (e) => {
        isDragging = true;
        startY = e.clientY;
        startAngle = currentAngle;
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    });
}


// --- Initialize All Controls ---
setupSwitch('switch-1');
setupSwitch('switch-2');
setupSwitch('switch-3');
setupRotaryKnob('knob-1');