import React, {useRef, useState} from 'react'
import axios from 'axios'
import { api } from '.';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Redirect } from 'react-router-dom';
const login = async (un, pw) => {
  let response = await api.post(`/auth/login`, {Username: un, Password: pw})
  if(!response.data.Success) {
    throw response.data.Message
  }
  return true
}

const LoginPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const usernameField = useRef(null)
  const pwField = useRef(null)
  const submitLogin = (e) => {
    e.preventDefault()
    login(usernameField.current.value, pwField.current.value).catch(err => {
      toast.error(err)
    }).then((res) => {
      if(res) {
        toast.success("Login successful")
        setLoggedIn(true)
      }
    });
  }


  return loggedIn? (
    <>
    <Redirect to="/home"></Redirect>
    </>
  ) : (
    <>
    <h1>Wilhelmiina</h1>
    <h2>Login</h2>
    <form onSubmit={submitLogin}>
      <input placeholder="username" ref={usernameField}></input>
      <input placeholder="password" ref={pwField} type="password"></input>
      <input type="submit" value="Login"></input>
    </form>
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      draggable
    />
    </>
  );
}
export default LoginPage;
