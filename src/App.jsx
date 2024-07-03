import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calculator from './Components/Calculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      {/* <h2>Sample calculator in readux.</h2> */}
      <Calculator/>
    </div>
  )
}

export default App
