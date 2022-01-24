import './App.css'
import Interval from './components/intervalo'
import Media from './components/media'
import Soma from './components/soma'
import Sorteio from './components/sorteio'
import React from 'react'

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className="linha">
        <Interval />
      </div>
      <div className="linha">
        <Media />
        <Soma />
        <Sorteio />
      </div>
    </div>
  )
}

export default App
