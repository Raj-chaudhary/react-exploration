import { useState } from 'react'
import './App.css'

function App() {


  let [counter, setCounter] = useState(15)

//let counter = 5




const addValue = () => {
// counter = counter + 1
setCounter(counter + 1)
console.log("clicked", counter);

}
const decValue = () => {
// counter = counter + 1
setCounter(counter - 1)
console.log("clicked", counter);

}

  return (
    <>
      <h1>Coffe aur react</h1>
      <h2>Count is: {counter} </h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={decValue}>Remove value</button>
    </>
  )
}

export default App
