import React from "react";

const Total = (props) => {
  return (
    <>
      <p>
        Number of excercises{" "}
        {props.parts[0].excercises + props.parts[1].excercises + props.parts[2].excercises}
      </p>
    </>
  );
};

export default Total;
