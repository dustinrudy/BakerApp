import React from 'react'
import {Link, hashHistory} from 'react-router'
import store from 'store'
import {addInstructions} from 'api/api'


export default React.createClass({
    getInitialState: function(){
        return {
            "directions":""
            
        }
    },
    handleSubmit: function (e) {
        e.preventDefault()
        var obj = {
            directions: this.state.directions,
            
        }
        addInstructions(obj)

    },

    updateAddInstructions: function(e){

        var val = e.target.value
        console.log(val)
        var id = e.target.id
        var stateObj = {}
        stateObj[id] = val
        this.setState(stateObj)
    },
    render: function (){
        return(
            <div className='add_instructions'>
                <div className="createInstructions">
                        <p className="step">Step 1</p>
                        <button id="increase" type="button"><i className="fa fa-plus-square" aria-hidden="true"></i></button>
                        <button id="decrease" type="button"><i className="fa fa-minus-square" aria-hidden="true"></i></button>
                        <textarea id="directions" onChange={this.updateAddInstructions} rows="4" cols="50" value={this.state.directions} placeholder="What directions go with this steps"/>
                        <button id="addStep" type="button">Add Step</button>
                        
                </div>
            </div>
        )
    }
})