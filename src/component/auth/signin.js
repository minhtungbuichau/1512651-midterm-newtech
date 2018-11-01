import React, { Component } from 'react'
import { GoogleLogin } from 'react-google-login-component';
import firebase from 'firebase';
// import '../../.././public/frontend/login.css';
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
              <div className="container">
                <div className="row">
                  <div className="col-sm-4" />
                  <div className="col-sm-4">
                    <p> Course: New technology in Software Development</p>  <hr />
                    <p /><h2>Bùi Châu Minh Tùng - 1512651</h2><p />
                    <hr />
                    <buttonn className="btn btn-danger">
                      <GoogleLogin 
                          onSuccess={this.responseGoogle}
                          onFailure={this.responseGoogle}
                          socialId="310198683728-fkbd6auo302gj5rfr9lqufapr16trmut.apps.googleusercontent.com"
                          className="google-login"
                          scope="profile"
                          fetchBasicProfile={false}
                          responseHandler={this.responseGoogle}
                          buttonText="Login With Google"
                        />
                    </buttonn>
                  </div>
                  <div className="col-sm-4" />
                </div>
              </div>

            
           
      </div>
    )
  }
}
