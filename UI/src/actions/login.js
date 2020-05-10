import * as types from '../constants/login.js'
import axios from 'axios';

export const loginUserRequest = ()=>{
    return { 
        type: types.LOGIN_REQUEST
    }
}

export const loginUserSuccess = (user)=>{
    return {
        type: types.LOGIN_SUCCESS,
        payload: user
    }
}

export const loginUserFailure = (err)=>{
    return {
        type: types.LOGIN_FAILURE,
        payload: err
    }
}

export const loginUser =(userName, password)=>{
    return async function(dispatch){
        console.log(userName, password)
        dispatch(loginUserRequest())

        axios("http://localhost:5000/v1/socialmedia/getlogin?id="+userName+"&password="+password,{
            method: "GET",
            mode: "no-cors",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            },
            credentials:"same-origin"
        }).then(response=>{
            const userId = response.data; 
            dispatch(loginUserSuccess(userId))
        }).catch(err =>{
                console.log("------err----------", err.message);
                dispatch(loginUserFailure())                
        })
    }
}

