import React from 'react'

import Timer from './Timer'
import Configuration from './Configuration'
import Status from './Status'

const Tabata = ({ rounds, currentRound, currentTime, endTime, roundEnd, configurationChange, startTimer, stopTimer }) =>
  <div>
    <Status currentRound={rounds[currentRound]} />
    <Timer currentTime={currentTime} endTime={endTime} endRound={roundEnd} />
    <Configuration configurationChange={configurationChange} startFunc={startTimer} stopFunc={stopTimer} />
  </div>

export default Tabata
