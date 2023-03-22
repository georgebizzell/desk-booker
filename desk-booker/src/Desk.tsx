import "./App.css";
import DeskLayout from "./DeskLayout";

const DeskIdArray: Array<Array<string>> = DeskLayout(6, 6);

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

  return (
    <div>
      <h4>Desk Booking</h4>
      <div className="grid-container">
        <div className="desk-columns">{DeskButtons}</div>
      </div>
    </div>
  );
}

export default Desk;
