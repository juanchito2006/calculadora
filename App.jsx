import { useState } from 'react';
import './App.css'



export default function App() {

    const [pantalla, setPantalla] = useState("");

    const clickmgn = (valor) => {

      if (valor === "C"){

        setPantalla("");

      } else if (valor ==="=") {

          if( setPantalla(eval(pantalla.toString())) == "Infinity"){
            setPantalla("ERROR")
          }
          else setPantalla(eval(pantalla.toString()));
        

      }else{
        setPantalla(pantalla + valor)
      }

    }

    const botones = [
      "1", "2", "3", "+",
      "4", "5", "6", "-",
      "7", "8", "9", "*",
      "0", "C", "=", "/"
    ];
    

    

    return(
      <div className='calculadora'>

        <div className='pantalla'>{pantalla || "0"}</div>

        <div className='btn'>

          {botones.map((b,i) => (

            <button className='btn1' key={i} onClick={() => clickmgn(b)}>{b}</button>

          ))}

        </div>

      </div>
    
    )
  }
  




