import React from 'react';
import auth from '../firebase.init';

const Login = () => {
    const [user, loading ] = useAuthState(auth)
    return (
        <div>
            this is for login 
            <h1>the developer is feeling sleepy </h1>
            <p>please wait for the lazy developer </p>
            
        </div>
    );
};

export default Login;