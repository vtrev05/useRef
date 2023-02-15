import React, {useRef, useState} from 'react'

const CodeUseRef = () => {
    const ref = useRef(null)
    const [name, setName] = useState("Alberto");

    const printValue = () => {
        const inputValue = ref.current.value;
        if (inputValue) setName(inputValue);
        console.log("Imprime nombre:", inputValue);
    }

    console.log(name)

  return (
    <div>
        <h1> hola me llamo {name}</h1>
        
        <input type="text" placeholder="name" ref={ref}/>
        <button onClick={printValue}>Mostrar</button>
    </div>
  )
}

export default CodeUseRef