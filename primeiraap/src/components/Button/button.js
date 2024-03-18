import React from 'react'
import './styles.css'

function Button(props){
    return (
        <div className='containerButton'>
            <button className='button'>{props.name}</button>
            <span> Seus dados salvo </span>
        </div>

    )
}

export default Button