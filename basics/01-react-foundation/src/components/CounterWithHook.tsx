import { useState } from "react"
import { useCounter } from "../hooks/useCounter"

export const CounterWhitHook = () => {

  const {count, operation} = useCounter({
    initialValue: 0,
    numIncrease: 2
  });

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
