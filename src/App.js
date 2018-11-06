import React, {Component} from 'react';

import {firebaseConnect, isLoaded, isEmpty} from 'react-redux-firebase';
import {connect} from 'react-redux';
import {compose} from 'redux';
import SignOut from "./component/SignOut";
import Signin from "./component/Signin";
import  * as action from './action/action';
import HomePage from "./component/HomePage";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSigned: true,
        };
    }


    render() {

        var {auth} = this.props;
        console.log(auth);
        var buttonMaster = auth.isEmpty? <Signin/> : '';
        var homePage= auth.isEmpty? '': <HomePage/>;
        console.log(buttonMaster);
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        {homePage}
                    </div>
                </div>
                {buttonMaster}
            </div>
        );
    }
}


const mapStateToProps = (state) =>{
    return{
        auth: state.firebase.auth,
    };
};


export default connect(mapStateToProps,null)(App);
