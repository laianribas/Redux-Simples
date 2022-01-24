import React from 'react'
import Card from './Card'
import './intervalo.css'

const Interval = props => {
  return (
    <Card title="Intervalo de Números" red>
      <div className="Intervalo">
        <span>
          <strong>Mínimo:</strong>
          <input type="number" value={0} />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input type="number" value={10} />
        </span>
      </div>
    </Card>
  )
}

export default Interval
