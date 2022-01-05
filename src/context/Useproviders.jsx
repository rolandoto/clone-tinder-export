import React, { createContext, useState } from "react";

const Context = createContext({})



export const Useprovider  =({children}) =>{

    const [tinder,setTinder] =useState([])
    
    const inital ={
        state:[]
    }  
    const [history,setHistory] =useState(inital)

    const [time,setTime] = useState('night')
    const [color,setColor] = useState('nigthIcon')
    const [icon,setIcon] = useState('Iconnigth')
    const [his,setHis] = useState('history-nigth')
    return (
        <Context.Provider value={{tinder,
                                setTinder,
                                history,
                                setHistory,
                                time,
                                setTime,
                                color,
                                setColor,
                                icon,
                                setIcon,
                                his,
                                setHis}} >
            {children}
        </Context.Provider>
    )

}
export default Context

