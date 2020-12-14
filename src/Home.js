import React, {useState, useEffect} from 'react';
import { api } from '.';
import NavBar from './NavBar';
import { ToastContainer, toast } from "react-toastify";

export default () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const getUser = async () => {
        try {
            let res = await api.get("user")    
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

    useEffect(async () => {
        await getUser()
    }, [loading])

    return loading? (
        <>
        <h1>Loading..</h1>
        </>
    ) : (
        <>
        <NavBar />
        <h1>
            Hello, {user.Fullname}
        </h1>
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
    )
}