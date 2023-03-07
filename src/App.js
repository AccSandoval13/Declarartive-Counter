// import React from 'react'
// import { useState } from 'react'

// or with one line below 
import React, { useState } from 'react'

// invoked the useState function, with two returned variables
// you can interpolate JavaScript into JSX using {}
function App() {
  let [counter, changeCounter] = useState(1)
  // To access this function in the developer console, we need to make it global
  window.changeCounter = changeCounter 
    return (
      <div>
          <h1>{counter}</h1>
          <h4>{counter}</h4>
      </div>
    )
}
// React automatically updated the DOM in multiple places when necessary

export default App;

