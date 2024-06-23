export const BasicFunctions = () => {
    
    
    const addTwoNumber = ( a:number, b:string ) => (a + b).toString();
    const addThreeNumber = ( a:number, b:number, c:number ):number => a + b + c;

    return (
        <>
            <h3>3.- Basics Functions</h3>
            <h4>3.1 - El Resultado de sumar: {addTwoNumber(5,'5')} </h4>
            <h4>3.2 - El Resultado de sumar: {addThreeNumber(5,5,5)} </h4>
        </> 
    )
}
