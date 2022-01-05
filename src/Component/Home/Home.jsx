import React, { useContext} from "react";
import Logo from "../Logo/logo";
import {useHistory} from 'react-router-dom'
import  Useprovider  from "../../context/Useproviders";
const Home =()=>{
   const {time} =useContext(Useprovider)
    const history = useHistory()
   

    const handNext =()=>{
        history.push('/Login')
    }
 
    return (
        <div>
            <Logo/>
            <div className={`Home-Login ${time}`}>
                <div className='list-title'>
                    <ul>
                        <li><span>Discover Your Best </span></li>
                        <li><span>Sport With Us</span></li>
                        <li className='list-description'><span>Lorem ipsums dolor sit amet, consectetur  adipiscing elit.</span></li>
                        <div className='button-blue'>
                          <button className='button-login' onClick={handNext} >Login</button>
                        </div> 
                    </ul>  
                </div> 
            </div>
        </div>  
    )
}
export default Home