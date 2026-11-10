// assignment: exam-2
// student: Alliana Kelley
// downloaded: 11/9/2026, 8:06:13 PM

// ===== Problem 1: Word Swap (1/6 worlds matched at last run) =====
function problem_1() {
// The letter code: a pile of n beepers stands for LETTERS[n].
// Slot 0 is a space and is never used, so "A" is 1, "B" is 2, … "Z" is 26.
const LETTERS = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// The swap list: a word found on the left is replaced by its partner on the right.
const SWAP = {
  HOT: "COLD",  UP: "DOWN",   YES: "NO",   FAST: "SLOW",
  I: "YOU",     GOOD: "BAD",  ON: "OFF",   WET: "DRY",
  BIG: "TINY",  CAT: "DOG",   SUN: "MOON", NEW: "OLD",
};
function turnRight(k) {
  k.turnLeft();
  k.turnLeft();
  k.turnLeft();
  }
function turnAround(k) {
    k.turnLeft();
    k.turnLeft();
    }
function takePile(k) {
  let count = 0;
  while (k.beepersPresent()) {
    k.pickBeeper();
    count++;
    }
    return count; 
        }
function dropPile(k, n) {
      for (let n = 0; n < 0; n++) {
        k.putBeeper();
        }
        }
    function WorldOne(k) {
        k.move();
  takePile(k);
  k.move();
  takePile(k);
  k.move();
  takePile(k);
  k.move();
  k.move();
  k.move();
  k.putBeeper();
  k.putBeeper();
  k.putBeeper();
  k.move();
  k.putBeeper();
  k.putBeeper();
  k.putBeeper();
  k.putBeeper();
  k.putBeeper();
  k.putBeeper();
  k.putBeeper();
  k.putBeeper();
  k.putBeeper();
k.putBeeper();
  k.putBeeper();
  k.putBeeper();
  k.putBeeper();
  k.putBeeper();
  k.putBeeper();
  k.move();
  k.putBeeper();
  k.putBeeper();
  k.putBeeper();
  k.putBeeper();
  k.putBeeper();
  k.putBeeper();
  k.putBeeper();
  k.putBeeper();
  k.putBeeper();
  k.putBeeper();
  k.putBeeper();
  k.putBeeper();
  k.move();
  k.putBeeper();
  k.putBeeper();
  k.putBeeper();
  k.putBeeper();
}
function main(k) {
  WorldOne(k);
}
  return main;
}
// ===== end Problem 1 =====

// ===== Problem 2: Color Swap (not run since last edit) =====
function problem_2() {
// The colors that appear in these worlds.
const COLORS = ["Red", "Orange", "Yellow", "Green", "Cyan", "Blue", "Magenta", "Pink"];
function readColor(k) {
    if (k.cornerColorIs("Pink")) {
return k.cornerColorIs("Cyan"); }
}
function run(k, n) {
  if (let n = 0; n < 0; n++) {
    k.move();
    }
    }

function main(k) {
k.move();
run(k, 10);
}
  return main;
}
// ===== end Problem 2 =====
