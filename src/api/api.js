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

export function getRecipe(Id) {
	return axios.get('recipe/' + Id).then(resp => {
		store.dispatch({
			type: 'GET_RECIPE',
			recipes: resp.data
		})
	})
}

export function addRecipe(obj) {
	return axios.post('/recipes', obj).then(resp =>{
		hashHistory.push(`/recipes/${id}`)
	})
}