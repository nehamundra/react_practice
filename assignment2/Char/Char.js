import React from 'react'

const Char=(props)=>{

    return (
        <div className='charStyle' onClick={props.clicked}>
            {props.char}
        </div>
    )
}

export default Char