import { useEffect, useState } from "react";

const CounterEffect = () => {
    const [count, setCount] = useState(0);
    useEffect (()=>{
        document.title = `Count: ${count}`
    }, [count])
  return (
    <div>
        <h1>CounterEffect.jsx</h1>
        <p>Count: {count} </p>
        <button onClick={()=> setCount(count+1)}>Increment</button>
    </div>
  )
}

export default CounterEffect