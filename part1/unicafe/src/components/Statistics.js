import React from "react";

const Statistics = ({ good, neutral, bad }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    );
  }
  let all = good + neutral + bad;
  let average = (good * 1 + neutral * 0 + bad * -1) / all;
  let positive = (good * 100) / all;

  return (
    <>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>all: {all}</p>
      <p>average: {average}</p>
      <p>positive: {positive} %</p>
    </>
  );
};

export default Statistics;
