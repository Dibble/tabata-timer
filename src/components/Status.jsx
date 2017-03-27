import React from 'react'

const Status = ({ currentRound }) =>
  <div>
    <div>Status: {typeof currentRound !== 'undefined' ? currentRound.status || 'Stopped' : 'Stopped'}</div>
    <div>Round: {typeof currentRound !== 'undefined' ? currentRound.round || '0' : '0'}</div>
  </div>

export default Status
