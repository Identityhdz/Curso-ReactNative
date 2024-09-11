import axios from "axios"
import { useEffect } from "react"

export const UsersPage = () => {

  const getEssentials = async () =>{
    const response = await axios.get('https://reqres.in/api/users?page=2')
    console.log('response', response)

  }

  useEffect(() => {
    getEssentials()
  }, [])
  

  return (
    <>
     <div>UsersPage</div>
     <table>
        <thead>
            <tr>
                <th>Avatar</th>
                <th>Nombre</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Avatar</td>
                <td>Nombre</td>
                <td>Email</td>
            </tr>
        </tbody>
     </table>
    </>
  )
}
