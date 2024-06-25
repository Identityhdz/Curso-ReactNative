// import {BasicFunctions, BasicTypes, ObjectLiterals} from "./typescript"

import { Counter, Login } from "./components"
import { CounterWhitHook } from "./components/CounterWithHook"


function App() {
  return (
    <main>
      <h1>Introduccion a TS - React</h1>
      {/* <BasicTypes /> */}
      {/* <ObjectLiterals /> */}
      {/* <BasicFunctions /> */}
      {/* <Counter /> */}
      <CounterWhitHook/>
      <Login/>
    </main>
  )
}

export default App
