import React, {Component} from 'react';
import './App.css';
import Validator from './Validator/Validator'
import Char from './Char/Char'

class App extends Component{

  state={
    text:''
  }

  changeText=(event)=>{
    this.setState({
      text:event.target.value
    })

  }



  deleteChar(index){
    let textArr=[...this.state.text.split('')];
    textArr.splice(index,1);
    console.log(index, textArr);
    
    let updatedText=textArr.join('')
    this.setState({
      text:updatedText
    })


  }

  render(){

    let charArr=this.state.text.split('');
    let charComponent=(
      charArr.map((ch,index)=><Char char={ch} key={index} clicked={()=>this.deleteChar(index)}/>)
    )

    let validText='Text too short'
    if(this.state.text.length>4){
        validText='Text long enough!' 
    }

    return(
      <div className='text-center m-3'>
        <input type="text" value={this.state.text} onChange={this.changeText}/>
        <p>{this.state.text.length}</p>
        <Validator valid={validText}/>
        {charComponent}
      </div>
    )
  }
}

export default App;
