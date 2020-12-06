import React, {useRef} from 'react'

function Login() {
  const usernameField = useRef(null)
  const pwField = useRef(null)
  const submitLogin = (e) => {
    e.preventDefault()
    console.log(usernameField.current.value)
    console.log(pwField.current.value)
  }
  return (
    <>
    <h1>Wilhelmiina - Login</h1>
    <form onSubmit={submitLogin}>
      <input placeholder="username" ref={usernameField}></input>
      <input placeholder="password" ref={pwField} type="password"></input>
      <input type="submit" value="Login"></input>
    </form>
    </>
  );
}
export default Login;
