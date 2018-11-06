import React,{Component} from 'react';
import  {connect} from 'react-redux'
import FriendChat from "./FriendChat";
import MessageItem from "./MessageItem";
import {compose} from 'redux';
import ListMessage from "./ListMessage";
import Text from "./Text";

class ChatTab extends Component{
    render() {
        return (
            <div className="chat">
                <FriendChat/>
                <ListMessage/>
                <Text/>
            </div>
        );
    }
}


var mapSateToProps = (state) =>{
    return{
        selectedFriendChatting: state.selectedFriendChatting,
    };
};

export default connect(mapSateToProps)(ChatTab);

