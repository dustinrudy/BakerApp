import React from 'react'
import {Link, hashHistory} from 'react-router'
import {getRecipe, getSteps} from 'api/api'
import store from 'store'


const RecipeContainer = React.createClass({
	getInitialState: function(){
		return{
			recipe: {
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
		}
	},
	componentWillMount: function(){
		getRecipe(this.props.params.id)
			
			this.unsubscribe = store.subscribe(()=>{
				const appState = store.getState()
					this.setState({
						recipe: appState.recipe,
            instructions: appState.instructions,
            ingredients: appState.ingredients
			})
		})
	},
	componentWillUnmount: function() {
		this.unsubscribe()
	},

	render: function(){
		return (
				<RecipeProfile recipe={this.state.recipe} instructions={this.state.instructions} ingredients={this.state.ingredients} />
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
							<h1>{this.props.recipe.name}</h1>
							<img className="singleRecipe" src={this.props.recipe.image}/>
							<div className="bar"><p className="top">Recipe Type</p><p>{this.props.recipe.mealType}</p></div>
							<div className="bar"><p className="top">Prep Time</p><p>{this.props.recipe.prep_Time}</p></div>
							<div className="bar"><p className="top">Cook Time</p><p>{this.props.recipe.cook_Time}</p></div>
							<div className="bar"><p className="top">Cook Temp</p><p>{this.props.recipe.cook_Temp}</p></div>

							<table>
							<tbody>
								<tr>
									<td>{this.props.recipe.portion}{this.props.recipe.portion_Type}</td>
									<td><button>Adjust</button></td>
								</tr>
                <tr>
                  <td>{this.props.ingredients.amount_Units} {this.props.ingredients.units}</td>
                  <td>{this.props.ingredients.ingredient}</td>
                </tr>
                <tr>
                </tr>
                <tr>
                </tr>
                <tr>
                </tr>
                <tr>
                </tr>

								
							</tbody>
							</table>
							<p>Personal Notes</p>
							<p>{this.props.recipe.personalNotes}</p>
							<p>Edit this recipe</p>
							<button>Start</button>
						</div>
				</div>
			
			)
	}
})

export default RecipeContainer