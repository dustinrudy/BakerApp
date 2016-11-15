import React from 'react'
import {Link, hashHistory} from 'react-router'
import {getRecipe, putRecipe}from 'api/api'
import store from 'store'

export default React.createClass({
    getInitialState: function(){
        return {
        	"name": "",
            "image": "",
            "creator": "",
            "scope": "",
            "mealType": "",
            "prep_Time": "",
            "cook_Time": "",
            "cook_Temp": "",
            "degree_Units": "",
            "portion": "",
            "portion_Type": "",
            "personalNotes": ""
        }
    },
    componentWillMount: function(){
    	getRecipe(this.props.params.id)
    	this.unsubscribe = store.subscribe(()=>{
			const appState = store.getState()
				this.setState({
					name:appState.recipe.name,
	        		image:appState.recipe.image,
	        		creator:appState.recipe.creator,
	        		scope:appState.recipe.scope,
	        		mealType:appState.recipe.mealType,
	        		prep_Time:appState.recipe.prep_Time,
	        		cook_Time:appState.recipe.cook_Time,
	        		cook_Temp:appState.recipe.cook_Temp,
	        		degree_Units:appState.recipe.degree_Units,
	        		portion:appState.recipe.portion,
	        		portion_Type:appState.recipe.portion_Type,
	        		personalNotes:appState.recipe.personalNotes,
	        		instructions: appState.instructions,
	        		ingredients: appState.ingredients
		 	}) 
	      console.log("appstate instructions",appState.instructions)
		})
	},
	componentWillUnmount: function() {
		this.unsubscribe()
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
    render: function (){
        return(
            <div className='add_recipe'>
               
                <div className="createRecipe">
                <p id="basic_info">Adjust Recipe</p>
                    <form onSubmit={this.handleSubmit}>
                        <input id="image" onChange={this.update} type="url" value={this.state.image} placeholder="Add Photo"></input>
                        <input id="name" onChange={this.update} type="text" value={this.state.name} placeholder="Recipe Name"></input>
                        <input id="creator" onChange={this.update} type="text" value={this.state.creator} placeholder="By"></input><br />
                        <input id="scope" name="scope" onChange={this.update} type="radio" value="public"></input><label> Public</label>
                        <input id="scope" name="scope" onChange={this.update} type="radio" value="private"></input><label> Private</label><br />
                        <select id="mealType" onChange={this.update} value={this.state.mealType}>
                            <option value="initial">Recipe Type</option>
                            <option value="breakfast">Breakfast</option>
                            <option value="lunch">Lunch</option>
                            <option value="dinner">Dinner</option>
                            <option value="dessert">Dessert</option>
                        </select>
                        <input id="prep_Time" onChange={this.update} type="text" value={this.state.prep_Time} placeholder="Prep Time"></input>
                        <input id="cook_Time" onChange={this.update} type="text" value={this.state.cook_Time} placeholder="Cook Time"></input>
                        <input id="cook_Temp" onChange={this.update} type="" value={this.state.cook_Temp} placeholder="Cook Temp"></input>
                        <select id="degree_Units" onChange={this.update} value={this.state.degree_Units}>
                            <option value="f">F</option>
                            <option value="c">C</option>
                        </select>
                        <p className="make">This Recipe Will Make:</p>
                        <input id="portion" onChange={this.update} type="text" value={this.state.portion} placeholder="Amount"></input>
                        <input id="portion_Type" onChange={this.update} type="" value={this.state.portion_Type} placeholder="cookie, loaves, etc"></input>
                        <addInstructions /> 
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