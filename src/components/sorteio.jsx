import React from 'react'
import Card from './Card'

const Sorteio = props => {
  const { min, max } = props
  const random = parseInt(Math.random() * (max - min) + min)

  return (
    <Card title="Sorteio de Números" purple>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{random}</strong>
        </span>
      </div>
    </Card>
  )
}

export default Sorteio
