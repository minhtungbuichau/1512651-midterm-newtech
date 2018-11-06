import React, { Component } from 'react'
import './../css/chatform.css'
import  {getFirebase} from 'react-redux-firebase';
import ChatTab from "./rightColumn/ChatTab";
import {connect} from 'react-redux';
import ListFriend from "./../component/leftColumn/ListFriend";
import FriendChatingNav from "./rightColumn/FriendChatingNav";
class HomePage extends Component {
    render() {
        var {selectedFriendChatting} = this.props;
        var chatTabElm = selectedFriendChatting.key? <ChatTab/> : '';
        return (
            <div>
                <div>
                    <div className="container clearfix">
                        <ListFriend/>
                        {chatTabElm}
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        selectedFriendChatting: state.selectedFriendChatting,
    }
};

export default connect(mapStateToProps,null)(HomePage);