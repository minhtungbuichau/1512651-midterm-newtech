import React,{Component} from 'react';
import  {connect} from 'react-redux'
import FriendChat from "./FriendChat";
import MessageItem from "./MessageItem";
import {compose} from 'redux';
import ListMessage from "./ListMessage";
import {generateID} from './../../definition/randomID';
import {getFirebase} from "react-redux-firebase";

class Text extends Component{
    constructor(props) {
        super(props);
        this.state = {
            content: '',
        }
    }
    onChange = (event) =>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value,
        });
    };

    onSendImage = () => {}
    onSendMessage = (databaseURL,friendDatabaseURL) =>{
        var {content} = this.state;
        getFirebase().database().ref('/persistenceValue/total')
            .once('value').then(function(snapshot) {
               var total = snapshot.val();
            getFirebase().database().ref('/persistenceValue').update({
                total: total + 1,
            });
            getFirebase().database().ref(databaseURL+'/' + generateID() + '/message').set({
                index: total + 1,
                content:content,
                time: getCurrentTime(),
                type: 'auth',
            });

            getFirebase().database().ref(friendDatabaseURL+'/' + generateID() + '/message').set({
                index: total + 1,
                content:content,
                time: getCurrentTime(),
                type: 'friend',
            });
        });
       
       
    };
    render() {
        var {selectedFriendChatting} = this.props;
        var listMessagesFirebaseURL = '';
        var listMessagesFirebaseURLForFriend= '';
        if(selectedFriendChatting.key) {
            listMessagesFirebaseURL = 'users/' + getFirebase().auth().currentUser.uid + '/ListMessages/' + selectedFriendChatting.key;
            listMessagesFirebaseURLForFriend = 'users/' + selectedFriendChatting.key + '/ListMessages/' + getFirebase().auth().currentUser.uid ;
        }
        return (
            <div className="chat-message clearfix">
                <textarea name="content" id="message-to-send" placeholder="Type your message" rows={3} defaultValue={""} onChange={this.onChange} />
                <i className="far fa-images send-image-icon" onClick={()=>this.onSendImage()} />
                <button onClick={() =>this.onSendMessage(listMessagesFirebaseURL,listMessagesFirebaseURLForFriend)}>Send</button>
            </div>
        );
    }
}
const getCurrentTime = ()=>{
    return (new Date()).toLocaleString();
};
const mapStateToProps = (state)=>{
    return{
        selectedFriendChatting: state.selectedFriendChatting,
    }
};
export default connect(mapStateToProps)(Text);

