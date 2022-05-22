import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import './Login.css'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefult();       
    };
    
    const register = () => {
        if (!name) {
            return alert('Please enter full name!!')
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            });
        })
        .then((userAuth) => {
            dispatch(
                login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name, 
                    photoUrl: profilePic,
            }));
        }).catch((error) => alert(error));
    };
    
    return (
        <div className='login'>
            <img src='https://cdn2.downdetector.com/static/uploads/logo/LinkedIn.png
            ' />

            <form> 
                <input 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder='Full name (requirde if registring)' 
                type="text" />

                <input 
                value={profilePic} 
                onChange={(e) => setProfilePic(e.target.profilePic)} 
                placeholder='Profil pic URL (optional)' 
                type="text" />

                <input 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder='Email' 
                type="email" />

                <input 
                value={password} 
                placeholder='Password' 
                onChange={(e) => setPassword(e.target.value)} 
                type="password" />

                <button type='submit' onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a mamber? {" "}
                <span className='login__register' onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login