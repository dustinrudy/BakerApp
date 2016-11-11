import React from 'react'
import {Link, hashHistory} from 'react-router'
import store from 'store'
import {addIngredients} from 'api/api'


export default React.createClass({
    getInitialState: function(){
        return {
            "amount_Units":"",
            "units":"",
            "ingredient":""
            
        }
    },
    handleSubmit: function (e) {
        e.preventDefault()
        var obj = {
            amount_Units: this.state.amount_Units,
            units: this.state.units,
            ingredient: this.state.ingredient
            
        }
        addIngredients(obj)

    },

    updateIngredients: function(e){

        var val = e.target.value
        console.log(val)
        var id = e.target.id
        var stateObj = {}
        stateObj[id] = val
        this.setState(stateObj)
    },
    render: function (){
        return(
            <div className='add_ingredients'>
               
                <div className="createIngredients">
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
                </div>
            </div>
        )
    }
})