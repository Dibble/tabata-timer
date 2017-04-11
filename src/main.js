import React from 'react'
import ReactDom from 'react-dom'

import TabataContainer from './components/TabataContainer'

let endTime = new Date()
endTime.setSeconds(endTime.getSeconds() + 20)

const domHook = document.getElementById('root')
ReactDom.render(<TabataContainer />, domHook)
