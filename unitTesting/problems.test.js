const biggestAmong = require('../Problem/biggestAmong3')

test("Greatest Among 3 numbers", () => {
  expect(biggestAmong(1, 2, 3)).toBe("c is bigger");
  expect(biggestAmong(3, 1, 2)).toBe("a is bigger");
  expect(biggestAmong(1, 3, 2)).toBe("b is bigger");
  expect(biggestAmong(2, 2, 3)).toBe("c is bigger");
  expect(biggestAmong(1, 3, 3)).toBe("c is bigger");
});

/*
O/p
 PASS  ./problems.test.js
  ✓ Greatest Among 3 numbers (6 ms)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |       0 |        0 |       0 |       0 |                   
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.685 s, estimated 1 s
Ran all test suites matching /problems.test.js/i.
*/


const getSentenceValue = require('../Problem/getSentenceValue')
test("Get Sentence Value", () => {
  expect(getSentenceValue("abc ABC Abc")).toEqual(24);
  expect(getSentenceValue("HELLO world")).toEqual(176);
  expect(getSentenceValue("Edabit is LEGENDARY")).toEqual(251);
  expect(getSentenceValue("Her seaside sea-shelling business is really booming!")).toEqual(488);
  expect(getSentenceValue("abc& ABC#")).toEqual(18);
});

/*
 PASS  ./problems.test.js
  ✓ Greatest Among 3 numbers (6 ms)
  ✓ Get Sentence Value (2 ms)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |       0 |        0 |       0 |       0 |                   
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        0.747 s, estimated 1 s
Ran all test suites matching /problems.test.js/i.
*/

const isPositiveDominant = require('../Problem/isPositiveDominant')
test("Is Positive Dominant", () => {
  expect(isPositiveDominant([1, 1, 1, 1, -3, -4])).toBeFalsy();
  expect(isPositiveDominant([5, 99, 832, -3, -4])).toBeTruthy();
  expect(isPositiveDominant([5, 0])).toBeTruthy();
  expect(isPositiveDominant([0, -4, -1])).toBeFalsy();
  expect(isPositiveDominant([0, 0, 0])).toBeTruthy();
});

/*
 PASS  ./problems.test.js
  ✓ Greatest Among 3 numbers (4 ms)
  ✓ Get Sentence Value (3 ms)
  ✓ Get Sentence Value (3 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        0.716 s, estimated 1 s
Ran all test suites matching /problems.test.js/i.
*/

const isAnyPalindrome = require('../Problem/palindrome')
test("is palindrome", () => {
  ['Liril', 'Malayalam'].forEach(i => expect(isAnyPalindrome("Liril speaks Malayalam")).toContain(i)),
    expect(isAnyPalindrome("ji hello ij")).not.toContain(""),
    ['haH', 'mam'].forEach(i => expect(isAnyPalindrome("hello mam haH")).toContain(i)),
    ['abcdcba', 'uu'].forEach(i => expect(isAnyPalindrome("abcdcba uu")).toContain(i)),
    expect(isAnyPalindrome("tyu iyf")).not.toContain("");
});

/*

 PASS  ./problems.test.js
  ✓ Greatest Among 3 numbers (6 ms)
  ✓ Get Sentence Value (4 ms)
  ✓ Is Positive Dominant (2 ms)
  ✓ is palindrome (4 ms)

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        0.598 s, estimated 1 s
Ran all test suites matching /problems.test.js/i.
 */