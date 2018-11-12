import React,{Component} from 'react';
import {selectedFriendChating} from './../../action/friendChatingAction';
import  {connect} from 'react-redux';
import {compose} from 'redux';
import {firebaseConnect} from 'react-redux-firebase';

class FriendItem extends Component {


    onClick = (userData)=>{
        this.props.onSelectFriendChating(userData);
    };
    render() {
        var{userData} = this.props;
        console.log(userData);

        
        return (
            <li className="clearfix" onClick={() =>this.onClick(userData)}>
                <img src={userData.avatarUrl} className="avatar" alt="avatar" />
                <div className="about">
                    <div className="name">
                        {userData.displayName}
                    </div>
                    <div className="status">
                        <i className={"fa fa-circle " + this.props.icon}/> {this.props.text}
                    </div>
                </div>
            </li>
        );
    }
}

var mapDispatchToProps =(dispatch)=>{
    return{
        onSelectFriendChating: (selectedFriend)=>{dispatch(selectedFriendChating(selectedFriend));}
    }
};
export default compose(firebaseConnect(props =>[{path: 'starState'}]) , connect(null,mapDispatchToProps))(FriendItem);

