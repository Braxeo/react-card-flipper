import "./styles.css";
import { useState } from "react";

const cards = [
  {
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    question: "What are the building bloks of React apps?",
    answer: "Components",
  },
  {
    question:
      "What's the name of the syntax we use to describe the UI in React?",
    answer: "Declarative",
  },
  {
    question: "How to pass data from the parent to child components?",
    answer: "Props",
  },
  {
    question: "How do we update the UI?",
    answer: "useState hook",
  },
  {
    question:
      "What do we call an input element that is completely syncronised with state?",
    answer: "Controlled Element",
  },
];

export default function App() {
  return (
    <div className="App">
      {cards.map((card, i) => (
        <Card cardObj={card} key={i} />
      ))}
    </div>
  );
}

function Card({ cardObj }) {
  const [flipped, setFlipped] = useState(cardObj.flipped === true);

  const value = flipped ? cardObj.answer : cardObj.question;
  const backgroundColor = flipped ? "red" : "lightgrey";
  const textColor = flipped ? "black" : "white";

  return (
    <div
      className="card"
      style={{ backgroundColor: `${backgroundColor}` }}
      onClick={() => setFlipped((flip) => !flip)}
    >
      <p style={{ textColor: { textColor } }}>{value}</p>
    </div>
  );
}
