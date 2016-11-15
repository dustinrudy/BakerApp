import React from 'react'
import {Link, hashHistory} from 'react-router'
import store from 'store'
import {addInstructions} from 'api/api'


const InstructionsContainer = React.createClass({
    getInitialState: function() {
        return {
            instructions: []
        }   
    },
    componentWillMount: function () {
        this.unsubscribe = store.subscribe(() => {
            const appState = store.getState()
            this.setState({
                instructions: appState.instructions
            })
        })
    },
    componentWillUnmount: function () {
        this.unsubscribe()
    },
    render: function() {
        return (
            <InstructionsView recipeId={this.props.params.recipeId} instructions={this.state.instructions} />
        )
       
    }

})


const InstructionsView = React.createClass({
    getInitialState: function(){
        return {
            directions: ""
        }
    },

    updateInstruction: function(e){

        var val = e.target.value
        console.log(val)
        var id = e.target.id
        var stateObj = {}
        stateObj[id] = val
        this.setState(stateObj)
    },

    addInstruction: function(e) {
        e.preventDefault()
        var obj = {
            directions: this.state.directions,
            recipeId: this.props.recipeId
        }
        addInstructions(obj)
    },

    deleteIngredient: function(e) {

    },
    goBack: function (e) {
        e.preventDefault()
        hashHistory.push("/")
    },
    render: function (){
        return(
            <div className='add_instructions'>
                <div className="createInstructions">
                    {this.props.instructions.map((instruction, i) => {
                        return (
                    
                    <div key ={instruction.id}>
                        <p className="step">Step {i + 1}</p>
                        <p>{instruction.directions}</p>
                    </div>
                        )

                    })}
                        
                        <textarea id="directions" onChange={this.updateInstruction} rows="4" cols="50" value={this.state.directions} placeholder="What directions go with this steps"/>
                        <button id="addStep" onClick={this.addInstruction} type="button">Add Step</button>
                        <button className="cancel" onClick={this.goBack}>Cancel</button>
                        
                </div>
            </div>
        )
    }
})

export default InstructionsContainer