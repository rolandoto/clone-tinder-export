import { useContext } from "react"
import  Useprovider  from "../context/Useproviders"
import {useHistory} from 'react-router-dom'
const UseHistory =()=>{
    const hist = useHistory()
   const {history,setHistory} = useContext(Useprovider)

   const handHistory = (evt,value) =>{
       const send = history.state.find(index => index.id == evt.id )
       if(send){
        return null
       }else {
           setHistory({
           ...history,
           state:[...history.state,{...evt,historial:value}]
       })
    }
   }

   const hadTodoDelete =()=>{
        setHistory({...history,
                    state:[]})
        hist.push('/HomeTinder')
   }

   return {handHistory,
            history,
            hadTodoDelete}
}

export default UseHistory