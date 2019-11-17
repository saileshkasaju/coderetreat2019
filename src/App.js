import React, { useState } from "react";
import { getAliveNeighbourCount } from "./utils";
import {
  ruleOneChecker,
  ruleTwoChecker,
  ruleThreeChecker,
  ruleFourChecker
} from "./rules";

let initialBoard = [
  [false, false, false, false, false],
  [false, false, true, true, true],
  [false, true, true, true, false],
  [false, false, false, false, false],
  [false, false, false, false, false]
];

export default function App() {
  const [board, setBoard] = useState(initialBoard);
  const [day, setDay] = useState(0);
  const nextGame = () => {
    // logic for next board
    const newBoard = board.map((rowArr, rowIndex) =>
      rowArr.map((boxValue, columnIndex) => {
        const numberOfAliveNeighbours = getAliveNeighbourCount(
          rowIndex,
          columnIndex,
          board
        );

        if (ruleOneChecker(boxValue, numberOfAliveNeighbours)) {
          return false;
        }
        if (ruleTwoChecker(boxValue, numberOfAliveNeighbours)) {
          return true;
        }
        if (ruleThreeChecker(boxValue, numberOfAliveNeighbours)) {
          return false;
        }
        if (ruleFourChecker(boxValue, numberOfAliveNeighbours)) {
          return true;
        }
        return boxValue;
      })
    );
    setBoard(newBoard);
    setDay(day + 1);
  };
  return (
    <div>
      <header>
        <h1>Conway's Game of Life: Day {day}</h1>
        <button onClick={nextGame}>Next day</button>
      </header>
      <table>
        <tbody>
          {board.map((rowArr, rowIndex) => (
            <tr key={`row-${rowIndex}`}>
              {rowArr.map((boxValue, rowIndex) => (
                <td
                  key={`column-${rowIndex}`}
                  style={{
                    background: boxValue ? "black" : "white",
                    width: 20,
                    height: 20
                  }}
                ></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
