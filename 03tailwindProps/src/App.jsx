// import { useState } from 'react'
import './App.css'
import Cards from './components/card'
import BuyFace from './components/buyface'

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
      <BuyFace face="https://images.pexels.com/photos/18581950/pexels-photo-18581950.jpeg" name="Zoro" price="1 Billion Berries"/>
      <BuyFace />
    </>
  )
}

export default App
