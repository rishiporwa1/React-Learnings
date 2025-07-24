import { useState } from 'react'
import './App.css'
import Cards from './components/card'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <button className='p-4 mb-3 justify-self-center rounded'>
        <h1 className='text-black items-center '>Code Pirate</h1>
      </button>
      <div className="relative grid grid-cols-3 gap-20">
          <Cards username = "JoyBoy" nickname = "PirateWithStrawHat"/>
          <Cards username = "Edward" nickname = "WhiteBeardPirates"/>
          <Cards username = "Shanks" nickname = "RedHairedPirates"/>
      </div>
    </>
  )
}

export default App
