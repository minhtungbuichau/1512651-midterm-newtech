import * as Status from '../definition/status';

export const selectedFriendChating = (selectedFriend)=>{
  return{
      type: Status.SELECT_FRIEND_CHAT,
      selectedFriendChatting: selectedFriend,
  }
};
export const enteredTextAred = () =>{
  return{
      type: Status.SENDING_MESSAGE,
  }
};

