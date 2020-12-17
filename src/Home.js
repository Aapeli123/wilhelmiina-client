import React, {useState, useEffect} from 'react';
import { api } from '.';
import NavBar from './NavBar';
import { ToastContainer, toast } from "react-toastify";
import Spinner from './Spinner';
export default () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const getUser = async () => {
        try {
            let res = await api.get("user");  
            let user = res.data.Data;
            if (!res.data.Success) {
                toast.error(res.data.Message);
                window.location.replace("/login")
                return
            }
            setUser(user)
            setLoading(false)
        } catch (err) {
            window.location.replace("/login")
        }
        

    }
    let data = "<script> alert(0) </script>"
    useEffect(async () => {
        await getUser()
    }, [loading])

    return loading? (
        <>
        <NavBar /> 
        <h1>Loading...</h1>
        <Spinner />
        </>
    ) : (
        <>
        <NavBar />
        <h1>
            Hello, {user.Fullname}
        </h1>
        <div>
            {data}
        </div>
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            draggable
            pauseOnHover={false}
            pauseOnFocusLoss={false}
        />
        </>
    )
}