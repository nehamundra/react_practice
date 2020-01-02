import React from "react";

const userInput=(props)=>{
    var name2;
    const changeName2=()=>{
        props.nameChanged(name2);
    }

    const assignName2=(event)=>{
        name2=event.target.value
    }
    return(
        <div>
            <p>This is UserInput!!</p>
            <input type="text" placeholder="Add a Name" value={name2} onChange={assignName2}/>
            <button type="button" onClick={changeName2}>Add</button>
        </div>
    )
}

export default userInput