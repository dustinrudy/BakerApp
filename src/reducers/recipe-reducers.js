const defaultState = {
	recipes: [],
	recipe: {},
	instructions: [],
	ingredients: []
}

export default function(state = defaultState, action){
	switch(action.type) {
		case 'GET_RECIPES':
			return {...state, recipes: action.recipes}
		case 'GET_RECIPE': 
			return {...state, recipe: action.recipe}
		case 'GET_INSTRUCTIONS': 
			return {...state, instructions: action.instructions}
		case 'GET_INGREDIENTS':
			return {...state, ingredients: action.ingredients}
		default: 
			return state 
	} 
}