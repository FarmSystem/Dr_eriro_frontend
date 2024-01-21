import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        name === 'email' ? setEmail(value) : setPassword(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 가상 로그인
        const isLoggedIn = email === 'farm@naver.com' && password === 'farm12345';

        if (isLoggedIn) {
            alert('로그인 성공!');
            navigate('/reservation'); // 로그인 후 이동할 페이지 경로 적으면 될 듯 !
        } else {
            alert('로그인 실패. 다시 시도해주세요.');
        }
    };

    return (
        <div className='login-page'>
            <h1>로그인</h1>
            <form onSubmit={handleSubmit}>
                <div className='email'>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />
                </label>
                </div>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button type="submit" className="loginbutton">로그인</button>
            </form>
        </div>
    );
};

export default Login;
