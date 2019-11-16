import {
  ruleOneChecker,
  ruleTwoChecker,
  ruleThreeChecker,
  ruleFourChecker
} from "../rules";
test("Rule 1: Any live cell with fewer than two live neighbour dies.", () => {
  const liveCell = true;
  expect(ruleOneChecker(liveCell, 1)).toBe(true);
  expect(ruleOneChecker(liveCell, 0)).toBe(true);
  expect(ruleOneChecker(liveCell, 2)).toBe(false);
  expect(ruleOneChecker(liveCell, 3)).toBe(false);
  expect(ruleOneChecker(liveCell, 4)).toBe(false);
});

test("Rule 2: Any live cell with 2 or 3 live neighbours survives.", () => {
  const liveCell = true;
  expect(ruleTwoChecker(liveCell, 2)).toBe(true);
  expect(ruleTwoChecker(liveCell, 3)).toBe(true);
  expect(ruleTwoChecker(liveCell, 4)).toBe(false);
  expect(ruleTwoChecker(liveCell, 1)).toBe(false);
  expect(ruleTwoChecker(liveCell, 0)).toBe(false);
});

test("Rule 3: Any live cell with more than 3 live neighbours dies.", () => {
  const liveCell = true;
  expect(ruleThreeChecker(liveCell, 4)).toBe(true);
  expect(ruleThreeChecker(liveCell, 5)).toBe(true);
  expect(ruleThreeChecker(liveCell, 2)).toBe(false);
  expect(ruleThreeChecker(liveCell, 3)).toBe(false);
  expect(ruleThreeChecker(liveCell, 0)).toBe(false);
});

test("Rule 4: Any dead cell with 3 live neighbours becomes active.", () => {
  const deadCell = false;
  expect(ruleFourChecker(deadCell, 3)).toBe(true);
  expect(ruleFourChecker(deadCell, 5)).toBe(false);
  expect(ruleFourChecker(deadCell, 2)).toBe(false);
  expect(ruleFourChecker(deadCell, 0)).toBe(false);
});
