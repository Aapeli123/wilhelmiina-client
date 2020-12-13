import React, {useEffect, useState}  from 'react';
import { Redirect } from 'react-router-dom';
import { api } from '.';

export default () => {
    const [loggedOut, setLoggedOut] = useState(false);
    useEffect(() => {
        let mounted = true;
        api.get("/auth/logout").then(res => {
            if (!res.data.Success) {
                alert(res.data.Message)
            }
            if(mounted) {
                setLoggedOut(true);
            }
        }).catch(err => {
            alert(err)
        })
        return () => mounted = false;
    });
    return loggedOut? (
        <>
        <Redirect to="/login"></Redirect>
        </>
    ) : (
        <>
            <h1> Logging out... </h1>
        </>
    )
    
};