import {createStore} from 'redux'
import recipeReducer from 'reducers/recipe-reducers'


const store = createStore(recipeReducer)

export default store 