/**
 * Documenter : Jithendiran
 * Date       : 28-10-2021
 */

test('two plus two is four', () => { expect(2 + 2).toBe(4); });

// toBe uses Object.is to test exact equality. If you want to check the value of an object, use toEqual instead:

test('object assignment', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

//toEqual recursively checks every field of an object or array.

test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(10);
    }
  }
});

/*
o/p
 FAIL  ./basics.test.js
  ✓ two plus two is four (2 ms)
  ✓ object assignment
  ✕ adding positive numbers is not zero (1 ms)

  ● adding positive numbers is not zero

    expect(received).not.toBe(expected) // Object.is equality

    Expected: not 10

      19 |   for (let a = 1; a < 10; a++) {
      20 |     for (let b = 1; b < 10; b++) {
    > 21 |       expect(a + b).not.toBe(10);
         |                         ^
      22 |     }
      23 |   }
      24 | });

      at Object.<anonymous> (basics.test.js:21:25)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |       0 |        0 |       0 |       0 |
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 failed, 1 total
Tests:       1 failed, 2 passed, 3 total
Snapshots:   0 total
Time:        0.386 s, estimated 1 s
Ran all test suites.
npm ERR! Test failed.  See above for more details.
 */

/**
*  toBeNull matches only null
*  toBeUndefined matches only undefined
*  toBeTruthy matches anything that an if statement treats as true
*  toBeDefined is the opposite of toBeUndefined
*  toBeFalsy matches anything that an if statement treats as false
*/

//Numbers
//Most ways of comparing numbers have matcher equivalents.

test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

//For floating point equality, use toBeCloseTo instead of toEqual, because you don't want a test to depend on a tiny rounding error.

test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);           //This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); // This works.
});

//Strings
//You can check strings against regular expressions with toMatch:

test('there is no I in team', () => {
  expect('team').not.toMatch(/India/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
  expect('jidesh').toMatch(/Ji/)
});
/*
● but there is a "stop" in Christoph

    expect(received).toMatch(expected)

    Expected pattern: /Ji/
    Received string:  "jidesh"

      100 | test('but there is a "stop" in Christoph', () => {
      101 |   expect('Christoph').toMatch(/stop/);
    > 102 |   expect('jidesh').toMatch(/Ji/)
          |                    ^
      103 | });
      104 |
      105 | //Arrays and iterables

      at Object.<anonymous> (basics.test.js:102:20)

*/
//Arrays and iterables
//You can check if an array or iterable contains a particular item using toContain:

const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];

test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk');
});

//Exceptions

//If you want to test whether a particular function throws an error when it's called, use toThrow.
function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);
  expect(compileAndroidCode()).toThrow();// why it cause error

  // You can also use the exact error message or a regexp
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});