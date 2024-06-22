export const BasicTypes = () => {

  const charterNames = [{name: "Link"},{name:"Yoshi"},{name: "Mario Bros"}];
  const languages = ['C#', 'JS','Java', 'PHP','React Native'];
  const name:string = 'Igmar Jovan';
  const age:number = 27;

  return (
    <>
      <h3>Tipos basicos</h3>
      Personajes del mundo de nintendo: {charterNames.map(item => item.name + ' ')}
      <h4>Hola soy {name} y tengo {age} años</h4>
      <h3>Programo en algunos lenguajes como {languages.join(', ')}</h3>
    </>
  )
};
