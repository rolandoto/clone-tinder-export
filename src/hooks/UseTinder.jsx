import {useContext, useEffect, useState} from 'react'
import  Useprovider from '../context/Useproviders'
import ServiceExport from '../service/ServiceExport'
import ServiceSingleExport from '../service/ServiceSingleExport'


const INITIAL = 1
const UseTinder =()=>{
    
    const [page,setPage] = useState(INITIAL)
    const {tinder,setTinder} = useContext(Useprovider)
    const [loading,setLoading] =useState(false)
    
    useEffect(() =>{
       setLoading(true)
    ServiceExport({page}).then(index =>{
        setLoading(false)
        setTinder(index)
    }).catch(error =>{
        console.log(error)
    })
    },[setTinder,page])

    const handRestar =()=>{
        setPage(1)
    }
     useEffect(()=>{
        setTimeout(()=>{
            if(page==6){
               handRestar()
            }
        },5000)
    },[page])

    return {
        tinder,
        loading,
        setPage
    }
}

export default UseTinder