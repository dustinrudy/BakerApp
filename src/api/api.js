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

export function getIngredients(instructionId) {
	return axios.get(`ingredients?instructionId=${instructionId}`).then(resp => {
		console.log('getIngredients()', resp.data)
		store.dispatch({
			type: 'GET_INGREDIENTS',
			ingredients: resp.data
		})
	}) 
}

export function getInstructions(recipeId) {
	return axios.get(`instructions?recipeId=${recipeId}`).then(resp => {
		store.dispatch({
			type: 'GET_INSTRUCTIONS',
			instructions: resp.data
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



export function addRecipe(obj, id) {
	return axios.post('recipes', obj).then(resp =>{
		hashHistory.push("/instructions/" + resp.data.id)
	})
}

export function addInstructions(obj) {
	return axios.post("instructions", obj).then(resp => {
		// getInstructions(obj.recipeId).then(resp2 => {
		// 	store.dispatch ({
		// 		type: 'ADD_INSTRUCTION',
		// 		instruction: resp2.data
		// 	})
		hashHistory.push('/ingredients/' + resp.data.id)
		})
	} 

export function addIngredients(obj) {
	return axios.post("ingredients", obj).then(resp => {
		// getIngredients(obj.instructionId).then(resp2 => {
		// 	store.dispatch({
		// 		type: 'ADD_INGREDIENT',
		// 		ingredient: resp2.data
		// 	})
		hashHistory.push('/instructions/' + resp.data.id)
		})
	}







