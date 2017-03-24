import React, { Component } from 'react'

import Timer from './Timer'
import Configuration from './Configuration'

class Tabata extends Component {
  constructor (props) {
    super(props)
    this.state = { configuration: { seconds: 20 }, currentTime: null, endTime: null }

    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.configurationChange = this.configurationChange.bind(this)
    this.timerUpdate = this.timerUpdate.bind(this)
  }

  startTimer () {
    this.setState({ endTime: new Date().getTime() + (this.state.configuration.seconds * 1000) })
    this.intervalId = setInterval(this.timerUpdate, 1)
  }

  stopTimer () {
    clearInterval(this.intervalId)
    this.setState({ currentTime: null, endTime: null })
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
        <Timer currentTime={this.state.currentTime} endTime={this.state.endTime} />
        <Configuration configurationChange={this.configurationChange} startFunc={this.startTimer} stopFunc={this.stopTimer} />
      </div>
    )
  }
}

export default Tabata
