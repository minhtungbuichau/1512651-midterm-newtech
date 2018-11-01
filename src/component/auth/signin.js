import React, { Component } from 'react'
import { GoogleLogin } from 'react-google-login-component';
import firebase from 'firebase';
export default class Signin extends Component {
    constructor (props, context) {
        super(props, context);
        var config = {
            apiKey: "AIzaSyBhSQGF4V7rPdezbjfpMkapAj9W4ZX_zxM",
            authDomain: "midterm-newtech.firebaseapp.com",
            databaseURL: "https://midterm-newtech.firebaseio.com",
            projectId: "midterm-newtech",
            storageBucket: "midterm-newtech.appspot.com",
            messagingSenderId: "310198683728"
          };
          firebase.initializeApp(config);
      }
     
      responseGoogle (googleUser) {
        var id_token = googleUser.getAuthResponse().id_token;
        var googleId = googleUser.getId();
        
        console.log({ googleId });
        console.log({accessToken: id_token});
      }
  
    render() {
    return (
        <div>
            <GoogleLogin 
                        socialId="yourClientID"
                        className="google-login"
                        scope="profile"
                        fetchBasicProfile={false}
                        responseHandler={this.responseGoogle}
                        buttonText="Login With Google"/>
      </div>
    )
  }
}
