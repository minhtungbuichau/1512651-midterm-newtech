import { createStore, combineReducers, compose } from 'redux';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import firebase from 'firebase';
import * as Config from './../definition/config'
import isSigned from './signInReducer'
import authReducer from './authReducer';
import selectedFriendChatting from './friendChatingReducer'
import sendingMessage from './sendMessageReducer';

if (!firebase.apps.length) {
    firebase.initializeApp(Config.config);
}
export const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, Config.rrfConfig), // firebase instance as first argument
    // reduxFirestore(firebase) // <- needed if using firestore
)(createStore);

// Add firebase to reducers
export const rootReducer = combineReducers({
    firebase: firebaseReducer,
    authReducer: authReducer,
    isSigned: isSigned,
    selectedFriendChatting: selectedFriendChatting,
    sendingMessage : sendingMessage,

    // firestore: firestoreReducer // <- needed if using firestore
});