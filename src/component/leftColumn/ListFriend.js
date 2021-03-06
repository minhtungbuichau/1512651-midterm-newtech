import React,{Component} from 'react';
import FriendItem from "./FriendItem";
import {firebaseConnect,getFirebase,getVal} from 'react-redux-firebase';
import Firebase from 'firebase';
import {connect} from 'react-redux';
import {compose} from 'redux';
import SignOut from './../SignOut';
import Search from './Search';
import friendChatingReducer from '../../reducer/friendChatingReducer';
class ListFriend extends Component {

    constructor(props) {
        super(props);
        
    }
    
    render() {
        var {users,star,isStarFriend} = this.props;
        var userElement = [];
        if (typeof users !== 'undefined' && users !== null){
            var authUid = this.props.firebase.auth().currentUser.uid;
            var userKeys = Object.keys(users);
            var icon = 'online';
            var text = 'online';
            for(var i = 0; i < userKeys.length; i++){
                if(userKeys[i] !== authUid) {
                    var user = users[userKeys[i]];
                    user.key = userKeys[i];
                    if (star != null && typeof star!=="undefined" && typeof star[userKeys[i]]!=="undefined"){
                        user.isStarFriend = star[userKeys[i].isStarFriend];
                    }
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
                            star = {star}
                        />
                    );
                }
            }
            userElement.sort((friendA,friendB) => {
                if(friendA.isStarFriend && !friendB.isStarFriend) return -1;
                return 1;
            })
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
      isStarFriend: state.isStarFriend,
      star: getVal(state.firebase.data, 'star/' + getFirebase().auth().currentUser.uid)
  };
};
export default compose(firebaseConnect((props) => [
    'users',
    'star/' + getFirebase().auth().currentUser.uid,
]),connect(mapStateToProps,null))(ListFriend);