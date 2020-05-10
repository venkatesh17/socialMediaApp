import * as types from '../constants/profile.js'

const initialState = {
    loading: false,
    profile:[],
    err:""
}


const profileReducer = (state = initialState, action)=>{
    switch (action.type) {
        case types.PROFILE_REQUEST:
            return{
                ...state,
                loading: true
            }
        case types.PROFILE_SUCCESS:
            return {
                loading: false,
                profile: action.payload
            }
        case types.PROFILE_FAILURE:
            return {
                loading: false,
                err: action.payload
            }
    
        default:
            return state
    }
}

export default profileReducer;