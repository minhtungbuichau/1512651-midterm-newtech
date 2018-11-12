import * as Status from './../definition/status'
var initialState = false;

const starReducer = (state = initialState, action)=>{
    switch (action.type) {
        case Status.STAR:{
            state = !state;
            return {...state};
        }
        default:
            return state;
    }
     return state;
};

export default starReducer;