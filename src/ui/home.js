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
			<div className="container_home">
				<Link to="/addrecipe/"><div className="recipes">Add Recipe</div></Link>
				{this.props.recipes.map(recipe => {
					return (
					<div key={recipe.image}>
						<Link to={"/recipe/" + recipe.id}><div className="recipes">
						<img className="coverphoto" src={recipe.image}/>
						<p>{recipe.name}</p>
						</div></Link>
					</div>
					)}
				)}
				{this.props.recipes.map(recipe => {
					return (
						<div key={recipe.image}>
							<Link to={"/recipe/" + recipe.id}><div className="recipes">
							<img className="coverphoto" src={recipe.image}/>
							<p>{recipe.name}</p>
							</div></Link>
						</div>
					)}
				)}
			</div>
		)}
	})

export default homeContainer

