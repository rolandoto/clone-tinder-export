import React from 'react'
import UseTinder from '../../hooks/UseTinder'
import BarraMenu from '../Barra/BarraMenu';
import ListTinder from '../ListTinder/ListTinder'
import SendTinder from '../SendTinder/SendTinder';

const HomeTinder =()=>{

    const {tinder,loading,setPage} = UseTinder()
    
    const handNext =() =>{
        setPage(index => index +1)
    }

    if(!tinder) return null
    
    if(tinder.id ==undefined)  return  <SendTinder   />

    return (
        <div>
            {loading ?  null:
              <div>
                  <ListTinder tinder={tinder} handNext={handNext} />
              </div> }
              <BarraMenu / >
        </div>
    )
}
export default HomeTinder