
const Parts = ({course})=>{
  const sum = course.parts.reduce(
  (accumulator, currentValue) => accumulator + currentValue.exercises,
  0,);

  return (
    <>
    {course.parts.map((part)=>(
        <>
      <p key={part.id}>{part.name}</p>
       </>
    ))}
    <h2>Total of {sum} exercises</h2>

</>
  )
}

const Course = ({ courses }) => {
  

  return (
  <div>

   {courses.map((course)=>(
        <>
        <h1 key={course.id}>{course.name}</h1>
        <Parts course={course} />
        </>

   ))}
     
  </div>
  )
}

const App = () => {
  const courses = [
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

  return (
    <div>
      <Course courses={courses} />
    </div>
  );
};
export default App;
