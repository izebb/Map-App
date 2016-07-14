import { combineReducers } from 'redux'
import spaces from './spaces'
import filters from './filters'


//combine both reducer 
const reducers = combineReducers({
	spaces,
	filters
});

export default reducers;