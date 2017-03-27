import React, { Component } from 'react'

import Timer from './Timer'
import Configuration from './Configuration'
import Status from './Status'

class Tabata extends Component {
  constructor (props) {
    super(props)
    this.state = {
      configuration: {
        activeSeconds: 20,
        restSeconds: 10,
        numberOfRounds: 5
      },
      currentTime: null,
      endTime: null,
      currentRound: 0,
      rounds: [{ round: 0 }]
    }

    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.configurationChange = this.configurationChange.bind(this)
    this.timerUpdate = this.timerUpdate.bind(this)
    this.roundEnd = this.roundEnd.bind(this)
  }

  startTimer () {
    let rounds = this.state.rounds

    for (let i = 1; i <= this.state.configuration.numberOfRounds; i++) {
      rounds.push({ status: 'Go!', duration: this.state.configuration.activeSeconds, round: i })
      rounds.push({ status: 'Rest', duration: this.state.configuration.restSeconds, round: i })
    }

    this.setState({ endTime: new Date().getTime() + (this.state.configuration.activeSeconds * 1000), currentRound: 1, rounds })
    this.intervalId = setInterval(this.timerUpdate, 10)
  }

  stopTimer () {
    clearInterval(this.intervalId)
    this.setState({ currentTime: null, endTime: null, currentRound: 0, rounds: [{ round: 0 }] })
  }

  roundEnd () {
    if (this.state.currentRound >= this.state.rounds.length - 1) {
      this.stopTimer()
    } else {
      let nextRound = this.state.rounds[this.state.currentRound + 1]
      this.setState({ endTime: new Date().getTime() + (nextRound.duration * 1000), currentRound: this.state.currentRound + 1 })
    }
  }

  configurationChange (event) {
    let newState = Object.assign({}, this.state.configuration)
    newState[event.target.id] = event.target.value
    this.setState({ configuration: newState })
  }

  timerUpdate () {
    this.setState({ currentTime: new Date() })
  }

  render () {
    return (
      <div>
        <Status currentRound={this.state.rounds[this.state.currentRound]} />
        <Timer currentTime={this.state.currentTime} endTime={this.state.endTime} endRound={this.roundEnd} />
        <Configuration configurationChange={this.configurationChange} startFunc={this.startTimer} stopFunc={this.stopTimer} />
      </div>
    )
  }
}

export default Tabata
