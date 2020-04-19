import React, { Component, setGlobal } from 'reactn';
import ReactDOM from "react-dom";
import Home from "../pages/Home";
import { FirestoreProvider } from 'react-firestore';
import firebase from 'firebase/app';
import 'firebase/firestore';
import cred from '../../../fire';
import {BrowserRouter, Route} from 'react-router-dom'
import Admin from "./Admin";
import Index from "./index";
import Navbar from "./ui/navbar";
import Footer from "./ui/footer";

let IndexPage = (props) => {
    return <Index />
};

let AdminPage = (props) => {
    return <Admin />
};

class App extends Component {
    render() {
        return (

            <BrowserRouter>
                <div>
                    <Navbar />
                   <Route exact path="/" component={IndexPage}/>
                   <Route exact path="/home" component={IndexPage}/>
                   <Route exact path="/admin" component={AdminPage}/>
                   <Footer />
                </div>
            </BrowserRouter>

        );
    }
}

export default App;

const config = {
    apiKey: cred.MIX_REACT_APP_FIREBASE_API_KEY,
    authDomain: cred.MIX_REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: cred.MIX_REACT_APP_FIREBASE_DB_URL,
    projectId: cred.MIX_REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: cred.MIX_REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: cred.MIX_REACT_APP_FIREBASE_MSG_SND_ID,
};

firebase.initializeApp(config);

setGlobal({
    toPlay: ""
});

if (document.getElementById('index')) {
    ReactDOM.render(
        <FirestoreProvider firebase={firebase}>
            <App />
        </FirestoreProvider>, document.getElementById('index'));
}
