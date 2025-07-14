import { useState } from 'react'

import HelloWorld from "./components/HelloWorld"

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hi Mom</h1>
      <HelloWorld />
    </>
  )
}

export default App
