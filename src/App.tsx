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
    setNumbers([
      { num: Math.floor(Math.random() * 37) },
      { num: Math.floor(Math.random() * 37) },
      { num: Math.floor(Math.random() * 37) },
      { num: Math.floor(Math.random() * 37) },
      { num: Math.floor(Math.random() * 37) }
    ]
    );
  };

  return (
    <>
      <button onClick={changeNumbers}>Get new numbers</button>
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
    </>
  )
};

export default App
