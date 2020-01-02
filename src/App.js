import React, { Component, useState } from 'react';
import Person from './Person/person'
import Userinput from './UserInput/userInput'
import Useroutput from './UserOutput/userOutput';
import './App.css'

class App extends Component {

  state = {
    person: [
      { name: 'Neha', age: 24 },
      { name: 'Yash', age: 25 },
      { name: 'Steve', age: 26 }
    ],

    users:[
      {name:"Olaf"},
      {name:"Swen"},
      {name:"Anna"}
    ]
  }

  // const [personState, setPersonState]=useState({
  //   person: [
  //         { name: 'Neha', age: 24 },
  //         { name: 'Yash', age: 25 },
  //         { name: 'Steve', age: 26 }
  //       ]
  // })

  btnClicked = (newName) => {
    console.log("button clicked");
    this.setState({
      person: [
        { name: newName, age: 24 },
        { name: 'Raj', age: 25 },
        { name: 'Steve', age: 26 }
      ]
    })
    // setPersonState({
    //   person: [
    //         { name: 'Mundra', age: 24 },
    //         { name: 'Raj', age: 25 },
    //         { name: 'Steve', age: 26 }
    //       ]
    // })
    
  }

  // nameChanged=(event)=>{
  //   this.setState({
  //     person:[
  //       { name: 'Neha', age: 24 },
  //       { name: event.target.value, age: 25 },
  //       { name: 'Steve', age: 26 }
  //     ]
  //   })
  // }

  nameChanged=(name2)=>{
    console.log(name2);
    
    let newUserArr=this.state.users;
    newUserArr.push({name:name2});
    this.setState({
      users:newUserArr
    })
  }

  outputUser(){
    let outputArr=this.state.users.map(item=><Useroutput name={item.name}></Useroutput>)
    return(
      <div>
        {outputArr}
      </div>
    )
  }

  render(){
    return (
      <div className="text-center">
        <h1>Assignment 1</h1>
        {/* <button type="button" onClick={this.btnClicked.bind(this,"Mundra")} >Switch</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age} 
        click={this.btnClicked.bind(this,"Neha!")}/>
        <Person name={this.state.person[1].name} age={this.state.person[1].age} 
        changed={this.nameChanged}>
            Hello There 
        </Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age} /> */}
        <Userinput nameChanged={this.nameChanged} ></Userinput>
        <p>This is UserOutput</p>
        {this.outputUser()}
      </div>
    )
    }
}

export default App