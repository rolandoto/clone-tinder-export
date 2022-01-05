import React, { useContext } from "react";
import { RiHomeFill,RiPieChartFill,RiCalendarFill } from "react-icons/ri";
import {Link} from 'react-router-dom'
import  Useprovider  from "../../context/Useproviders";

const BarraMenu =()=>{
    const {time,icon} = useContext(Useprovider)
    return (
        <div>
            <ul className={`barra ${time} `}>
                <li > <span className={`home ${icon}`}><Link  className={`${icon}`} to='/HomeTinder'> <RiHomeFill  fontSize={25}/></Link> </span> </li>
                <li> <span > <Link className={`${icon}`} to='/history'>  <RiPieChartFill   fontSize={25}/></Link> </span> </li>
                <li className={`${icon}`}> <span> <RiCalendarFill fontSize={25}/> </span> </li>
            </ul>
        </div>
    )
}
export default BarraMenu