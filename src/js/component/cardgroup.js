import React from 'react'
import { Card } from './card'

export const Cardgroup = () => {
  return (
    <div className='container'>
    <div className='card-group'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
    </div>
    </div>
  )
}
