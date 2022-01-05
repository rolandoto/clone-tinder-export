import React, { useContext, useState } from 'react'
import  Useprovider  from '../../context/Useproviders'
import UseHistory from '../../hooks/UseHistory'
import Like from '../Like/Like'
import { WiDayCloudy ,WiMoonWaningCrescent4} from "react-icons/wi";


const ListTinder =({tinder,handNext})=>{
    const {handHistory} = UseHistory()
    const {setTime,time,setColor,color,setIcon,icon,setHis,his,mode,setMode} = useContext(Useprovider)
    

    const handclickDay =()=>{
            setTime(time == 'day'? 'night' : "day")
            setColor(color == 'dayIcon'? "nigthIcon" :"dayIcon" )
            setIcon(icon == "Icon" ? "Iconnigth":"Icon")
            setHis(his == 'history' ? "history-nigth" : "history")
            setMode(!mode)
        }

    const timeMode = mode ?  <WiDayCloudy color='yellow' fontSize={40} /> :<WiMoonWaningCrescent4 fontSize={40} color='2c2a40' />

    return (
        <div>   
            <span className={`modo-time ${time}`}  >
                <span onClick={handclickDay}>
                {timeMode}
                </span>
            </span>
            <div className='image-efect'>
                <img src={tinder.image} alt="" className='image-tinder' />
                <div className='border-degraded'>
                    <h1 className='title-tinder'>{tinder.title}</h1>
                </div>
            </div>     
        <Like   handHistory={handHistory} tinder={tinder}  handNext={handNext}   />
        </div>
    )
}
export default ListTinder