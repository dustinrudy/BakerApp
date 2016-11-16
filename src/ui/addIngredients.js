import React from 'react'
import {Link, hashHistory} from 'react-router'
import store from 'store'
import {addIngredients} from 'api/api'
import {getIngredients} from 'api/api'


const IngredientContainer = React.createClass({
    getInitialState: function() {
        return {
            ingredients: []
        }   
    },
    componentWillMount: function () {
        this.unsubscribe = store.subscribe(() => {
            const appState = store.getState()
            this.setState({
                ingredients: appState.ingredients
            })
        })
    },
    componentWillUnmount: function () {
        this.unsubscribe()
    },
    render: function() {
        return (
            <IngredientsView instructionId={this.props.params.instructionId} ingredients={this.state.ingredients} />
        )
       
    }

})


const IngredientsView = React.createClass({
    getInitialState: function(){
        return {
            "amount_Units":"",
            "units":"",
            "ingredient":""
            
        }
    },

    updateIngredients: function(e){

        var val = e.target.value
        console.log(val)
        var id = e.target.id
        var stateObj = {}
        stateObj[id] = val
        this.setState(stateObj)
    },

    addIngredient: function(e) {
        e.preventDefault()
        var obj = {
            "amount_Units": this.state.amount_Units,
            "units": this.state.units,
            "ingredient": this.state.ingredient,
            "instructionId": this.props.instructionId
        }
        console.log('ingredient obj', obj)
        addIngredients(obj)
    },
    goToRecipe: function(id) {
        hashHistory.push("/recipes/" + id)
    },
    
    render: function (){
        return(
            <div className='add_ingredients'>
               <p id="basic_info">Add Ingredients</p>
                <div className="createIngredients">
                     <div>
                        <input id="amount_Units" onChange={this.updateIngredients} type="text" value={this.state.amount_Units} placeholder="2"></input>
                        <select id="units" onChange={this.updateIngredients} value={this.state.units}>
                            <option value="cup">Cup/s</option>
                            <option value="teaspoon">Teaspoon/s</option>
                            <option value="tablespoon">Tablespoon/s</option>
                            <option value="fluidounce">Fluid Ounce/s</option>
                            <option value="pint">Pint/s</option>
                            <option value="quart">Quart/s</option>
                            <option value="gallon">Gallon/s</option>
                            <option value="milliliter">Milliliter/s</option>
                            <option value="liter">Liter/s</option>
                            <option value="pound">Pound/s</option>
                            <option value="ounce">Ounce/s</option>
                            <option value="gram">Gram/s</option>
                        </select>
                        <input id="ingredient" onChange={this.updateIngredients} type="text" value={this.state.ingredient} placeholder="Ingredient"></input>
                        <button id="addStep" onClick={this.addIngredient} type="button">Add More Steps</button>
                        <button id="submit" type="submit" onClick={this.goToRecipe}>Save</button>
                        <button className="cancel" onClick={this.goBack}>Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
})

export default IngredientContainer