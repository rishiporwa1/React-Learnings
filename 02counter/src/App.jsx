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

  return(
    <>
    <button>View</button>
    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.naylors.com%2Fblog%2Fhorses-hot-weather-beat-the-heat&psig=AOvVaw1EybfI5Ga33WisBq2JKBCi&ust=1753294744978000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCLDWt4eK0Y4DFQAAAAAdAAAAABAE" alt="" />
    </>
  )
}

export default App 
export  {Build }
