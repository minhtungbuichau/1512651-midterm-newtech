import * as Status from './../definition/status'
import {getFirebase} from 'react-redux-firebase'
import {logout} from "../action/action";
const initialState = {};
const authReducer = (state = initialState, action)=>{
    switch (action.type) {
        case Status.LOGIN:
            return {...state};
        case Status.LOGIN_ERROR:
            return {...state,
            authError: 'Login failed'};
        case Status.LOGOUT:
                const firebase = getFirebase();
                firebase.auth().signOut();
            return{...state};
        default:
            return state;
    }

    return state;
};

export default authReducer;