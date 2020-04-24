import React from "react";
import Statistic from "./Statistic";

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
  positive = positive + " %";

  return (
    <table>
      <tbody>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={all} />
        <Statistic text="average" value={average} />
        <Statistic text="positive" value={positive} />
      </tbody>
    </table>
  );
};

export default Statistics;
