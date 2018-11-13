import React,{Component} from 'react';
import  {connect} from 'react-redux';
<<<<<<< HEAD
import {getFirebase} from "react-redux-firebase";
import SignOut from './../SignOut';
import './../../css/chatform.css';
import  {setStarPeople} from './../../action/starAction';
class FriendChat extends Component{
    constructor(props) {
        super(props);
        this.state = {isStarFriend: false}
    }

    clickStar = () => {
        const {selectedFriendChatting} = this.props;
        getFirebase().ref("star").child(getFirebase().auth().currentUser.uid).child(selectedFriendChatting.key).update({
        isStarFriend: !selectedFriendChatting.isStarFriend
        });
        this.props.setStarPeople();
    }
=======
import SignOut from './../SignOut'
class FriendChat extends Component{
>>>>>>> parent of 93ed086... ok get image link
    render() {
        var {selectedFriendChatting} = this.props;
        return (
                <div className="chat-header clearfix">                
                    <img
                        src={selectedFriendChatting.avatarUrl}
                        alt="avatar"
                        className="avatar"
                    />
                    <div className="chat-about">
                        <div className="chat-with">Chat with  {selectedFriendChatting.displayName}</div>
                    </div> 
                    <i className="fas fa-star friend-chat-star" />
                </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        selectedFriendChatting: state.selectedFriendChatting,
    }
};
export default connect(mapStateToProps,null)(FriendChat);

