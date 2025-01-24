// Reference elements
const setTimerBtn = document.getElementById("set-timer-btn");
const alarmStatus = document.getElementById("alarm-status");
const alarmTrigger = document.getElementById("alarm-trigger");
const snoozeBtn = document.getElementById("snooze-btn");

// Function: Calculate the next Sunday
function calculateNextSunday(date) {
  const nextSunday = new Date(date);
  nextSunday.setDate(date.getDate() + ((7 - date.getDay()) % 7 || 7));
  nextSunday.setHours(9, 0, 0, 0); // Alarm is always at 9:00 AM
  return nextSunday;
}

// Function: Trigger the alarm modal
function triggerAlarm() {
  if (alarmTrigger) {
    alarmTrigger.classList.remove("hidden"); // Show the modal
    alarmStatus.textContent = ""; // Clear alarm status
    console.log("Alarm triggered! Modal is now visible.");
  }
}

// Function: Snooze the alarm and completely remove the modal
function snoozeAlarm() {
  console.log("Snooze button clicked.");
  if (alarmTrigger) {
    alarmTrigger.remove(); // Completely remove the modal from the DOM
    console.log("Snooze clicked. Alarm modal removed.");
  } else {
    console.error("Alarm modal not found!");
  }
}

// Function: Set a weekly alarm
function setWeeklyAlarm() {
  const now = new Date();
  const nextSunday = calculateNextSunday(now);
  const timeUntilAlarm = nextSunday - now;

  if (timeUntilAlarm > 0) {
    setTimeout(triggerAlarm, timeUntilAlarm);
    if (alarmStatus) {
      alarmStatus.textContent = `Alarm set for next Sunday at 9:00 AM.`;
    }
    console.log(`Alarm set for ${nextSunday}`);
  }
}

// Safely attach event listeners
if (setTimerBtn) {
  setTimerBtn.addEventListener("click", setWeeklyAlarm);
}

if (snoozeBtn) {
  snoozeBtn.addEventListener("click", snoozeAlarm);
}

// Export functions for testing
if (typeof module !== "undefined") {
  module.exports = { calculateNextSunday, triggerAlarm, snoozeAlarm };
}
