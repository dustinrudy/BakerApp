import React from 'react'
import {Link, hashHistory} from 'react-router'
import store from 'store'
import {addRecipe} from 'api/api'


export default React.createClass({
    getInitialState: function(){
        return {
            "name":"",
            "image":"",
            "creator":"",
            "scope":"",
            "mealType":"",
            "prep_Time":"",
            "cook_Time":"",
            "cook_Temp":"",
            "degree_Units":"",
            "portion":"",
            "portion_Type":"",
            "amount_Units":"",
            "units":"",
            "ingredient":"",
            "directions":"",
            "personalNotes":""
        }
    },
    handleSubmit: function (e) {
        e.preventDefault()
        var obj = {
            name: this.state.name,
            image: this.state.image,
            creator:this.state.creator,
            scope: this.state.scope,
            mealType: this.state.mealType,
            prep_Time: this.state.prep_Time,
            cook_Time: this.state.cook_Time,
            cook_Temp: this.state.cook_Temp,
            degree_Units: this.state.degree_Units,
            portion: this.state.portion,
            portion_Type: this.state.portion_Type,
            amount_Units: this.state.amount_Units,
            units: this.state.units,
            ingredient: this.state.ingredient,
            directions: this.state.directions,
            personalNotes: this.state.personalNotes
        }
        addRecipe(obj)
    },
    update: function(e){
        var val = e.target.value
        var id = e.target.id
        var stateObj = {}
        stateObj[id] = val
        this.setState(stateObj)
    },
    goBack: function (e) {
        e.preventDefault()
        hashHistory.goBack()
    },
    render: function (){
        return(
            <div className='add_recipe'>
               
                <div className="createRecipe">
                <p id="basic_info">Basic Info</p>
                    <form onSubmit={this.handleSubmit}>
                        <input id="image" onChange={this.update} type="url" value={this.state.image} placeholder="Add Photo"></input>
                        <input id="name" onChange={this.update} type="text" value={this.state.name} placeholder="Recipe Name"></input>
                        <input id="creator" onChange={this.update} type="text" value={this.state.creator} placeholder="By"></input><br />
                        <input id="scope" onChange={this.update} type="checkbox" value={this.state.scope}></input><label> Public</label>
                        <input id="scope" onChange={this.update} type="checkbox" value={this.state.scope}></input><label> Private</label><br />
                        <select id="mealType" onChange={this.update} value={this.state.mealType}>
                            <option value={this.state.mealType}>Recipe Type</option>
                            <option value={this.state.mealType}>Breakfast</option>
                            <option value={this.state.mealType}>Lunch</option>
                            <option value={this.state.mealType}>Dinner</option>
                            <option value={this.state.mealType}>Dessert</option>
                        </select>
                        <input id="prep_Time" onChange={this.update} type="text" value={this.state.prep_Time} placeholder="Prep Time"></input>
                        <input id="cook_Time" onChange={this.update} type="text" value={this.state.cook_Time} placeholder="Cook Time"></input>
                        <input id="cook_Temp" onChange={this.update} type="" value={this.state.cook_Temp} placeholder="Cook Temp"></input>
                        <select id="degree_Units" onChange={this.update} value={this.state.degree_Units}>
                            <option value="Choose">F</option>
                            <option value="Choose">C</option>
                        </select>
                        <p className="make">This Recipe will make</p>
                        <input id="portion" onChange={this.update} type="text" value={this.state.portion} placeholder="Amount"></input>
                        <input id="portion_Type" onChange={this.update} type="" value={this.state.portion_Type} placeholder="cookie, loaves, etc"></input>
                        <p>Step 1</p>
                        <input id="amount_Units" onChange={this.update} type="text" value={this.state.amount_Units} placeholder="2"></input>
                        <select id="units" onChange={this.update} value={this.state.units}>
                            <option value="Choose">Cup/s</option>
                            <option value="Choose">Teaspoon/s</option>
                            <option value="Choose">Tablspoon/s</option>
                            <option value="Choose">Fluid ounce/s</option>
                            <option value="Choose">Pint/s</option>
                            <option value="Choose">Quart/s</option>
                            <option value="Choose">Gallon/s</option>
                            <option value="Choose">Milliliter/s</option>
                            <option value="Choose">Liter/s</option>
                            <option value="Choose">Pound/s</option>
                            <option value="Choose">Ounce/s</option>
                            <option value="Choose">Gram/s</option>
                        </select>
                        <input id="ingredient" onChange={this.update} type="text" value={this.state.ingredient} placeholder="Ingredient"></input>
                        <button id="decrease" type="button">-</button>
                        <input id="amount_Units" onChange={this.update} type="text" value={this.state.amount_Units} placeholder="2"></input>
                        <select id="units" onChange={this.update} value={this.state.units}>
                            <option value="Choose">Cup/s</option>
                            <option value="Choose">Teaspoon/s</option>
                            <option value="Choose">Tablspoon/s</option>
                            <option value="Choose">Fluid ounce/s</option>
                            <option value="Choose">Pint/s</option>
                            <option value="Choose">Quart/s</option>
                            <option value="Choose">Gallon/s</option>
                            <option value="Choose">Milliliter/s</option>
                            <option value="Choose">Liter/s</option>
                            <option value="Choose">Pound/s</option>
                            <option value="Choose">Ounce/s</option>
                            <option value="Choose">Gram/s</option>
                        </select>
                        <input id="ingredient" onChange={this.update} type="text" value={this.state.ingredient} placeholder="Ingredient"></input>
                        <button id="increase" type="button">+</button>
                        <textarea id="directions" onChange={this.update} rows="4" cols="50" value={this.state.directions} placeholder="What directions go with this step?"/>
                        <button id="addStep" type="button">Add another step</button>
                        <p className="personal">Personal Notes</p>
                        <textarea id="personalNotes" onChange={this.update} rows="4" cols="50" value={this.state.personalNotes}></textarea>
                        <button id ="submit" type="submit">Save</button>
                    	<button className="cancel" onClick={this.goBack}>Cancel</button>
                    </form>
                </div>
            </div>
        )
    }
})