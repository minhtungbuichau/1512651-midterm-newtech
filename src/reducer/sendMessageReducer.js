import * as Status from './../definition/status';
var initialMessage = false;
const sendingMessage = (state = initialMessage, action) =>{
    switch (action.type) {
        case Status.SENDING_MESSAGE:
            state = !state;
            return {...state};

            default:
            return {...state};
    }

    return state;
};

export default sendingMessage;
