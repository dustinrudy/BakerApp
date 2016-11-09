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
				personalNotes:""
			}
		}
	},
	componentWillMount: function(){
		getRecipe(this.props.params.id)
		getSteps(this.props.params.id)
			
			this.unsubscribe = store.subscribe(()=>{
				const appState = store.getState()
					this.setState({
						recipe: appState.recipe,
						instructions: appState.instructions
			})
		})
	},
	componentWillUnmount: function() {
		this.unsubscribe()
	},

	render: function(){
		return (
				<RecipeProfile recipe={this.state.recipe} />
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
							<div className="bar"><p>Recipe Type</p><p>{this.props.recipe.mealType}</p></div>
							<div className="bar"><p>Prep Time</p><p>{this.props.recipe.prep_Time}</p></div>
							<div className="bar"><p>Cook Time</p><p>{this.props.recipe.cook_Time}</p></div>
							<div className="bar"><p>Cook Temp</p><p>{this.props.recipe.cook_Temp}</p></div>

							<table>
							<tbody>
								<tr>
									<th>{this.props.recipe.portion}{this.props.recipe.portion_Type}</th>
									<th><button>Adjust</button></th>
								</tr>

								<tr>
									<td>{this.props.instructions.amount_Units}{this.props.instructions.units}</td>
									<td>{this.props.recipe.ingredients}</td>
								</tr>
								<tr>
									<td>{this.props.instructions.amount_Units}{this.props.instructions.units}</td>
									<td>{this.props.instructions.ingredients}</td>
								</tr>
								<tr>
									<td>{this.props.instructions.amount_Units}{this.props.instructions.units}</td>
									<td>{this.props.instructions.ingredients}</td>
								</tr>
								<tr>
									<td>{this.props.instructions.amount_Units}{this.props.instructions.units}</td>
									<td>{this.props.instructions.ingredients}</td>
								</tr>
							</tbody>
							</table>
							<p>Step 1</p>
							<p>{this.props.instructions.directions}</p>
							<div>{this.props.instructions.amount_Units}{this.props.instructions.units}</div>
							<div>{this.props.instructions.amount_Units}{this.props.instructions.units}</div>
							<div>{this.props.instructions.amount_Units}{this.props.instructions.units}</div>
							<div>{this.props.instructions.ingredients}</div>
							<div>{this.props.instructions.ingredients}</div>
							<div>{this.props.instructions.ingredients}</div>
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