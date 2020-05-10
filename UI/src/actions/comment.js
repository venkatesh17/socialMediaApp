import * as types from '../constants/comments.js';
import axios from 'axios';

export const commentRequest =()=>{
    return {
        type: types.COMMENT_REQUEST
    }
}

export const commentSuccess =(comments)=>{
    return {
        type: types.COMMENT_SUCCESS,
        payload: comments
    }
}

export const commentFailure =(err)=>{
    return {
        type: types.COMMENT_FAILURE,
        payload: err
    }
}

export const getComments = (data)=>{
    return async function (dispatch) {
            dispatch(commentRequest)
            axios("http://localhost:5000/v1/socialmedia/getcomments?id="+data,{
                method: "GET",
                mode:"no-cors",
                headers: { 
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
                credentials: "same-origin"
        }).then(response=>{
            const commentData = response.data;
            dispatch(commentSuccess(commentData))
        }).catch(error=>{
            console.log("------------------error----------------", error.message);
            dispatch(commentFailure(error.message))
        })
    }
}