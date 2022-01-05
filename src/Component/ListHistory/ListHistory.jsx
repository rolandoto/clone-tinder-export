import React, { useContext } from 'react'
import {MdFavorite ,MdOutlineCancel } from "react-icons/md";
import Useprovider  from '../../context/Useproviders';
const ListHistory =({image,historial})=>{

    const {time,his} =useContext(Useprovider)
    const [lavel,emoji] = historial ?  ['Favorite',<span className={his} ><MdFavorite fontSize={30} /></span> ]: ['NotFavorite', <span > <MdOutlineCancel fontSize={30} color='red'  /></span>]

    return (
        <div className={`flex-history ${time}`}>
            <img className='image-hisotry' src={image} alt={image} />
             <span role={lavel}>{emoji} </span>
        </div>
    )
}
export default ListHistory