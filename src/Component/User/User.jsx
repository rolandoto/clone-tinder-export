import React from 'react'
import app from '../../firebase/config'
import UseHistory from '../../hooks/UseHistory'
import BarraMenu from '../Barra/BarraMenu'

const User =() =>{
    const {hadTodoDelete} = UseHistory()
    return (
        <div>
            <button className='button-history' onClick={() => app.auth().signOut()} >
                    Cerrar seccion login
            </button>
            <button className='button-history' onClick={() =>hadTodoDelete()} >
                    Borrar historial
            </button>
            <BarraMenu />
        </div>
    )
}
export default User