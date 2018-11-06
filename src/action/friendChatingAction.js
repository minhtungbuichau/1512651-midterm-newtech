import * as Types from '../definition/status';

export const selectedFrientChating = (selectedFriend)=>{
  return{
      type: Types.SELECTED_FRIEND_CHATING,
      selectedFriendChatting: selectedFriend,
  }
};

export const enteredTextAred = () =>{
  return{
      type: Types.SENDING_MESSAGE,
  }
};