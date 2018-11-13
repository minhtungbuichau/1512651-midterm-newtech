import React,{Component} from 'react';
import FriendItem from "./FriendItem";
import {firebaseConnect,getFirebase} from 'react-redux-firebase';
import Firebase from 'firebase';
import {connect} from 'react-redux';
import {compose} from 'redux';
import SignOut from './../SignOut';
import Search from './Search';
class ListFriend extends Component {

    render() {
<<<<<<< HEAD
        var {users,star,isStarFriend} = this.props;
=======
        var {users} = this.props;
>>>>>>> parent of 93ed086... ok get image link
        var userElement = [];
        if (typeof users !== 'undefined' && users !== null){
            var authUid = this.props.firebase.auth().currentUser.uid;
            var userKeys = Object.keys(users);
            console.log(userKeys);
            var icon = 'online';
            var text = 'online';
            for(var i = 0; i < userKeys.length; i++){
                if(userKeys[i] !== authUid) {
                    var user = users[userKeys[i]];
                    user.key = userKeys[i];
<<<<<<< HEAD
                    if (star != null && typeof star!=="undefined" && typeof star[userKeys[i]]!=="undefined"){
                        user.isStarFriend = star[userKeys[i].isStarFriend];
                    }
=======
                    
>>>>>>> parent of 93ed086... ok get image link
                    // handle online - offline
                    var online = users[userKeys[i]].connection;
                    console.log(online);
                    if(!online) {
                        text = 'left ';
                        icon = 'offline';//font awesome fa-circle-offline
                        var lastOnline = 0;
                        if (users[userKeys[i]].lastOnline != null){
                            lastOnline = parseInt(users[userKeys[i]].lastOnline);
                            console.log(lastOnline);
                        } 
                        var date = new Date(null);
                        date.setMilliseconds(new Date().getTime() - lastOnline); // specify value for SECONDS here
                        var timeString = date.toISOString().substr(11, 8);
                        var timeUnix = timeString.split(':');
                        if(timeUnix[0].trim() !== "00") {
                            text += ( parseInt(timeUnix[0].trim()) + "  hours ago");
                        } else if(timeUnix[1].trim() !== "00") {
                            text += ( parseInt(timeUnix[1].trim()) + "  minutes ago");
                        } else {
                            text += ( parseInt(timeUnix[2].trim()) + "  seconds ago");
                        }
                    }
                    userElement.push(
                        <FriendItem
                            key={userKeys[i]}
                            userData={user}
                            icon={icon} 
                            text={text}
<<<<<<< HEAD
                            star = {star}
=======
>>>>>>> parent of 93ed086... ok get image link
                        />
                    );
                }
            }
        }      
        return (
            <div className="people-list">
                <Search/>
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
<<<<<<< HEAD
      isStarFriend: state.isStarFriend,
      star: getVal(state.firebase.data, 'star/' + getFirebase().auth().currentUser.uid)
=======
>>>>>>> parent of 93ed086... ok get image link
  };
};
export default compose(firebaseConnect([
    'users',
<<<<<<< HEAD
    'star/' + getFirebase().auth().currentUser.uid,
=======
>>>>>>> parent of 93ed086... ok get image link
]),connect(mapStateToProps,null))(ListFriend);

