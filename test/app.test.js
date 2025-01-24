// Import the functions to test
const { calculateNextSunday, triggerAlarm, snoozeAlarm } = require('../js/app');

// Mock the DOM before each test
beforeEach(() => {
  document.body.innerHTML = `
    <div>
      <button id="set-timer-btn"></button>
      <p id="alarm-status"></p>
      <div id="alarm-trigger" class="hidden">
        <div id="content">
          <h2 id="tidy-message">Tidy O'Clock!</h2>
          <button id="snooze-btn">Snooze</button>
        </div>
      </div>
    </div>
  `;
});

// Test: Calculate Next Sunday
test('calculateNextSunday should return the correct date for the next Sunday', () => {
  const today = new Date('2025-01-20'); // Monday
  const nextSunday = calculateNextSunday(today);
  expect(nextSunday.getDay()).toBe(0); // Sunday
  expect(nextSunday.toISOString().substring(0, 10)).toBe('2025-01-26');
});

// Test: Triggering the Alarm
test('triggerAlarm should make the alarm modal visible', () => {
  const alarmTrigger = document.getElementById('alarm-trigger');
  triggerAlarm();
  expect(alarmTrigger.classList.contains('hidden')).toBe(false); // Modal should be visible
});

// Test: Snooze Alarm Removes Modal
test('snoozeAlarm should remove the alarm modal from the DOM', () => {
  snoozeAlarm();
  const alarmTrigger = document.getElementById('alarm-trigger');
  expect(alarmTrigger).toBeNull(); // Modal should be removed from the DOM
});
