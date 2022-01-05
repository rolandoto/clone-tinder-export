import React, { useContext } from "react";
import { RiHomeFill,RiPieChartFill,RiCalendarFill} from "react-icons/ri";
import { FaUserCog } from "react-icons/fa"; 
import {Link} from 'react-router-dom'
import  Useprovider  from "../../context/Useproviders";

const BarraMenu =()=>{
    const {time,icon} = useContext(Useprovider)
    return (
        <div>
            <ul className={`barra ${time} `}>
                <li > <span ><Link to='/HomeTinder'  className={`${icon}`} to='/HomeTinder'> <RiHomeFill  fontSize={25}/></Link> </span> </li>
                <li> <span> <Link to='/history' className={`${icon}`}>  <RiPieChartFill   fontSize={25}/></Link> </span> </li>
                <li > <span className={`${icon}`}> <RiCalendarFill fontSize={25}/> </span> </li>
                 <li> <span> <Link to='/user' className={`${icon}`}>  <FaUserCog   fontSize={25}/></Link> </span> </li>

            </ul>
        </div>
    )
}
export default BarraMenu