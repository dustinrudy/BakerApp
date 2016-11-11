import React from 'react'
import {Link, hashHistory} from 'react-router'
import {getRecipe, getInstructions, getIngredients} from 'api/api'
import store from 'store'


const RecipeContainer = React.createClass({
	getInitialState: function(){
		return{
			name:"",
			image:"",
			creator:"",
			scope:"",
			mealType:"",
			prep_Time:"",
			cook_Time:"",
			cook_Temp:"",
			degree_Units:"",
			portion:"",
			portion_Type:"",
			personalNotes:"",
      instructions: [],
      ingredients: []
		}
	},
	componentWillMount: function(){
		getRecipe(this.props.params.id)
    getIngredients(this.props.params.id)
    getInstructions(this.props.params.id)

			
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
      console.log(appState.ingredients)
		})
	},
	componentWillUnmount: function() {
		this.unsubscribe()
	},

	render: function(){
    console.log('state ingredients', this.state.ingredients)
		return (
				<RecipeProfile {...this.state} />

			)
	} 
})
const RecipeProfile = React.createClass({
	goBack: function (e) {
		e.preventDefault()
		hashHistory.goBack()
	},
	render: function (){
		return(
				<div className="recipe">
					<div className="back">
						<button onClick={this.goBack}>Go Back</button>
					</div>
						<div className="profile" >
							<h1>{this.props.name}</h1>
							<img className="singleRecipe" src={this.props.image}/>
							<div className="bar"><p className="top">Recipe Type</p><p>{this.props.mealType}</p></div>
							<div className="bar"><p className="top">Prep Time</p><p>{this.props.prep_Time}</p></div>
							<div className="bar"><p className="top">Cook Time</p><p>{this.props.cook_Time}</p></div>
							<div className="bar"><p className="top">Cook Temp</p><p>{this.props.cook_Temp}</p></div>
							<table>
							<tbody>
								<tr>
									<td>{this.props.portion}{this.props.portion_Type}</td>
									<td><button>Adjust</button></td>
								</tr>
                {this.props.ingredients.map(item =>{
                  return (
                  <tr>
                    <td>{item.amount_Units} {item.units}</td>
                    <td>{item.ingredient}</td>
                  </tr>
                      
                    )
                })} 
							</tbody>
							</table>
							<p>Personal Notes</p>
							<p>{this.props.personalNotes}</p>
							<p>Edit this recipe</p>
							<button>Start</button>
						</div>
				</div>
			
			)
	}
})

export default RecipeContainer