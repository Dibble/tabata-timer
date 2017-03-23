import React from 'react'
import ReactDom from 'react-dom'

import HelloWorld from './components/HelloWorld'

const domHook = document.getElementById('root')
ReactDom.render(<HelloWorld />, domHook)
