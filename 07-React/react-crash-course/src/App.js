import './App.css';
import { useState, useEffect } from 'react';

// Create a second component using props
const Person = (props) => {
  return (
    <>
      <h1>First Name: {props.fname}</h1>
      <h2>Last Name: {props.lname}</h2>
      <h3>Age: {props.age}</h3>
    </>
  )
}


const App = () => {
  const name = "Luffy";
  const [counter, setCounter] = useState(0);

  useEffect(() => alert("Page reloaded"), [])
  return (
    <div className='App'>
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{ counter }</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>

    </div>
  )

  /* 
  Component demo
  */
  // return (
  //   <div className="App">
  //     <h1>Hello, {name}! Here are your real family details</h1>
  //     <Person fname="Ramesh" lname="Kayampurath" age="60" />
  //     <Person fname="Ajitha" lname="Ramesh" age="53" />
  //     <Person fname="Rishil" lname="Ramesh" age="28" />
  //     <Person fname="Ashwin" lname="Ramesh" age="23" />
  //   </div>
  // );
}

export default App;
