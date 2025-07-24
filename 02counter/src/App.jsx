import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let addcount = () => {
    setCount(count+1)
  }
  let removecount = () => {
    if (count > 0) {
      setCount(count-1)
    }
  }
  
  
  return (
    <>
      <h1> Code Pirate {count} </h1>
      <button onClick={addcount}>Count {count}</button>
      <br />
      <button onClick={removecount}> Remove </button>
    </>
  )
}

function Build() {
  // const [coun, setCoun] = useState(0)
  let vary = () => {
    // setCoun(coun+1)
    console.log("Button clicked")
    }

  return(
    <>
    <button onClick={vary}>View</button>
      <img src="https://images.pexels.com/photos/33039009/pexels-photo-33039009.jpeg" alt="" />
    </>
  )
}

export default App 
export  {Build }
