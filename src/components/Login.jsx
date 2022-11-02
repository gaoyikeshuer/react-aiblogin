import React, { useState } from 'react'
import { useRef } from 'react';
const USER_REGEX = /^[A-z]/
const Login = () => {
    const userRef = userRef();
    const errRef  = useRef();
    const [user,setUser] = useState(null);
    const [validName, setValidName] = useState(false)
    const [userFocus, setUserFocus] = useState(false)
  return (
   <section>
    <form onSubmit={handleSubmit}>
        
    </form>
   </section>
  )
}

export default Login