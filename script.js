// Configuration: Set your event dates here
const events = {
    event1: new Date("May 15, 2026 09:00:00").getTime(),   // Final Exams
    event2: new Date("August 20, 2026 08:30:00").getTime(), // Sports Meet
    event3: new Date("December 10, 2026 13:00:00").getTime() // Convocation
};

// Function to update the timers
function updateDashboard() {
    const now = new Date().getTime();

    updateSingleTimer(events.event1, now, 'd1', 'h1', 'm1', 's1');
    updateSingleTimer(events.event2, now, 'd2', 'h2', 'm2', 's2');
    updateSingleTimer(events.event3, now, 'd3', 'h3', 'm3', 's3');
}

function updateSingleTimer(targetTime, currentTime, dId, hId, mId, sId) {
    const diff = targetTime - currentTime;

    // Check if event passed
    if (diff < 0) {
        // Reset to 00 if passed
        document.getElementById(dId).innerText = "00";
        document.getElementById(hId).innerText = "00";
        document.getElementById(mId).innerText = "00";
        document.getElementById(sId).innerText = "00";
        return;
    }

    // Calculations
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    // Update HTML with leading zeros (e.g., 05 instead of 5)
    document.getElementById(dId).innerText = d < 10 ? "0" + d : d;
    document.getElementById(hId).innerText = h < 10 ? "0" + h : h;
    document.getElementById(mId).innerText = m < 10 ? "0" + m : m;
    document.getElementById(sId).innerText = s < 10 ? "0" + s : s;
}

// Update every second
setInterval(updateDashboard, 1000);

// Run immediately to avoid 1-second delay
updateDashboard();