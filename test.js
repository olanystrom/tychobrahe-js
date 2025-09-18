const assert = require('assert');

const tychoDates = [
  0,
  [1, 2, 4, 6, 11, 12, 19], // Januari
  [11, 17, 18], // Februari
  [1, 4, 14, 15], // Mars
  [10, 17, 18], // April
  [7, 15, 18], // Maj
  [6], // Juni
  [17, 21], // Juli
  [2, 10], // Augusti
  [1, 16, 18], // September
  [6], // Oktober
  [6, 18], // November
  [6, 11, 18], // December
];

function isTychoDate(month, day) {
  return tychoDates[month]?.includes(day) || false;
}

// Test 1: Valid Tycho date - January 1
assert.strictEqual(isTychoDate(1, 1), true, 'January 1 should be a Tycho date');

// Test 2: Invalid date - January 3
assert.strictEqual(isTychoDate(1, 3), false, 'January 3 should not be a Tycho date');

console.log('All tests passed!');