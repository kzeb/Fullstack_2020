import React from "react";

const Total = (props) => {
  return (
    <>
      <p>
        Number of excercises{" "}
        {props.part1.excercises + props.part2.excercises + props.part3.excercises}
      </p>
    </>
  );
};

export default Total;
