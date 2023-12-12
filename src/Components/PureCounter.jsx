import React, { PureComponent } from 'react'

class PureCounter extends PureComponent {
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
    console.log("This is Pure Component")
    return (
      <div>
        <h1>PureComponent</h1>
        {this.state.count}
        <br />
        <button onClick={this.handleToggle}>set Toggle</button>
        <button onClick={this.increment}>Counter</button>
      </div>
    )
  }
}

export default PureCounter

