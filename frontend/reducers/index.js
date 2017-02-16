import {combineReducers} from 'redux'
import auth from './auth'
import contact from './contact'

const reducers = combineReducers({
    auth,
    contact
});

export default reducers
