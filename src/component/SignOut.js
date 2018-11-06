import React,{Component} from 'react';
import {connect} from 'react-redux';
import {signOut} from  './../action/authAction';
class SignOut  extends Component{
    render(){

        return(
            <div>
                <button
                    className= "justify-content-center btn btn-danger"
                    onClick={() => {this.props.signOut();}}>
                    Logout
                </button>
            </div>
        );
    }
}
var mapDispatchToProps = (dispatch) =>{
    return{
        signOut: () =>dispatch(signOut()),
    }
};
export default connect(null,mapDispatchToProps)(SignOut);