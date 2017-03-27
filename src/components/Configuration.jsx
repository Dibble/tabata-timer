import React from 'react'

const Configuration = ({ configurationChange, startFunc, stopFunc }) =>
  <div>
    <form onChange={configurationChange}>
      <input id='activeSeconds' type='number' defaultValue='20' />
      <input id='restSeconds' type='number' defaultValue='10' />
      <input id='numberOfRounds' type='number' defaultValue='5' />
    </form>
    <button type='button' onClick={startFunc}>Start</button>
    <button type='button' onClick={stopFunc}>Stop</button>
  </div>

export default Configuration
