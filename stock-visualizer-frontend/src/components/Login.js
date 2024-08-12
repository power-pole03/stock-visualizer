import React, {useState} from 'react';
import './Login.css';

function Login({ onLogin, onLogout }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(username, password);
    };

    return(
        <form onSubmit={handleSubmit} className='login-form'>
            <h2>Login</h2>
            <input
                type='text'
                value={username}
                placeholder='Username'
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <input
                type='password'
                value={password}
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <div className="button-container">
                <button type='submit'>Log in</button>
                <button type='button' onClick={onLogout}>Log out</button>
            </div>
        </form>
    );
}

export default Login;