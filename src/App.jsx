import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Guess from './Guess.jsx'
function App() {
  const [count, setCount] = useState(true);
  const[res,setres]=useState(false);
  function result(){
    return(
      <h1>HELLO</h1>
    )
  }
  function result(){
    setCount(false);
    setres(true);
  }

  return (
    <>
       <Guess/> 
    </>
  )
}

export default App
