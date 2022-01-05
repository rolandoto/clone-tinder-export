import React from "react";
import { MdFavorite } from "react-icons/md";


const SendTinder =()=>{
   
    return (
        <div>
            <div className='send-tinder-single' >
                <ul>
                    <li className='like-favorite-send'> 
                        <span>
                            <MdFavorite color='white'  fontSize={30} />    
                            <div className='circle'></div>
                            <div className='circle2'></div>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )

}
export default SendTinder