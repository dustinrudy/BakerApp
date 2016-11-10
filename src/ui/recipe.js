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
			
			this.unsubscribe = store.subscribe(()=>{
				const appState = store.getState()
					this.setState({
						recipe: appState.recipe,
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