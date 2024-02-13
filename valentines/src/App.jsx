import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  const [isValentine, setIsValentine] = useState(false);
  const [position, setPosition] = useState({x: innerWidth/50, y: innerHeight/50});

  const handleHover = () => {
    const randX = Math.random()*(window.innerWidth - 100);
    const randY = Math.random()*(window.innerHeight - 100);

    setPosition({x: randX, y: randY});
  }
  const handleClick = () => {
    setIsValentine(true)
  }

  return (
    <div className='page-wrapper'>
      {!isValentine &&
        <div className='ask-wrapper'>
        <h1>Will u be my valentine :&gt;</h1>
        <button onClick={handleClick} className='yes-btn'>Yes :&gt;</button>
        <button style={{position: 'absolute', top: position.y, left: position.x}}onMouseOver={handleHover} className='no-btn'>No :&lt;</button>
        </div>
      }
      {isValentine &&
        <div className='yes-wrapper'>
          <h1>I knew it... u simp</h1>
          <h3>just kidding &lt;3 I love you more than anything Godfrey</h3>
          <p>please be my valentine for the rest of our lives thank you &lt;3 thank you for being the most wonderful person in the world and for making my year so much better. i wouldnt have ever been able to make and send you this silly little website without your support and your love. im so in love with you and i cant wait to spend my whole life with you</p>

        </div>
        
      }
    </div>

  )
}

export default App
