import { combineReducers } from 'redux'

import getLoginReducer from './login.js'
import profileReducer from './profile.js'
import getCommentReducer from './comment.js'


export default combineReducers({
    getLoginReducer, profileReducer, getCommentReducer
})