import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Buttons } from './components/Buttons'
import { buttonList } from './assets/buttonlist'

function App() {
  //console.log(buttonList)
  const [display, setDisplay] = useState('0')

  return (
    <div className="app">
      <div
      className='grid-item'
      >
        <div
        id='display'
        className='display'
        >
          {display}
        </div>
        {buttonList.map((button) => (
          <Buttons
          key={button.id}
          buttonInfo={button}
          buttonClass='buttonNumber'
          />
        ))}
      </div>
    </div>
  )
}


export default App
