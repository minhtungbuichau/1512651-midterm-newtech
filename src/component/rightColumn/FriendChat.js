import React,{Component} from 'react';
import  {connect} from 'react-redux';
import SignOut from './../SignOut'
class FriendChat extends Component{
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
                    <i className="fas fa-star" />
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

