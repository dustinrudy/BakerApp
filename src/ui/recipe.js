import React from 'react'
import {Link, hashHistory} from 'react-router'
import {getRecipe, getInstructions, getIngredients} from 'api/api'
import store from 'store'


const RecipeContainer = React.createClass({
	getInitialState: function(){
		return{
			id: "",
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
					id: appState.recipe.id,
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
	
	render: function(){
	   console.log('state instructions', this.state.instructions)
		return (<RecipeProfile {...this.state} recipeId={this.state.id} />)
		} 
})
const RecipeProfile = React.createClass({
	goBack: function (e) {
		e.preventDefault()
		hashHistory.goBack()
	},
	nextStep: function(id) {
		hashHistory.push(`/adjustRecipe/${id}`)
	},
	render: function (){
		return(
			<div className="recipe">
				<div className="back">
					<button onClick={this.goBack}>Go Back</button>
				</div>
					<div className="profile">
							<h1 className="heading">{this.props.name}</h1>
							<img className="singleRecipe" src={this.props.image}/>
							<div className="bar"><p className="top">Recipe Type</p><p>{this.props.mealType}</p></div>
							<div className="bar"><p className="top">Prep Time</p><p>{this.props.prep_Time}</p></div>
							<div className="bar"><p className="top">Cook Time</p><p>{this.props.cook_Time}</p></div>
							<div className="bar"><p className="top">Cook Temp</p><p>{this.props.cook_Temp}</p></div>
							<table>
								<tbody>
								<tr>
									<td colSpan = "2">{this.props.portion} {this.props.portion_Type}<button className="adjust" onClick={() => this.nextStep(this.props.recipeId)}>Adjust</button></td>
								</tr>
			                {this.props.ingredients.map(item =>{
			                  return (
				                 <tr key={`ingred-${item.id}`}>
				                   	<td className="mainTd">{item.amount_Units} {item.units}</td>
				                    <td>{item.ingredient}</td>
				                 </tr>
			                      
			                    )
			                })} 
								</tbody>
							</table>
							<h2 className="steps_recipe">Steps</h2>
							{this.props.instructions.map(item =>{
								return (
									<p className="steps" key={`inst-${item.id}`}>{item.directions}</p>
									)
							})}
							<table className="bottomTable">
								<tbody>
									{this.props.ingredients.map(item =>{
										return(
										<tr className="tablerow" key={`ingr-${item.id}`}>
											<td className="mainTd">{item.amount_Units} {item.units}</td>
											<td>{item.ingredient}</td>
										</tr>
										)
									})}
										
								</tbody>
							</table>
							<div className="personal">
							<h3 className="steps_recipe">Personal Notes</h3>
							<p className="personal_recipe">{this.props.personalNotes}</p>
							</div>
							<div className="edit">
							<button className="edit_button" onClick={() => this.nextStep(this.props.recipeId)}>Edit</button>
							</div>
					</div>
			</div>
			
			)
	}
})

export default RecipeContainer