import './App.css'
import Interval from './components/intervalo'
import Media from './components/media'
import Soma from './components/soma'
import Sorteio from './components/sorteio'
import React, { useState } from 'react'

function App() {
  const [min, setMin] = useState(10)
  const [max, setMax] = useState(100)
  const onChangeMin = e => {
    setMin(parseInt(e.target.value))
  }
  const onChangeMax = e => {
    setMax(parseInt(e.target.value))
  }
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className="linha">
        <Interval
          min={min}
          max={max}
          onChangeMin={onChangeMin}
          onChangeMax={onChangeMax}
        />
      </div>
      <div className="linha">
        <Media min={min} max={max} />
        <Soma min={min} max={max} />
        <Sorteio min={min} max={max} />
      </div>
    </div>
  )
}

export default App
