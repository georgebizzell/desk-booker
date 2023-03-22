function DeskLayout(numberOfColumns: number, numberOfRows: number) {
  const alpha = [...Array(26).keys()].map((x) => x + 65);

  const alphabet = alpha.map((x) => String.fromCharCode(x));

  const reverseAlphabet = alphabet.reverse();

  console.log(reverseAlphabet);

  const DeskLetters = reverseAlphabet.slice(
    reverseAlphabet.length - numberOfColumns,
    reverseAlphabet.length
  );

  const DeskNames = [];

  for (let i = numberOfRows; i > 0; i--) {

    const row = DeskLetters.map((letter) => letter + i);
    
    DeskNames.push(row);
  }
  console.log(DeskNames);

  return DeskNames;
}

export default DeskLayout;
