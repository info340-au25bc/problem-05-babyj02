'use strict';

/** Basic Types */

// Define a new variable `motto` for the value "The iSchool is my school"
let motto = 'The iSchool is my school';

// Log out the motto
console.log(motto);

// Define a variable `mottoLength` that stores the length of the motto.
// Use the `.length` property. Log out the length.
let mottoLength = motto.length;
console.log(mottoLength);

// Use `indexOf()` to see if the word "cool" is in the string. Log a boolean.
let hasCool = motto.indexOf('cool') !== -1;
console.log(hasCool);

// Replace "iSchool" with "Information School" and reassign to `motto`.
// Log the updated motto.
motto = motto.replace('iSchool', 'Information School');
console.log(motto);

// Calculate the ratio between the updated motto length and the old length.
// Log as a percentage with two decimal places (e.g., "123.45%").
let newLength = motto.length;
let ratioPct = ((newLength / mottoLength) * 100).toFixed(2) + '%';
console.log(ratioPct);


/** Arrays **/

// Create an array `numbers` with the 10 numbers and log it.
let numbers = [1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(numbers);

// Change the `4` to `4.2` using bracket notation. Log the updated array.
numbers[1] = 4.2;
console.log(numbers);

// Add the number 3 to the END of the array. Log the updated array.
numbers.push(3);
console.log(numbers);

// Find the median of the numbers array. Log the median value.
let sortedNumbers = numbers.slice().sort((a, b) => a - b);
let median = sortedNumbers[Math.floor(sortedNumbers.length / 2)];
console.log(median);


/** Objects **/

// Create a `rect` object and log it.
let rect = { x: 30, y: 50, width: 100, height: 50 };
console.log(rect);

// Log "X, Y" for the rectangle's location.
console.log(`${rect.x}, ${rect.y}`);

// Set rect.height = sqrt(rect.width) using dot notation.
rect.height = Math.sqrt(rect.width);

// Log the rectangle's area.
console.log(rect.width * rect.height);

// Create a `circle` object; radius is the LAST value in the sorted numbers.
let circle = { cx: 34, cy: 43, radius: sortedNumbers[sortedNumbers.length - 1] };
console.log(circle);

// Create `shapes` array with the rectangle and circle. Log it.
let shapes = [rect, circle];
console.log(shapes);

// Add an anonymous right triangle object. Log the updated array.
shapes.push({ base: 33, height: 44 });
console.log(shapes);

// Log the triangle's current `hypotenuse` (should be undefined).
console.log(shapes[2].hypotenuse);

// Assign hypotenuse = 55 and log the array again.
shapes[2].hypotenuse = 55;
console.log(shapes);
