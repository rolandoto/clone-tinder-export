import { useCallback, useContext } from "react";
import  UseEmailcontext  from "../context/UseEmailcontext";
import app from "../firebase/config";
import {useHistory}  from 'react-router-dom'

const UseUsers =() =>{

    const history = useHistory()
    const {setEmail} = useContext(UseEmailcontext)
   
    const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
          setEmail(email.value)
          setTimeout(()=>{
            history.push("/HomeTinder");
        },3000)
      } catch (error) {
        alert(error)
      }
    },
    [history]
  );

    return {
        handleLogin
    }
}

export default UseUsers