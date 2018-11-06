import * as Status from './../definition/status'
var initialState = false;
var myReducer = (state=initialState, action)=>{
    switch (action.type) {
        case Status.LOGIN:
            state = true;
            return state;

        case Status.LOGOUT:
            state = false;
            return state;
        default:
            return state;
    }
};

export default myReducer;