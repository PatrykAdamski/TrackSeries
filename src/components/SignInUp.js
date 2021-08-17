import React from 'react';



export default function SignIn(props){

        const {email, setFirstName, setLastName, setEmail, password, setPassword, handleLogin, handleSignUp, hasAccount, setHasAccount, emailError, passwordError} = props;
    return(
        <>
            <div className="container container-form">
                <form className='form'>
                    {hasAccount ? (
                        <h3 className='signin-text'>Sign In</h3>
                    ) : (
                        <h3 className='signin-text'>Sign Up</h3>
                    )}
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' value = {email} onChange={(e) => setEmail(e.target.value)}/>
                        <p className = 'errorMsg'>{emailError}</p>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' value = {password} onChange={(e) => setPassword(e.target.value)}/>
                        <p className = 'errorMsg'>{passwordError}</p>
                    </div>
                    {hasAccount ? (
                        <>
                        <div className='input-field'>
                        <button className='btn-primary' onClick={handleLogin}>Sign In</button>
                        <p>Don't have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
                        </div>
                        </>
                    ) : (
                        <>
                        <div className='input-field'>
                        <label htmlFor='firstName'>First Name</label>
                        <input type='text' id='firstName' onChange = {(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='lastName'>Last Name</label>
                        <input type='text' id='lastName' onChange = {(e) => setLastName(e.target.value)}/>
                    </div>
                    <div className='input-field'>
                        <button className='btn-primary' onClick={handleSignUp}>Sign up</button>
                        <p>Have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
                    </div>
                    </>
                    )}
                </form>
            </div>
        </>
    )

} 