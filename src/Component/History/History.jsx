import React, { useContext } from 'react'
import UseHistory from '../../hooks/UseHistory'
import ListHistory from '../ListHistory/ListHistory';
import { IoArrowBack } from "react-icons/io5"
import BarraMenu from '../Barra/BarraMenu';
import Useprovider  from '../../context/Useproviders';

const History  =()=>{
    const {history,back} = UseHistory()
    const {time} = useContext(Useprovider) 
    
    return (
        <div>
            <span className={`back ${time}`} onClick={() =>back()} ><IoArrowBack   fontSize={40} /> </span>
            <div className={`list-history ${time} `}>
                <ul>
                    <li><h1 className={time}>History</h1></li>
                    <li><span>Lorem ipsum dolor sit amet</span></li>
                    <li> <span>consetur edipiscing elit</span></li>
                </ul>
            </div>
                <div className='list-history-flex'>   
                    {history.state.map(hty => (
                <ListHistory {...hty} />
                ))}
                </div>
                
                <BarraMenu />
        </div>
    )
}
export  default History