import React, { Component } from 'react'
import './components.css'


class Class extends Component {
    constructor()
    {
        super();
        this.state = {show:false}
    }
    render(){
        return (
            <div>
                <button onClick={() => {this.setState({show:!this.state.show})}} class = "class">To see styling in class Component</button>
                {
                    this.state.show ?
                    <div class = "headerRight">
                    <h1>This is created using Class component</h1>
                    <p class = "external">This is done using external CSS</p>
                    <p style={{color:"blue"}}>This is done using inline CSS</p>
                </div> : null
                }
            </div>
        );
    }
}

export default Class