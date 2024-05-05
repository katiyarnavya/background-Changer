import { useState } from 'react'
import './App.css'


function App() {
  const [color, setColor] = useState('olive');
  const changetoRed = () => {
      setColor("red")
  }
  const changetoPink = () => {
    setColor("pink")
  }
  const changetoOrange = () => {
    setColor("orange")
  }
  const changetoYellow = () => {
    setColor("yellow")
  }
  const changetoGreen = () => {
    setColor("green")
  }
  const changetoBlue = () => {
    setColor("blue")
  }
  const changetoPurple = () => {
    setColor("purple")
  }
  const changetoLavender = () => {
    setColor("lavender")
  }
  

  return (
    <div className= "w-full h-screen" style = {{backgroundColor: color}}>
      <button className='bg-red-400 text-black p-4 rounded-xl' onClick={changetoRed}>Red</button>
      <button className='bg-pink-400 text-black p-4 rounded-xl' onClick={changetoPink}>Pink</button>
      <button className='bg-orange-400 text-black p-4 rounded-xl' onClick={changetoOrange}>Orange</button>
      <button className='bg-yellow-400 text-black p-4 rounded-xl' onClick={changetoYellow}>Yellow</button>
      <button className='bg-green-400 text-black p-4 rounded-xl' onClick={changetoGreen}>Green</button>
      <button className='bg-blue-400 text-black p-4 rounded-xl' onClick={changetoBlue}>Blue</button>
      <button className='bg-purple-400 text-black p-4 rounded-xl'onClick={changetoPurple}>Purple</button>
      <button className='bg-lavender-400 text-black p-4 rounded-xl' onClick={changetoLavender}>lavender</button>
      </div>
  )
}

export default App
