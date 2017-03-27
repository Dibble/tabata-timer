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

    this.state = props
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
      {this.state.endTime !== null ? `${padStart(minutes, 2)}:${padStart(seconds, 6)}` : '00:00.000'}
    </div>)
  }
}

export default Timer
