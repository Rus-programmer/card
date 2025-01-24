const COLUMN_CELLS = 9;
const ROW_CELLS = 3;
const COLUMN_NUMBERED_CELLS = 5;
const MAX_NUMBER = 90;

export function generateCard() {
  const card = [];
  const generatedNumbers = new Set();

  for (let row = 0; row < ROW_CELLS; row++) {
    const rows = Array.from({length: COLUMN_CELLS}, () => null);
    let columnLimitCounter = COLUMN_NUMBERED_CELLS;

    while (columnLimitCounter > 0) {
      const randomNumber = Math.ceil(Math.random() * MAX_NUMBER);
      if (generatedNumbers.has(randomNumber)) {
        continue;
      }

      const index = Math.floor((randomNumber === MAX_NUMBER ? randomNumber - 1 : randomNumber) / 10);
      const value = rows[index];
      if (!value) {
        generatedNumbers.add(randomNumber);
        rows[index] = randomNumber;
        columnLimitCounter--;
      }
    }

    card.push(rows);
  }

  return card;
}

// [
//   [null, null, 28, null, 41, 55, null, 70, 82],
//   [8, 14, null, null, 46, null, 62, 79, null],
//   [6, null, 20, 39, null, null, 65, null, 90]
// ]