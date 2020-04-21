import React from "react";

const Total = (props) => {
  return (
    <>
      <p>
        Number of excercises{" "}
        {props.course.parts[0].excercises + props.course.parts[1].excercises + props.course.parts[2].excercises}
      </p>
    </>
  );
};

export default Total;
