const { calculateNextSunday, triggerAlarm, snoozeAlarm } = require('./app');

// Mock the DOM for testing
document.body.innerHTML = `
  <div id="alarm-trigger" class="hidden">
    <button id="snooze-btn"></button>
  </div>
`;

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
  expect(alarmTrigger.classList.contains('hidden')).toBe(false);
});

// Test: Snooze Alarm Removes Modal
test('snoozeAlarm should remove the alarm modal from the DOM', () => {
  const alarmTrigger = document.getElementById('alarm-trigger');
  snoozeAlarm();
  expect(document.getElementById('alarm-trigger')).toBeNull(); // Confirm it's removed
});
