import React from 'react'

const Configuration = ({ configurationChange, startFunc, stopFunc }) =>
  <div>
    <form onChange={configurationChange}>
      <input id='seconds' type='number' placeholder='20' />
    </form>
    <button type='button' onClick={startFunc}>Start</button>
    <button type='button' onClick={stopFunc}>Stop</button>
  </div>

export default Configuration
