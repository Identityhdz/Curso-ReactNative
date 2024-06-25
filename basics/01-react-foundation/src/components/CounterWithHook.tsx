import { useCounter } from "../hooks/useCounter"

export const CounterWhitHook = () => {

  const {count, operation} = useCounter({
    initialValue: 0,
    numIncrease: 2
  });

  return (
    <>
        <h3>UseState - Hook</h3>
        <h4>Contador: <small>{count}</small></h4>
        <div>
          <button onClick={() => operation(true) }>( + ) Suma</button>
          &nbsp;
          <button onClick={()=> operation(false)}>( - ) Resta</button>
        </div>
    </>
  )
}
