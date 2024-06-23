import { useState } from "react";

interface Options {
    initialValue:number
    numIncrease?: number
}

export const useCounter = ({initialValue, numIncrease = 1}:Options) => {

    const [count, setCount] = useState(initialValue);
    
    const operation = ( isIncrease: boolean ) => setCount(isIncrease ? count + numIncrease : count <= 0 ? 0 : count - numIncrease); 

    return { count, operation }
}
