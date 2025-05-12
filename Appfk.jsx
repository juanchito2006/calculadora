import { useState } from 'react'
import './App.css'

function Vernum(num){

}

function App() {

  const [count, setCount] = useState()

  function Mybtn({text}) {

    return(
        
      <>
      {text.map((text, i) => (
        
      <button key={i}>{text}</button>

      ))}

      </>
    );

  }

  function ponu(numero){

    console.log(numero)

  }

  return (
    <>

      <div className='calcilator'>

        <output type="text" id='pantalla'></output>

        <div className='buttons'>

          <Mybtn text={[1,2,3,"+"]}/> <br />



        </div>

      </div>
      </>
  )
}

export default App


