import { combineReducers } from 'redux'
import spaces from './spaces'
import filters from './filters'

const reducers = combineReducers({
	spaces,
	filters
});

export default reducers;