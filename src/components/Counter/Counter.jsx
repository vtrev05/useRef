import React, { useEffect, useRef, useState } from 'react'

const Counter = () => {
    const timer = useRef(0);
  
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      let localCount = count;
      timer.current = setInterval(() => setCount(localCount++), 1000);
      return () => clearInterval(timer.current);
    }, []);
  
    const handleClick = () => {
      clearInterval(timer.current);
      timer.current = 0;
    };
  
    

    return (
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={handleClick}>Stop Counter</button>
      </div>
    );
  };

  export default Counter;