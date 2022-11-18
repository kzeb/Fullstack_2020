import React, { useState } from "react";
import ReactDOM from "react-dom";
import Course from "./components/Course";

const App = () => {
  const coursesArray = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];
  const [courses, setCourses] = useState(coursesArray);
  const [newCourse, setNewCourse] = useState("a new course...");
  const [showAll, setShowAll] = useState(true);

  const addCourse = (event) => {
    event.preventDefault();
    const courseObject = {
      name: newCourse,
      id: courses.length + 1,
      parts: [],
    };

    setCourses(courses.concat(courseObject));
    setNewCourse("");
    // console.log("button clicked", event.target);
  };

  const handleCourseChange = (event) => {
    console.log(event.target.value);
    setNewCourse(event.target.value);
  };

  const coursesToShow = showAll
    ? courses
    : courses.filter((course) => course.name === "test");

  return (
    <div>
      <h1>Courses</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "test" : "all"}
        </button>
      </div>
      <ul>
        {coursesToShow.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </ul>
      <form onSubmit={addCourse}>
        <input value={newCourse} onChange={handleCourseChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
