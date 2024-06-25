import { useEffect } from "react";
import { userAuthStore } from "../store/auth.store";

export const Login = () => {
  const authStatus = userAuthStore((state) => state.status);
  const user = userAuthStore((state) => state.user);
  const login = userAuthStore((state) => state.login);
  const logout = userAuthStore((state) => state.logout);

  useEffect(() => {
    setTimeout(() => {
      logout();
    }, 2000);
  }, []);

  if (authStatus === "checking") return <h4> Loading... </h4>;

  return (
    <>
      <h3>Login</h3>

      {authStatus === "authenticated" ? (
        <h4>User: {JSON.stringify(user?.name)}</h4>
      ) : (
        <h4>Usuario no logueado</h4>
      )}

      {authStatus === "authenticated" ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={() => login('Igmhdmtz@gmail.com', 'kdoF3')}>Login</button>
      )}
    </>
  );
};
