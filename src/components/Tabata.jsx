import React from 'react'

import Timer from './Timer'
import Configuration from './Configuration'
import Status from './Status'

const Tabata = ({ rounds, currentRound, currentTime, endTime, roundEnd, configurationChange, startTimer, stopTimer }) =>
  <div>
    <Status currentRound={this.state.rounds[this.state.currentRound]} />
    <Timer currentTime={this.state.currentTime} endTime={this.state.endTime} endRound={this.roundEnd} />
    <Configuration configurationChange={this.configurationChange} startFunc={this.startTimer} stopFunc={this.stopTimer} />
  </div>

export default Tabata
