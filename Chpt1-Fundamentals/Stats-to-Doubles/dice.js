// Statistics to Doubles
// Implement a ‘die’ that randomly returns an integer between 1 and 6 inclusive. Roll a pair of these dice, tracking the statistics until doubles are rolled. Display the ​number of rolls​,​min,​ ​max,​ and ​average​.

function rollDice() {  //creates a function that rolls dice
  return Math.floor(Math.random() * 6) + 1; //returns a random, rounded down for every dice roll `(1-6)
}

function rollDicePair() { //takes one dice function and doubles it 
  return [rollDice(), rollDice()];
}

function simulateRolls() { 
  let rolls = 0; //creates counters for rolls, sum, min, max
  let sum = 0;
  let min = 12;
  let max = 1;

  while (true) {
    const [die1, die2] = rollDicePair();
    rolls++;
    sum += die1 + die2;
    min = Math.min(min, die1 + die2);
    max = Math.max(max, die1 + die2);

    if (die1 === die2) {
      const average = sum / rolls;
      console.log('Number of rolls:', average.toFixed(2));
      break;
    }
  }
}

simulateRolls();
