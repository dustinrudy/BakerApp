const defaultState = {
	recipes: [],
}

export default function(state = defaultState, action){
	switch(action.type) {
		case 'GET_RECIPES':
			return {...state,recipes: action.recipes}
	} 
}