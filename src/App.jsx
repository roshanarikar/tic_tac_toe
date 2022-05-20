import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Game } from './components/game'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h2>Tic Tac Toe</h2>
      <Game/>
    </div>
  )
}

export default App
