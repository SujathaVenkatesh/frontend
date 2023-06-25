import React from 'react';
import './Signup.css';
import { FaEye, FaMailBulk } from 'react-icons/fa';

const Login = () => {
  return (
    <section id="sign">
      <div className="login-boxes">
        <form action="name" className='form'>
          <h2 className='log'>Join Our Team</h2>
          <div className="input-boxes">
            <span className="icon">
              <FaMailBulk/>
            </span>
            <input type="email" required />
            <label>Email</label>
          </div>

          <div className="input-boxes">
            <span className="icon">
              <FaEye/>
            </span>
            <input type="password" required />
            <label>Password</label>
          </div>

          <div className="remember-forgot">
           
            <a href="Register">Forgot Password</a>

          <button type="submit" className='logbut' a href='/Welcome'>Login</button>
          <div className="register-link">
            <p>
              Don't have an account? <a href="/Register">Register</a>
            </p>
          </div>
          </div>
        </form>
      </div>
    
    </section>
  );
};

export default Login;