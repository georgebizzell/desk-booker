function DeskLayout(
  numberOfColumns: number,
  numberOfRows: number,
  letterDirection: boolean
) {
  const alpha = [...Array(26).keys()].map((x) => x + 65);

  const alphabet = alpha.map((x) => String.fromCharCode(x));

  const reverseAlphabet = alphabet.reverse();

  console.log(reverseAlphabet);

  const DeskLetters = letterDirection
    ? alphabet.slice(numberOfColumns * -1)
    : reverseAlphabet.slice(numberOfColumns * -1);

  const DeskNames = [];

  for (let i = 0; i < numberOfColumns; i++) {
    const letter = DeskLetters[i];
    const column = [];

    for (let j = numberOfRows; j > 0; j--) {
      column.push(`${letter}${j}`);
    }

    DeskNames.push(column);
  }

  return DeskNames;
}

export default DeskLayout;
