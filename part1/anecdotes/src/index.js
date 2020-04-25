import React, { useState } from "react";
import ReactDOM from "react-dom";
import Button from "./components/Button";

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(
    Array.apply(null, new Array(6)).map(Number.prototype.valueOf, 0)
  );

  const max = points.indexOf(Math.max(...points));

  const handleVoteClick = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
  };

  const handleRandomClick = () => {
    setSelected(Math.floor(Math.random() * 6));
  };

  return (
    <>
      <h2>Anecdote of the day</h2>
      <div>{props.anecdotes[selected]}</div>
      <p>has {points[selected]} votes</p>
      <Button handleClick={handleVoteClick} text="vote" />
      <Button handleClick={handleRandomClick} text="next anecdote" />
      <h2>Anecdote with most votes</h2>
      <div>{props.anecdotes[max]}</div>
      <p>has {points[max]} votes</p>
    </>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
