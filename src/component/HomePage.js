import React, { Component } from 'react'
import './../css/chatform.css'
import  {getFirebase} from 'react-redux-firebase';
import ChatTab from "./rightColumn/ChatTab";
import {connect} from 'react-redux';
import ListFriend from "./../component/leftColumn/ListFriend";
import FontAwesome from './../definition/font-awesome';
class HomePage extends Component {
    render() {
        var {selectedFriendChatting} = this.props;
        var chatBox = selectedFriendChatting.key? <ChatTab/> : '';
        return (
            <div>
                <FontAwesome/>              
                <div className="container clearfix">
                    <ListFriend/>
                    {chatBox}
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