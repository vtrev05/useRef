import React, {useRef} from 'react'
import './codeUseRef.css'

const CodeUseRefCss = () => {
    const colorRef = useRef(null)
    const buttonRef = useRef(null)

    const changeColor = () => {
        colorRef.current.className === "box" ? 
        colorRef.current.className = "box-modify" : 
        colorRef.current.className = "box";

        buttonRef.current.className === "box" ? 
        buttonRef.current.className = "box-modify" : 
        buttonRef.current.className = "box";
       
    }


  return (
    <div>
        
        <div className='box' ref={colorRef}>Este será el contenido de la caja</div>
        <button ref={buttonRef} onClick={changeColor}>Cambiar color del fondo</button>
        
    </div>
  )
}

export default CodeUseRefCss