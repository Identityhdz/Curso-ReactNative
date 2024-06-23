interface Person {
  name: string,
  lastName: string,
  age: number,
  address: Address,
  isAlive?: boolean
}

interface Address {
  houseNumber: number,
  zipCode: number
}

export const ObjectLiterals = () => {

  const person: Person = {
    name: "Igmar",
    lastName: "Hernandez",
    age: 27,
    address: {
      houseNumber: 43,
      zipCode: 22644
    },
  }

  const { age } = person
  console.log(age);


  return (
    <>
    <h3>2.- Objets Literals</h3>
    <pre>
      {JSON.stringify(person, null, 2)}
    </pre>
    </>
  )
}