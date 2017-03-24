import React, { Component } from 'react'

const padStart = (number, length) => {
  let paddedNumber = number + ''

  while (paddedNumber.length < length) {
    paddedNumber = '0' + paddedNumber
  }

  return paddedNumber
}

class Timer extends Component {
  constructor (props) {
    super(props)

    this.state = { currentTime: props.currentTime, endTime: props.endTime, currentRound: props.currentRound }
    this.endRound = props.endRound
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.currentTime !== null && nextProps.currentTime !== this.state.currentTime && nextProps.currentTime >= this.state.endTime) {
      this.endRound()
    }

    this.setState(nextProps)
  }

  render () {
    let timeLeft = (this.state.endTime - new Date().getTime()) / 1000.0
    let minutes = Math.floor(timeLeft / 60)
    let seconds = (timeLeft % 60).toFixed(3)

    return (<div>
      <span>{`Round: ${this.state.currentRound}`}</span>
      <br />
      <span>{this.state.endTime !== null ? `${padStart(minutes, 2)}:${padStart(seconds, 6)}` : '00:00.000'}</span>
    </div>)
  }
}

export default Timer
