import React, { useCallback, useContext } from 'react'
import  UseEmailcontext  from '../../context/UseEmailcontext'
import  Useprovider  from '../../context/Useproviders'
import app from '../../firebase/config'
import UseUsers from '../../hooks/UseUser'

const Login =()=>{
    const {time} = useContext(Useprovider)
    
    const {handleLogin} = UseUsers()

    
    return (
        <div className='login-contendor'>
            <h1 className={`title-welcome ${time}`}>Welcome</h1>
                <ul className={`list-login-description ${time}`}>
                    <li className=''><span>Lorem ipsums dolor sit amet, consectetur  adipiscing elit.</span></li>     
                </ul>  
                <div className={`form-login ${time}`}>
                    <form onSubmit={handleLogin}>
                        <input name="email" type="email"  placeholder='ingrese correo electronico'  />
                            <span className={`title-input-user ${time}`} >User</span>
                        <input name="password" type="password" placeholder='ingrese contraseña' />
                             <span className={`title-input-password ${time}`}>Password</span>
                        <a className={`password ${time}`}>Forwot your password?</a>
                        <div>
                            <button type='submit' className='button-Log' >
                                Login
                            </button>
                        </div>
                    </form>
                </div>  
        </div>
    )
}
export default Login