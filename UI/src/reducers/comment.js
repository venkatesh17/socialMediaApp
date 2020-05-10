import * as types from "../constants/comments.js"

const initialState ={
    loading: false,
    users:[],
    err:''
}

const getCommentReducer = (state=initialState, action)=>{
    switch (action.type) {
        case types.COMMENT_REQUEST:
            return {
                ...state,
                loading:true
            }
        
        case types.COMMENT_SUCCESS:
            return {
                loading:false,
                users:action.payload,
                err:''
            }
        case types.COMMENT_FAILURE:
            return {
                loading: false,
                users:[],
                err:action.payload
            }
        default:
            return state;
    }
}

export default getCommentReducer;