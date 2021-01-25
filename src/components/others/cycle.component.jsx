import React, { Component } from 'react'

export class Cycle extends Component {
    constructor(){
        super()
        this.state = {
            showChild : true,
            text : ''
        }
        console.log('constructor')
    }
    componentDidMount(){
        console.log('did mount');
    }
    componentDidUpdate(){
        console.log('updates');
    }
    render(){
        console.log('rendered')
        return (
            <div>
                <button
                    onClick = {()=> 
                            this.setState( state =>({
                            showChild : !state.showChild
                        }))
                    }
                >
                    Toggle Life cycle
                </button>

                <button
                   onClick = { ()=>
                    this.setState(state =>({
                        text : state.text+'_hello'
                    }))
                }
                >
                    Update text
                </button>
                { this.state.showChild ? <h1>LIFE CYCLE COMPONENT</h1> :null }
            </div>
        )
    }
}