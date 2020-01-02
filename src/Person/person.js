import React from 'react';
import './person.css'

const person = (props) => {
    return (
        <div onClick={props.click} className="Person">
            <p> I am {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person
