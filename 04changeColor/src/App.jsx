import { useState } from 'react'
import './App.css'
import Button from './components/button';

function App() {
      const [color, setColor] = useState("White")
      
      return (
          <>
            <div className='w-full h-screen flex items-center justify-center' style={{ backgroundColor: color }}>  
              <div className='fixed flex flex-wrap justify-center top-12 inset-x-0 px-2'>
                <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded'>
                  <Button Clr={'Megenta'} smallcase={'magenta'} setColor={setColor} />
                  <Button Clr={'Red'} smallcase={'red'} setColor={setColor} />
                  <Button Clr={'Green'} smallcase={'green'} setColor={setColor} />
                  <Button Clr={'Blue'} smallcase={'blue'} setColor={setColor} />
                  <Button Clr={'Yellow'} smallcase={'yellow'} setColor={setColor} />
                  <Button Clr={'Black'} smallcase={'black'} setColor={setColor} />
                  <Button Clr={'White'} smallcase={'white'} setColor={setColor} />
                  <Button Clr={'Orange'} smallcase={'orange'} setColor={setColor} />
                  <Button Clr={'Purple'} smallcase={'purple'} setColor={setColor} />
                  <Button Clr={'Pink'} smallcase={'pink'} setColor={setColor} />
                  <Button Clr={'Teal'} smallcase={'teal'} setColor={setColor} />
                  <Button Clr={'Olive'} smallcase={'olive'} setColor={setColor} />
                  <Button Clr={'Gray'} smallcase={'gray'} setColor={setColor} />
                  <Button Clr={'Lavender'} smallcase={'lavender'} setColor={setColor} />

                </div>
              </div>
            </div>
          </>
      )
}

export default App
