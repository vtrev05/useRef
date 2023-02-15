import React, {useRef} from 'react'

const PulsarRef = () => {
    const cont = useRef(0)

    const handleClick = (incrementa) => {
        if (incrementa) {
            cont.current++
        } else {
            cont.current--
        }
        console.log('El valor del contador es: ', cont.current)
    }

    console.log( cont.current)

  return (
    <div>
       <button onClick={()=> handleClick(false)}>Decrementar</button>
        <button onClick={()=> handleClick(true)}>Incrementar</button>
        <h1>{cont.current}</h1>
    </div>
  )
}

export default PulsarRef