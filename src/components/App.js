import React,{useEffect,useState}from 'react';
import Navigation from "./Navigation";
import Header from "./Header";
import FIREBASE from "../firebase";
import { useHistory } from 'react-router-dom';


function App() {
   const history = useHistory();

    useEffect(() => {
             FIREBASE.auth.onAuthStateChanged(function (user) {
                if (user) {
                    // User is signed in.
                    let uid = user.uid;
                    console.log('Pasar uid', uid);
                    history.push(`/forosprincipal/${uid}`);
                } else {
                    // User is signed out.
                    console.log('user loggedOut');
                    history.replace("/");
                }
            });
        return () => {
            console.log('UNSUBSCRIBE');
        };
        },[]);

    return (
            <div>
                <Header />
                <Navigation/>
            </div>

    );
}

export default App;
