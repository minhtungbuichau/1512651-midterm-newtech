import React,{Component} from 'react';
import FriendItem from "./FriendItem";
import {firebaseConnect,getFirebase} from 'react-redux-firebase';
import {connect} from 'react-redux';
import {compose} from 'redux';
import SignOut from './../SignOut';
class ListFriend extends Component {

    render() {
        var {users} = this.props;
        var userElement = [];
        if (typeof users !== 'undefined' && users !== null){
            var authUid = this.props.firebase.auth().currentUser.uid;
            var userKeys = Object.keys(users);
            for(var index = 0; index < userKeys.length; index++){
                if(userKeys[index] !== authUid) {
                    var user = users[userKeys[index]];
                    user.key = userKeys[index];
                    userElement.push(
                        <FriendItem
                            key={userKeys[index]}
                            userData={user}
                        />
                    );
                }
            }
        }
        return (
            <div className="people-list">
                <div className="search">
                    <input type="text" placeholder="search" />
                    <i className="fas fa-search" />
                </div>
                <ul className="list">
                    {userElement}
                </ul>
                <SignOut/>
            </div>

        );
    }
}

var mapStateToProps = (state) =>{
  return{
      users: state.firebase.data.users,
  };
};
export default compose(firebaseConnect([
    'users',
]),connect(mapStateToProps,null))(ListFriend);

