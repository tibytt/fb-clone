import React from 'react';
import "./Login.css";
import { Button } from '@material-ui/core';
// importo el auth y firebase de nuestro local
import { auth, provider } from "./firebase";

import { actionTypes } from "./reducer";
import { useStateValue } from './StateProvider';

function Login() {
   const [state, dispatch] = useStateValue();


    const signIn = () => {

        auth.signInWithPopup(provider).then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user, 
            });       
            console.log(state);
        })
        .catch((error) => alert(error.message));
    };
    return (
        <div className="login">
           <div className="login_logo">
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/480px-Facebook_f_logo_%282019%29.svg.png" alt=""></img>
               <h1>franbook</h1>
            </div>
            <Button type="submit" onClick={signIn}>Sign In</Button> 
        </div>
    );
}

export default Login;
