import "./App.css";
import DeskLayout from "./DeskLayout";

const DeskIdArray: Array<Array<string>> = DeskLayout(6, 6);

console.log(DeskIdArray);

console.log(DeskIdArray);

function Desk() {
  const DeskButtons = DeskIdArray.map((DeskColumn: string[], index: number) => {
    const Desks = DeskColumn.map((Desk: string, i: number) => {
      return (
        <button key={`${index}-${i}`} type="button" className="btn btn-primary">
          {Desk}
        </button>
      );
    });

    return (
      <div key={index} className="desk-column">
        {Desks}
      </div>
    );
  });

  const DeskBanks: React.ReactElement[] = DeskButtons.reduce(
    (acc: React.ReactElement[][], curr: React.ReactElement, i: number) => {
      if (i % 2 === 0) {
        acc.push([curr]);
      } else {
        acc[acc.length - 1].push(curr);
      }
      return acc;
    },
    []
  ).map((columns: React.ReactElement[], i: number) => (
    <div key={i} className="desk-bank">
      {columns}
    </div>
  ));

  return (
    <div>
      <h4>Desk Booking</h4>
      <div className="grid-container">{DeskBanks}</div>
    </div>
  );
}

export default Desk;
