import React from 'react'
import ReactDom from 'react-dom'

import Tabata from './components/Tabata'

let endTime = new Date()
endTime.setSeconds(endTime.getSeconds() + 20)

const domHook = document.getElementById('root')
ReactDom.render(<Tabata />, domHook)
