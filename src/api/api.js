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

export function getSteps() {
	return axios.get("instructions").then(resp => {
		store.dispatch({
			type: 'GET_INSTRUCTIONS',
			instructions: resp.data
		})
	}) 
}

export function addSteps(obj, id) {
	return axios.post("instructions", obj).then(resp => {
		
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
		hashHistory.push(`/recipes/${id}`)
	})
}