'use strict';

/* Define a function `addFour()` that takes a single argument 
   and returns a value 4 greater than the input.*/
function addFour(x) {
  // When passed a string, JavaScript coerces to string → concatenation.
  // e.g. "8" + 4 = "84"
  return x + 4;
}

/* Create and log a variable `twelve` that is the result of passing 8 to your
   addFour() function. */
let twelve = addFour(8);
console.log(twelve);

/* Create and log a variable `twelveString` that is the result of passing "8" 
   (a string) to your addFour() function. */
let twelveString = addFour("8");
console.log(twelveString);


/* Define a function `compoundInterest()` that takes:
     - principle
     - annual rate (decimal)
     - years
   Returns balance with continuous compounding: P * e^(rt)
*/
function compoundInterest(principle, rate, years) {
  let total = principle * Math.exp(rate * years);
  return total;
}


/* Define a function `fizzBuzz()` that returns an array from 1 to n,
   following Fizz/Buzz/FizzBuzz rules. empty array if n < 1. */
function fizzBuzz(n) {
  let result = [];

  if (n < 1) {
    return result;
  }

  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }

  return result;
}


/* Define a function `getLetterFrequencies()` that returns an object
   counting character occurrences (case sensitive). */
function getLetterFrequencies(str) {
  let freq = {};

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (freq[ch] === undefined) {
      freq[ch] = 1;
    } else {
      freq[ch]++;
    }
  }

  return freq;
}


/* Create a variable `deck` — array of 52 card objects. */
let deck = [];
let suits = ["hearts", "diamonds", "clubs", "spades"];

for (let s = 0; s < suits.length; s++) {
  for (let rank = 2; rank <= 14; rank++) {
    deck.push({ suit: suits[s], rank: rank });
  }
}


/* Define `containsQueenOfHearts()` — return true if Q♥ present. */
function containsQueenOfHearts(hand) {
  for (let i = 0; i < hand.length; i++) {
    if (hand[i].rank === 12 && hand[i].suit === "hearts") {
      return true;
    }
  }
  return false;
}


/* Define `getHighCard()` — returns the card object with highest rank. */
function getHighCard(hand) {
  let high = hand[0];

  for (let i = 1; i < hand.length; i++) {
    if (hand[i].rank > high.rank) {
      high = hand[i];
    }
  }

  return high;
}


/* Define `isFlush()` — returns true if all suits match. */
function isFlush(hand) {
  if (hand.length === 0) return false;
  let firstSuit = hand[0].suit;

  for (let i = 1; i < hand.length; i++) {
    if (hand[i].suit !== firstSuit) {
      return false;
    }
  }

  return true;
}


//Make functions and variables available to tester. DO NOT MODIFY THIS.
if(typeof module !== 'undefined' && module.exports){
  /* eslint-disable */
  if(typeof addFour !== 'undefined') 
    module.exports.addFour = addFour;
  if(typeof twelveString !== 'undefined') 
    module.exports.twelveString = twelveString;
  if(typeof compoundInterest !== 'undefined') 
    module.exports.compoundInterest = compoundInterest;
  if(typeof fizzBuzz !== 'undefined') 
    module.exports.fizzBuzz = fizzBuzz;
  if(typeof getLetterFrequencies !== 'undefined')
    module.exports.getLetterFrequencies = getLetterFrequencies;
  if(typeof deck !== 'undefined')
    module.exports.deck = deck;
  if(typeof containsQueenOfHearts !== 'undefined')
    module.exports.containsQueenOfHearts = containsQueenOfHearts;
  if(typeof getHighCard !== 'undefined')
    module.exports.getHighCard = getHighCard;
  if(typeof isFlush !== 'undefined')
    module.exports.isFlush = isFlush;
}
