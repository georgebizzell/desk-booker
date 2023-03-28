import React from "react";
import "./App.css";
import DeskButton from "./DeskButton";
import DeskLayout from "./DeskIds";

const DeskRows = 6;

const DeskColumns = 6;

const DeskIdArray: Array<Array<string>> = DeskLayout(
  DeskRows,
  DeskColumns,
  false
);

console.log(DeskIdArray);

console.log(DeskIdArray);

function Desk() {
  const DeskButtons = DeskIdArray.map((DeskColumn: string[], index: number) => {
    const Desks = DeskColumn.map((Desk: string, i: number) => {
      return (
        <React.Fragment key={`${index}-${i}`}>
          <DeskButton>{Desk}</DeskButton>
        </React.Fragment>
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
