import { userAuthStore } from "../store/auth.store"

export const Login = () => {

    const authStatus = userAuthStore(state => state.status);

    return authStatus === 'checking' ? <h4> Loading... </h4> : 'Ok'

  return (
    <>
        <h3>Login</h3>
    </>
  )
}
