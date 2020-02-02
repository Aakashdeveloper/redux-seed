import { combineReducers } from 'redux';
import movies from './movies_reducers'

const rootReducers = combineReducers({
    movies
})

export default rootReducers