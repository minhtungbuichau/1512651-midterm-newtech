import React,{Component} from 'react';
import  {connect} from 'react-redux'
import FriendChat from "./FriendChat";
import MessageItem from "./MessageItem";
import {compose} from 'redux';
import ListMessage from "./ListMessage";
import {generateID} from './../../definition/randomID';
import {getFirebase} from "react-redux-firebase";

class Text extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedImage: null,
            imageurl: null,
            messageToSend: '',
            content: '',
        }
    }
    validURL(str) {//get from internet
        var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
        if(!regex .test(str)) {
            return false;
        } else {
            return true;
        }
    }
    onChange = (event) =>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if(this.validURL(value)){
            this.setState({
                imageurl: value,
            });
        }
        
        this.setState({
            [name]: value,
        });
    };

    
    onSendMessage = (databaseURL,friendDatabaseURL) =>{
        var {content,imageurl} = this.state;
        var ownImage = this;
        if(this.state.selectedImage != null){
            const {selectedImage} = this.state;
            var storageRef = getFirebase().storage().ref('message').child('images').child(selectedImage.name);
            storageRef.put(selectedImage).then(function(snapshot){
                storageRef.getDownloadURL().then(url => {
                    getFirebase().database().ref('/persistenceValue/total')
                    .once('value').then(function(snapshot) {
                       var total = snapshot.val();
                    getFirebase().database().ref('/persistenceValue').update({
                        total: total + 1,
                    });
                    getFirebase().database().ref(databaseURL+'/' + generateID() + '/message').set({
                        index: total + 1,
                        content:content,
                        time: getCurrentTime(),
                        imageurl: url,
                        type: 'auth'
                    });
        
                    getFirebase().database().ref(friendDatabaseURL+'/' + generateID() + '/message').set({
                        index: total + 1,
                        content:content,
                        time: getCurrentTime(),
                        imageurl: url,
                        type: 'friend'
                    });
                });

                ownImage.setState({
                    content: '',
                    selectedImage: null,
                });
            });
        })
    }
    else{
        getFirebase().database().ref('/persistenceValue/total')
            .once('value').then(function(snapshot) {
            console.log('snapshot'); console.log(snapshot.val());
            var total = snapshot.val();
            getFirebase().database().ref('/persistenceValue').update({
                total: total + 1,
            });

            getFirebase().database().ref(databaseURL+'/' + generateID() + '/message').set({
                index: total + 1,
                content:content,
                time: getCurrentTime(),
                imageurl: imageurl,
                type: 'auth'

            });

            getFirebase().database().ref(friendDatabaseURL+'/' + generateID() + '/message').set({
                index: total + 1,
                content:content,
                time: getCurrentTime(),
                imageurl: imageurl,
                type: 'friend'
            });

            ownImage.setState({
                content: '',
                selectedImage: null,
            });

        });
    }


    };
    onSendImageButton = () => { this.refs.fileUpload.click();}// uploadimagecliker
    onImageUpload = (event) =>{//imageuploadchange
        var file = event.target.files[0];
        this.setState({
            selectedImage: file,
        })
        console.log("uploaded");
    };
    render() {
        var {selectedFriendChatting} = this.props;
        var listMessagesFirebaseURL = '';
        var listMessagesFirebaseURLForFriend= '';
        if(selectedFriendChatting.key) {
            listMessagesFirebaseURL = 'users/' + getFirebase().auth().currentUser.uid + '/ListMessages/' + selectedFriendChatting.key;
            listMessagesFirebaseURLForFriend = 'users/' + selectedFriendChatting.key + '/ListMessages/' + getFirebase().auth().currentUser.uid ;
        }
        const {selectedImage} = this.state;
        var imgSent = selectedImage? <img src={URL.createObjectURL(selectedImage) } className="image-sent" alt="imageSend"/>: '';
        return (
            <div className="chat-message clearfix">
                <textarea required name="content" id="message-to-send" placeholder="Type your message" rows={3} onChange={this.onChange} value={this.state.content} />
                {imgSent}
                <input type="file" id="file" ref="fileUpload" style={{display: "none"}} onChange={this.onImageUpload}/>
    
                <i className="far fa-images send-image-icon" onClick={this.onSendImageButton} />
                <button onClick={() =>this.onSendMessage(listMessagesFirebaseURL,listMessagesFirebaseURLForFriend)}>Send</button>
                
            </div>
        );
    }
}
const getCurrentTime = ()=>{
    return (new Date()).toLocaleString();
};
const mapStateToProps = (state)=>{
    return{
        selectedFriendChatting: state.selectedFriendChatting,
        firebase: state.firebase
    }
};
export default connect(mapStateToProps)(Text);
