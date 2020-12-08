import React, {useRef} from 'react'

const login = async (un, pw) => {
  // TODO Send the login request to backend
  // Then return the session id
}

const LoginPage = () => {
  const usernameField = useRef(null)
  const pwField = useRef(null)
  const submitLogin = (e) => {
    e.preventDefault()
    login(usernameField.current.value, pwField.current.value).then(sid => {
      // store sid in localstorage
    }).catch(err => {
      // Login error, propably wrong pw or un... show to user
    })
  }
  return (
    <>
    <h1>Wilhelmiina</h1>
    <h2>Login</h2>
    <form onSubmit={submitLogin}>
      <input placeholder="username" ref={usernameField}></input>
      <input placeholder="password" ref={pwField} type="password"></input>
      <input type="submit" value="Login"></input>
    </form>
    </>
  );
}
export default LoginPage;
