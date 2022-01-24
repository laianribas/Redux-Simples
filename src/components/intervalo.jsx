import React from 'react'
import Card from './Card'
import './intervalo.css'

const Interval = props => {
  const { min, max } = props
  return (
    <Card title="Intervalo de Números" red>
      <div className="Intervalo">
        <span>
          <strong>Mínimo:</strong>
          <input
            type="number"
            max={max}
            value={min}
            onChange={props.onChangeMin}
          />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input
            type="number"
            min={min}
            value={max}
            onChange={props.onChangeMax}
          />
        </span>
      </div>
    </Card>
  )
}

export default Interval
