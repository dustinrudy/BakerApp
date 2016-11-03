import React from 'react'
import { Link, hashHistory} from 'react-router';
import {getRecipes} from 'api/api'
import store from 'store'

const homeContainer = React.createClass({
	getInitialState: function() {
		return {
			recipes: []
		}
	},
	componentWillMount: function() {
		getRecipes()

		this.unsubscribe = store.subscribe(() =>{
			const appState = store.getState()
			this.setState ({
				recipes: appState.recipes
			})
		})
	},
	componentWillUnmount: function() {
		this.unsubscribe()
	},
	render: function () {
		return (
			<Home recipes={this.state.recipes} />
		)
	}
})

const Home = React.createClass({
	render: function () {
		return (
			<div>
				<div className="recipes">Add Recipe</div>
				{this.props.recipes.map(recipe => {
					return (
						<div className="recipes">
						<img className="coverphoto" src={recipe.image}/>
						<p>{recipe.name}</p>
						</div>
					)}
				)}
				{this.props.recipes.map(recipe => {
					return (
						<div className="recipes">
						<img className="coverphoto" src={recipe.image}/>
						<p>{recipe.name}</p>
						</div>
					)}
				)}
			</div>
		)}
	})

export default homeContainer

