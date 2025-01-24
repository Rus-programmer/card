const ROW_CELLS = 9;
const COLUMN_CELLS = 3;
const ROW_NUMBERED_CELLS = 5;

export function generateCard() {
  const card = [];
  const generatedNumbers = new Set();

  for (let i = 0; i < COLUMN_CELLS; i++) {
    const rows = Array.from({length: ROW_CELLS}, () => null);
    let numberCounter = ROW_NUMBERED_CELLS;

    while (numberCounter > 0) {
      const randomNumber = Math.ceil(Math.random() * 90);
      if (generatedNumbers.has(randomNumber)) {
        continue;
      }

      generatedNumbers.add(randomNumber);
      const index = Math.floor(Math.random() * ROW_CELLS);

      const value = rows[index];
      if (!value) {
        rows[index] = randomNumber;
        numberCounter--;
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