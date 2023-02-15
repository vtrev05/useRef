import React, {useState, useRef} from 'react'
import { useEffect } from 'react';

const CodeInterval = () => {
    const [toggle, setToggle] = useState(false)
    const intervalRef = useRef(null);
    
    useEffect(()=> {
        
        if (toggle && !intervalRef.current) {
           
            let time = 0
            intervalRef.current = setInterval(()=> {
                time += 1000
                console.log('el valor de time es:', time)
            }, 1000)

        }
    }, [toggle])

    useEffect(()=> {
        return() => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
            
        }
    }, [])


    console.log('Renderizando CodeInterval!');

  return (
    <div>
        <button onClick={() => setToggle(!toggle)}>Activar intervalo!</button>
    </div>
  )
}

export default CodeInterval