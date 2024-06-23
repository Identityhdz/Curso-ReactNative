import { useState } from "react"

export const Counter = () => {

  const [count, setCount] = useState(10)
  const operation = ( isIncrease: boolean ) => setCount(isIncrease ? count + 1 : count - 1); 


  return (
    <>
        <h3>Hook - UseState</h3>
        <h4>Contador: <small>{count}</small></h4>
        <div>
          <button onClick={() => operation(true) }>+1</button>
          &nbsp;
          <button onClick={()=> operation(false)}>-1</button>
        </div>
    </>
  )
}
