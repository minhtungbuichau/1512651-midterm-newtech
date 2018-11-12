import React,{Component} from 'react';
import  {connect} from 'react-redux';
import {getFirebase} from "react-redux-firebase";
import SignOut from './../SignOut';
import './../../css/chatform.css';
import  {setStarPeople} from './../../action/starAction';//onChangeFriendtarState
class FriendChat extends Component{
    constructor(props) {
        super(props);
        this.state = {isStarFriend: false}
    }

    clickStar = () => {
        const {selectedFriendChatting} = this.props;
        getFirebase().ref("starState").child(getFirebase().auth().currentUser.uid).child(selectedFriendChatting.key).update({
        isStarFriend: !selectedFriendChatting.isStarFriend
        });
        this.props.setStarPeople();
    }
    render() {
        
        const {selectedFriendChatting} = this.props;
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
                    <i className={selectedFriendChatting.isStarFriend ? "fas fa-star star-button" : "fas fa-star" } onClick = {this.clickStar}/>
                </div>
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setStarPeople: () => {
            dispatch(setStarPeople());
        }
    }
}

const mapStateToProps = (state)=>{
    return{
        selectedFriendChatting: state.selectedFriendChatting,
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(FriendChat);

