import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let count = 15;
  let [count, setCount] = useState(0)

  const addVal = () => {
    // if( count < 20)
    //    setCount(count + 1)

    setCount((prevCounter) => prevCounter + 1)
    setCount((prevCounter) => prevCounter + 1)
    setCount((prevCounter) => prevCounter + 1)
    setCount((prevCounter) => prevCounter + 1)
    setCount((prevCounter) => prevCounter + 1)
  }

  const subVal = () => {
    if(count > 0)
    setCount(count - 1)
  }
  return (
    <>
    <h1>My Counter </h1>
    <h2>Value of Counter : {count}</h2>
    <button onClick = {addVal}>Add </button>
    <button onClick = {subVal}>Sub </button>

    </>
  )
}

export default App
