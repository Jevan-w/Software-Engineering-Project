// Reference elements
const setTimerBtn = document.getElementById("set-timer-btn");
const alarmStatus = document.getElementById("alarm-status");
const alarmTrigger = document.getElementById("alarm-trigger"); // Alarm modal
const snoozeBtn = document.getElementById("snooze-btn");

// Function to set a weekly alarm for Sundays
function setWeeklyAlarm() {
  const now = new Date();
  const nextSunday = new Date();
  nextSunday.setDate(now.getDate() + ((7 - now.getDay()) % 7 || 7)); // Calculate next Sunday
  nextSunday.setHours(9, 0, 0, 0); // Set alarm for 9:00 AM

  const timeUntilAlarm = nextSunday - now;

  if (timeUntilAlarm > 0) {
    // Set a timeout to trigger the alarm
    setTimeout(() => {
      triggerAlarm(); // Show alarm modal
    }, timeUntilAlarm);

    alarmStatus.textContent = `Alarm set for next Sunday at 9:00 AM.`;
  }
}

// Function to trigger the alarm modal
function triggerAlarm() {
  alarmTrigger.classList.remove("hidden"); // Show the alarm modal
  alarmStatus.textContent = ""; // Clear status to avoid confusion
  console.log("Alarm triggered!");
}

// Function to completely remove the alarm modal
function removeAlarmModal() {
  if (alarmTrigger) {
    alarmTrigger.remove(); // Remove the modal from the DOM
    alarmStatus.textContent = "Alarm snoozed! You can set another timer."; // Update status
    console.log("Snooze clicked. Alarm modal removed from the DOM.");
  }
}

// Request notification permissions from the browser
function requestNotificationPermission() {
  if (Notification.permission !== "granted") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        alert("Notifications enabled! You can now receive reminders.");
      }
    });
  }
}

// Event listeners
setTimerBtn.addEventListener("click", () => {
  requestNotificationPermission();
  setWeeklyAlarm();
});

snoozeBtn.addEventListener("click", removeAlarmModal); // Remove modal on snooze
