const defaultState = {
	recipes: [],
	recipe: {}
}

export default function(state = defaultState, action){
	switch(action.type) {
		case 'GET_RECIPES':
			return {...state,recipes: action.recipes}
		case 'GET_RECIPE': 
			return {...state,recipe: action.recipes}
	} 
}