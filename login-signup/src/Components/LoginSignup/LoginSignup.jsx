import React, { useState } from 'react';
import './LoginSignup.css';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup
} from 'firebase/auth';
import { auth, googleProvider } from '../../firebase';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import logo from '../Assets/Group 7.png';

export const LoginSignup = () => {
    const [action, setAction] = useState("Sign Up");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSignUp = async () => {
        setError("");
        setLoading(true);
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("User registered successfully!");
            setAction("Login");
        } catch (err) {
            handleAuthError(err);
        } finally {
            setLoading(false);
        }
    };

    const handleLogin = async () => {
        setError("");
        setLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("Logged in successfully!");
        } catch (err) {
            handleAuthError(err);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        setError("");
        setLoading(true);
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            console.log("Google Login Success:", user);
            alert("Signed in with Google successfully!");
        } catch (err) {
            console.error("Error during Google login:", err);
            handleAuthError(err);
        } finally {
            setLoading(false);
        }
    };

    const handleAuthError = (err) => {
        console.error("Authentication error:", err);
        switch (err.code) {
            case 'auth/popup-closed-by-user':
                setError("The popup was closed before completing the authentication.");
                break;
            case 'auth/cancelled-popup-request':
                setError("Authentication request was cancelled.");
                break;
            case 'auth/operation-not-allowed':
                setError("Google sign-in is not enabled in Firebase Authentication.");
                break;
            case 'auth/network-request-failed':
                setError("Network error, please check your internet connection.");
                break;
            case 'auth/invalid-credential':
                setError("The credentials provided were invalid.");
                break;
            case 'auth/user-not-found':
                setError("No user found with this email.");
                break;
            case 'auth/wrong-password':
                setError("Incorrect password.");
                break;
            default:
                setError("An unknown error occurred: " + err.message);
        }
    };

    return (
        <div className='container'>
            <div className='header'>
                <img src={logo} alt="Logo" className="logo" />
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>

            <div className="inputs">
                {action === "Sign Up" && (
                    <div className="input">
                        <img src={user_icon} alt="User icon" />
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                )}

                <div className="input">
                    <img src={email_icon} alt="Email icon" />
                    <input
                        type="email"
                        placeholder="Email Id"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="input">
                    <img src={password_icon} alt="Password icon" />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>

            {error && <p className="error-message">{error}</p>}

            {action === "Login" && (
                <div className="forgot-password">
                    Forgot Password? <span>Click Here!</span>
                </div>
            )}

            <div className="submit-container">
                {action === "Sign Up" ? (
                    <button className="submit" onClick={handleSignUp} disabled={loading}>
                        {loading ? "Signing Up..." : "Sign Up"}
                    </button>
                ) : (
                    <button className="submit" onClick={handleLogin} disabled={loading}>
                        {loading ? "Logging In..." : "Login"}
                    </button>
                )}
            </div>

            <div className="google-button" onClick={handleGoogleLogin} disabled={loading}>
                <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google logo" />
                <span>Continue with Google</span>
            </div>

            <div className="toggle-auth">
                {action === "Sign Up" ? "Already have an account?" : "Don't have an account?"}{" "}
                <span
                    className={`toggle-link ${action === "Sign Up" ? "red-text" : ""}`}
                    onClick={() => setAction(action === "Sign Up" ? "Login" : "Sign Up")}
                >
                    {action === "Sign Up" ? "Login" : "Sign Up"}
                </span>
            </div>
        </div>
    );
};