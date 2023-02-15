import React from 'react'
import { useEffect, useState, useRef } from 'react'

const MensajePrevio = () => {
    const [mensaje, setMensaje] = useState('')
    const prevMensaje = useRef('')

    useEffect(()=> {
        prevMensaje.current = mensaje
        console.log('Estoy actualizando la referencia')
    }, [mensaje])

    console.log(prevMensaje.current)

    const handleChange = (e) => {
        console.log('está cambiando el input')
        setMensaje(e.target.value)
    }


  return (
    <div>
        <input type="text" onChange={handleChange}/>
        <p>Mensaje: {mensaje}</p>
        <p>Referencia del mensaje: {prevMensaje.current}</p>
    </div>
  )
}

export default MensajePrevio