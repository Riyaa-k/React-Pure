import React, { Component } from 'react'

class SimpleCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0,
         toggle:false
      }
    }
handleToggle=()=>{
    this.setState(prevstate=>{
        return{toggle:!prevstate.toggle}
    })
}
increment=()=>{
    if(this.state.toggle){
        this.setState(prevstate=>{
            return {count : prevstate.count +1}
        })
    }
    
}  
    
  render() {
    console.log("This is Simple Component");
    return (
      <div>
        <h1>Simple Component</h1>
        {this.state.count}
        <br />
        <button onClick={this.handleToggle}>set Toggle</button>
        <button onClick={this.increment}>Counter</button>
      </div>
    )
  }
}

export default SimpleCounter
