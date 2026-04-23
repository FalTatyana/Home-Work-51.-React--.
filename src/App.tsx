import Circle from "./Circle.tsx"
import './App.css'
import { useState } from "react"

interface Circle {
  num: number;
}

const App = () => {
  const [numbers, setNumbers] = useState<Circle[]>([
    { num: 5 },
    { num: 11 },
    { num: 16 },
    { num: 23 },
    { num: 32 },
  ]);

  const changeNumbers = () => {
    const newNumbers: Circle[] = [];

    while (newNumbers.length < 5) {
      const random = Math.floor(Math.random() * 36) + 1;

      if (!newNumbers.some(n => n.num === random)) {
        newNumbers.push({ num: random });
      }
    }

    newNumbers.sort((a, b) => a.num - b.num);

    setNumbers(newNumbers);
  };

  return (
    <div className="wrapper">

      <button className="btn" onClick={changeNumbers}>Get new numbers</button>
      <div className="numbers">
        <Circle num={numbers[0].num}>
        </Circle>
        <Circle num={numbers[1].num}>
        </Circle>
        <Circle num={numbers[2].num}>
        </Circle>
        <Circle num={numbers[3].num}>
        </Circle>
        <Circle num={numbers[4].num}>
        </Circle>
      </div>
    </div>
  )
};

export default App
