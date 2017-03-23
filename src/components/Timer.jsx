import React from 'react'

const Timer = ({ currentTime, endTime }) =>
  <div>{ endTime !== null ? ((endTime - new Date()) / 1000.0).toFixed(2) : 'No time set' }</div>

export default Timer
