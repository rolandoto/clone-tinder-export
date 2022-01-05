import  { useEffect, useState } from 'react'
import ServiceSingleExport from '../service/ServiceSingleExport'

const UseSingle =()=>{
    const [single,setSingle] = useState()

     useEffect(()=>{
        ServiceSingleExport().then(index =>{
            setSingle(index)
        }).catch(error =>{
            console.log(error)
        })
    },[setSingle])
    
    return {
        single
    }
}
export default UseSingle