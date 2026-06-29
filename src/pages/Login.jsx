

import "../App.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="auth-page">
      <div className="auth-left">
        <div className="auth-overlay">
          <h1>Welcome Back</h1>
          <p>
            Continue your journey with HunarHub and connect with talented
            freelancers and clients.
          </p>

          <div className="auth-features">
            <div className="feature-box">
              <h3>10K+</h3>
              <span>Active Freelancers</span>
            </div>

            <div className="feature-box">
              <h3>500+</h3>
              <span>Projects Posted Daily</span>
            </div>

            <div className="feature-box">
              <h3>4.9 ★</h3>
              <span>Average Rating</span>
            </div>
          </div>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-card">
          <h2>Login</h2>
          <p>Welcome back! Please login to your account.</p>

          <form>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />

            <label>Password</label>
            <input type="password" placeholder="Enter your password" />

            <div className="forgot-row">
              <Link to="#">Forgot Password?</Link>
            </div>

            <button type="submit" className="auth-btn">
              Login
            </button>
          </form>

          <div className="auth-divider">
            <span>OR</span>
          </div>

          <button className="google-btn">
            Continue with Google
          </button>

          <p className="bottom-text">
            New to HunarHub? <Link to="/register">Create Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;