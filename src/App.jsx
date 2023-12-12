import React, { PureComponent } from 'react'
import SimpleCounter from './Components/simpleCounter'
import PureCounter from './Components/PureCounter'

const App = () => {
  return (
    <div>
      <SimpleCounter />
      <PureCounter />
    </div>
  )
}

export default App

