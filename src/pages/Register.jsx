

import "../App.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="auth-page">
      <div className="auth-left">
        <div className="auth-overlay">
          <h1>Join HunarHub</h1>
          <p>
            Create your account and start hiring talented freelancers or grow
            your freelance career.
          </p>

          <div className="auth-features">
            <div className="feature-box">
              <h3>700+</h3>
              <span>Service Categories</span>
            </div>

            <div className="feature-box">
              <h3>24×7</h3>
              <span>Dedicated Support</span>
            </div>

            <div className="feature-box">
              <h3>100%</h3>
              <span>Secure Payments</span>
            </div>
          </div>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-card">
          <h2>Create Account</h2>
          <p>Join the HunarHub community.</p>

          <form>
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" />

            <label>Username</label>
            <input type="text" placeholder="Choose a username" />

            <label>Email</label>
            <input type="email" placeholder="Enter your email" />

            <label>Phone Number</label>
            <input type="tel" placeholder="Enter your phone number" />

            <label>Password</label>
            <input type="password" placeholder="Create a password" />

            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm your password" />

            <label>I am a</label>
            <div className="role-selection">
              <label className="role-card">
                <input type="radio" name="role" value="freelancer" />
                <div>
                  <h4>Freelancer</h4>
                  <span>Find projects & earn</span>
                </div>
              </label>

              <label className="role-card">
                <input type="radio" name="role" value="client" />
                <div>
                  <h4>Client</h4>
                  <span>Hire skilled talent</span>
                </div>
              </label>
            </div>

            <button type="submit" className="auth-btn">
              Create Account
            </button>
          </form>

          <p className="bottom-text">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;