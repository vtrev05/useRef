import React, {useState} from 'react'

const Pulsar = () => {
    const [cont, setCont] = useState(0)

    const handleClick = (incrementa) => {
        if (incrementa) {
            setCont(cont + 1)
            
        } else {
            setCont(cont-1)
        }
        console.log('El valor del contador es: ', cont)
    }

    console.log(cont)

  return (
    <div>
        <button onClick={()=> handleClick(false)}>Decrementar</button>
        <button onClick={()=> handleClick(true)}>Incrementar</button>
    </div>
  )
}

export default Pulsar