import * as Status from '../definition/status';

const initialState = {};
const friendChatingReducer = (state = initialState, action)=>{
    switch (action.type) {
        case Status.SELECT_FRIEND_CHAT:
            state = action.selectedFriendChatting;
            return{...state};
        default:
            return state;
    }
    return state;
};

export default friendChatingReducer;