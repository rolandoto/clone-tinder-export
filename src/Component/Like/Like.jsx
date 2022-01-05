import React, { useContext } from 'react'
import { MdFavorite,MdOutlineCancel } from "react-icons/md";
import Useprovider  from '../../context/Useproviders';
import UseHistory from '../../hooks/UseHistory';

const Like =({handNext,tinder}) =>{
    const {color,time} = useContext(Useprovider)
    const {handHistory} = UseHistory()

    const handNotFavorite =(vtn) =>{
        handHistory(vtn,false)
         handNext()
    }
    const handFavorite =(vtn)=>{
        handHistory(vtn,true)
        handNext()
    }

    return (
        <div className='like'>
            <ul>
                <li className={`like-cancel  ${color}`}>
                    <span > 
                        <MdOutlineCancel  fontSize={30} onClick={()=> handNotFavorite(tinder)} />
                    </span></li>
                <li className='like-favorite'> 
                    <span>
                        <MdFavorite color='white' fontSize={50} onClick={() => handFavorite(tinder)}  />
                    </span> 
                 </li>
            </ul> 
        </div>
    )
}

export default Like