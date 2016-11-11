import axios from 'axios'
import store from 'store'
import {hashHistory} from 'react-router'

axios.defaults.baseURL = 'http://localhost:8001/'

export function getRecipes() {
	return axios.get("recipes").then(resp => {
		store.dispatch({
			type: 'GET_RECIPES',
			recipes: resp.data
		})
	})
}

export function getInstructions(recipeId) {
	return axios.get(`instructions?${recipeId}`).then(resp => {
		store.dispatch({
			type: 'GET_INSTRUCTIONS',
			ingredients: resp.data
		})
	}) 
}

export function getIngredients(instructionsId) {
	return axios.get(`ingredients?${instructionsId}`).then(resp => {
		store.dispatch({
			type: 'GET_INGREDIENTS',
			ingredients: resp.data
		})
	}) 
}

export function getRecipe(id) {
	return axios.get('recipes/' + id).then(resp => {
		store.dispatch({
			type: 'GET_RECIPE',
			recipe: resp.data
		}) 
	}) 
}
export function addIngredients(obj, id) {
	return axios.post("ingredients", obj).then(resp => {
		hashHistory.push(`/ingredients/${instructionsId}`)
	})
}


export function addInstructions (obj, id) {
	return axios.post("instructions", obj).then(resp => {
		hashHistory.push(`/ingredients/${id}`)
	})
}

export function addRecipe(obj, id) {
	return axios.post('recipes', obj).then(resp =>{
		hashHistory.push(`/ingredients/${id}`)
	})
}







