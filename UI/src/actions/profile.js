import * as types from '../constants/profile.js'
import axios from 'axios'


export const profileRequest =()=>{
    return {
        type:types.PROFILE_REQUEST
    }
}

export const profileSuccess=(profile)=>{
    return {
        type: types.PROFILE_SUCCESS,
        payload: profile
    }
}

export const profileFailue=(err)=>{
    return {
        type: types.PROFILE_FAILURE,
        payload: err
    }
}

export const getProfile=(data)=>{
    return async function(dispatch){
        dispatch(profileRequest())

        axios("http://localhost:5000/v1/socialmedia/getprofile?id="+data,{
            method: "GET",
            mode:"no-cors",
            headers: { 
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            },
            credentials: "same-origin"
        }).then(response=>{
            const profileData = response.data;
            dispatch(profileSuccess(profileData))
        }).catch(error=>{
            console.log("------------------error----------------", error.message);
            dispatch(profileFailue(error.message))
        })
    }
}