import React, { useEffect, useState } from 'react';
import {
    Link,
    HashRouter,
    Route,
    Redirect,
  } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import Home from './Home';
import TopSeries from './TopSeries';
import SignInUp from './SignInUp';
import fire from '../config/fbConfig'; 
import Followed from './Followed';

export default function AppContent(){

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    };

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }

    const handleLogin = () => {
        clearErrors();
        fire
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(err => {
            switch(err.code){
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                    setEmailError(err.message);
                    break;
                case "auth/wrong-password":
                    setPasswordError(err.message);
                    break;
            }
        })
    }

    const handleSignUp = () => {
        clearErrors();
        fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(err => {
            switch(err.code){
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                    setEmailError(err.message);
                    break;
                case "auth/weak-password":
                    setPasswordError(err.message);
                    break;
            }
        })
    }

    const handleLogout = () => {
        fire.auth().signOut();
    }

    const authListener = () => {
        fire.auth().onAuthStateChanged(user => {
            if(user){
                clearInputs();
                setUser(user);
            } else {
                setUser('');
            }
        })
    }

    useEffect(() => {
        authListener();
    }, [])

    return(
        <>
        <HashRouter>
        <nav className='main-nav'>
                <div className='logo'>
                    <FontAwesomeIcon icon={faVideo} />
                    <p>Track<span>Series</span></p>
                </div>
                <ul>
                    <Link exact to='/' className='link'><li>Home</li></Link>
                    <Link exact to='/TopSeries' className='link'><li>Top Series</li></Link>
                    {user ? (
                        <>
                        <Link exact to='/Followed' className='link'><li>Followed</li></Link>
                        <Link exact to='/' className='link'><li onClick = {handleLogout}>Logout</li></Link>
                        <Redirect to = '/' />
                        <li>{firstName} {lastName}</li>
                        </>
                    ) : (
                        <Link exact to='/SignInUp' className='link'><li>SignIn/up</li></Link>
                    )}
                </ul>
            </nav>
            <Route exact path='/' component={Home} />
            <Route path='/TopSeries'  
                render = {(props) => (
                    <TopSeries {...props}
                    user = {user}
                    />
                )}
            />
            <Route path='/Followed' component={Followed}/>
            <Route path='/SignInUp' 
            render = {(props) => (
                <SignInUp {...props}
                email = {email}
                setEmail={setEmail}
                password = {password}
                setPassword = {setPassword}
                handleLogin = {handleLogin}
                handleSignUp = {handleSignUp}
                hasAccount = {hasAccount}
                setHasAccount = {setHasAccount}
                emailError = {emailError}
                passwordError = {passwordError}
                setFirstName = {setFirstName}
                setLastName = {setLastName}
                />
            )}
            />
        </HashRouter>
        </>
    )
}